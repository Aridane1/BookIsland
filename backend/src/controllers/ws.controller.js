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
    const urlParams = incoming_request.url.split("?")[1];
    const params = new URLSearchParams(urlParams);

    const bookId = params.get("book_id");
    const userId = params.get("interested_user");
    const userId2 = params.get("changing_user");

    const book = await Book.findOne({
      where: { id: bookId },
      include: { model: db.User },
    });

    let chat = await ChatUser.findAll({
      where: {
        [db.Sequelize.Op.or]: [
          {
            interested_user: userId,
            changing_user: userId2,
            book_id: bookId,
          },
          {
            interested_user: userId2,
            changing_user: userId,
            book_id: bookId,
          },
        ],
      },
    });

    let chatRef;

    if (!chats[bookId]) {
      chats[bookId] = [];
      if (chat.length === 0) {
        console.log(Number(userId), Number(book.user.id), Number(bookId));
        chat = await createChatUserWithWs({
          interested_user: Number(userId),
          changing_user: Number(book.user.id),
          book_id: Number(bookId),
          finish_chat: false,
        });
        chatRef = { ws, chatId: chat.id, userId };
      }
    }
    if (!chatRef) {
      chatRef = { ws, chatId: chat.id, userId };
    }

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
          console.log(newMessage);
          chats[bookId].forEach((item) =>
            item.ws?.send(JSON.stringify(newMessage))
          );
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
