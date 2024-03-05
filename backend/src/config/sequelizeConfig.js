import { Sequelize } from "sequelize";
import { development } from "./databaseConfig.js";

export const sequelize = new Sequelize(
  development.database,
  development.username,
  development.password,
  {
    host: development.host,
    dialect: development.dialect,
    operatorsAliases: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Esto evita que Sequelize verifique el certificado SSL (no recomendado en producción)
      },
    },
  }
);
