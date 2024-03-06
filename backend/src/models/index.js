import { Sequelize } from "sequelize";
import { sequelize } from "../config/sequelizeConfig.js";
import createUsertModel from "./user.model.js";

export const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = createUsertModel(sequelize, Sequelize);
