import express from "express";
import cors from "cors";
import morgan from "morgan";
import { db } from "../models/index.js";

const app = express();

let corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan("dev"));

db.sequelize.sync();

export default app;