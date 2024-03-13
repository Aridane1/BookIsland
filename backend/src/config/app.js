import express from "express";
import { exec } from "child_process";
import cors from "cors";
import morgan from "morgan";

import { db } from "../models/index.js";
import userRouter from "../routes/user.routes.js";
import bookRouter from "../routes/book.routes.js";
import transferRouter from "../routes/transfer.routes.js";
import chatUserRouter from "../routes/chat-user.routes.js";

import verifyToken from "../middlewares/verifyToken.middleware.js";

const app = express();

let corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(verifyToken);

app.use(morgan("dev"));

app.use("/api/user", userRouter);
app.use("/api/book", bookRouter);
app.use("/api/transfer", transferRouter);
app.use("/api/chat-user", chatUserRouter);

db.sequelize.sync();
// db.sequelize.sync({ force: true });
// .then(() => {
//   exec("sequelize db:seed:all", (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error al ejecutar los seeders: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       console.error(`stderr: ${stderr}`);
//       return;
//     }
//     console.log(`Seeders ejecutados correctamente: ${stdout}`);
//   });
// });

export default app;
