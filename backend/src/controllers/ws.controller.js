import { MESSAGES } from "../constants/index.js";
import { createMessage, getAllMessagesByChat } from "./message.controller.js";
import { db } from "../models/index.js";
import { createChatUserWithWs } from "./chat-user.controller.js";
const ChatUser = db.ChatUser;
const Book = db.Book;
let wsServer = null;
let chats = {};

let newMessage = {};
export default function startWs(wss) {
  wsServer = wss;
  wsServer.on("connection", async (ws, incoming_request) => {
    const url = new URLSearchParams(incoming_request.url);

    const bookId = url.get("book_id");
    const userId = url.get("interested_user");

    let chat = null;

    const book = await Book.findOne({
      where: { id: bookId },
      include: { model: db.User },
    });

    chat = await ChatUser.findOne({
      where: {
        [db.Sequelize.Op.or]: [
          {
            interested_user: userId,
            changing_user: book.user.id,
            book_id: bookId,
          },
          {
            interested_user: book.user.id,
            changing_user: userId,
            book_id: bookId,
          },
        ],
      },
    });
    let chatRef;
    if (!chats[bookId]) {
      chats[bookId] = [];
      if (chat === null) {
        let chatUser = {
          interested_user: Number(userId),
          changing_user: Number(book.user.id),
          book_id: Number(bookId),
          finish_chat: false,
        };

        chat = await createChatUserWithWs(chatUser);
        chatRef = { ws, chatId: chat.id, userId };
      }
    }

    chats[bookId].push(chatRef);

    ws.on("message", (message) => {
      const parseMessage = JSON.parse(message);

      if (parseMessage.type === MESSAGES.SEND_MESSAGES) {
        newMessage = {
          chat_id: chatRef.chatId,
          user_id: chatRef.userId,
          author: parseMessage.username,
          content: parseMessage.message,
        };

        createMessage(newMessage).then(() => {
          newMessage.type = MESSAGES.NEW_MESSAGE;
          chatRef.ws.send(JSON.stringify(newMessage));
        });
      }

      if (parseMessage.type === MESSAGES.GET_ALL_MESSAGES) {
        getAllMessagesByChat(chatRef.emitId, chatRef.recepId).then(
          (messages) => {
            chatRef.ws.send(
              JSON.stringify({
                type: MESSAGES.GET_ALL_MESSAGES,
                messages: JSON.stringify(messages),
              })
            );
          }
        );
      }
      if (parseMessage.type === MESSAGES.GET_LAST_MESSAGES) {
        getAllMessagesByChat(chatRef.emitId, chatRef.recepId).then(
          (messages) => {
            chatRef.ws.send(
              JSON.stringify({
                type: MESSAGES.GET_LAST_MESSAGES,
                messages: JSON.stringify(messages),
              })
            );
          }
        );
      }
    });
  });
}
