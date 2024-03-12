import { MESSAGES } from "../constants/index.js";

let wsServer = null;
let users = {};

export default function startWs(wss) {
  wsServer = wss;
  wsServer.on("connectin", (ws, incoming_request) => {
    const url = new URLSearchParams(incoming_request.url);

    const emitId = url.get("emit_id");
    const recepId = url.get("recep_id");

    if (!users[emitId]) {
      users[emitId] = [];
    }
    const taskRef = { ws, emitId, recepId };

    users[userId].push(taskRef);

    ws.on("message", (message) => {
      const parseMessage = JSON.parse(message);

      if (parseMessage.type === MESSAGES.SEND_MESSAGES) {
        let newMessage = {
          emit_id: users.emitId,
          recep_id: taskRef.recepId,
          author: parseMessage.username,
          content: parseMessage.message,
        };
      }
    });
  });
}
