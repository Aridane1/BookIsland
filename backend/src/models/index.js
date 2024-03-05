import { Sequelize } from "sequelize";
import { sequelize } from "../config/sequelizeConfig.js";

export const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
