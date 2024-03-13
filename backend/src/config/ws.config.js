import { WebSocketServer } from "ws";
import http from "http";

import app from "./app.js";
import startWs from "../controllers/ws.controller.js";

let server = http.createServer();

const wsServer = new WebSocketServer({
  server: server,
});

server.on("request", app);

startWs(wsServer);

export default server;
