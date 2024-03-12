import { MESSAGES } from "../constants/index.js";
import { createMessage, getAllMessagesByChat } from "./message.controller.js";

let wsServer = null;
let chats = {};

let newMessage = {};
export default function startWs(wss) {
  wsServer = wss;
  wsServer.on("connection", (ws, incoming_request) => {
    const url = new URLSearchParams(incoming_request.url);

    const chatId = url.get("chat_id");
    const userId = url.get("user_id");

    if (!chats[chatId]) {
      chats[chatId] = [];
    }

    const taskRef = { ws, chatId, userId };

    chats[chatId].push(taskRef);

    ws.on("message", (message) => {
      const parseMessage = JSON.parse(message);

      if (parseMessage.type === MESSAGES.SEND_MESSAGES) {
        newMessage = {
          chat_id: taskRef.chatId,
          user_id: taskRef.userId,
          author: parseMessage.username,
          content: parseMessage.message,
        };

        createMessage(newMessage).then(() => {
          newMessage.type = MESSAGES.NEW_MESSAGE;
          chats[emitId].ws.send(JSON.stringify(newMessage));
        });
      }

      if (parseMessage.type === MESSAGES.GET_ALL_MESSAGES) {
        getAllMessagesByChat(taskRef.emitId, taskRef.recepId).then(
          (messages) => {
            taskRef.ws.send(
              JSON.stringify({
                type: MESSAGES.GET_ALL_MESSAGES,
                messages: JSON.stringify(messages),
              })
            );
          }
        );
      }
      if (parseMessage.type === MESSAGES.GET_LAST_MESSAGES) {
        getAllMessagesByChat(taskRef.emitId, taskRef.recepId).then(
          (messages) => {
            taskRef.ws.send(
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
