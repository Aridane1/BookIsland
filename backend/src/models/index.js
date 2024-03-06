import { Sequelize } from "sequelize";
import { sequelize } from "../config/sequelizeConfig.js";
import createUserModel from "./user.model.js";
import createBookModel from "./book.model.js";

export const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = createUserModel(sequelize, Sequelize);

db.Book = createBookModel(sequelize, Sequelize);
