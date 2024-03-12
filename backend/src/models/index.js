import { Sequelize } from "sequelize";
import { sequelize } from "../config/sequelize.config.js";
import createUserModel from "./user.model.js";
import createBookModel from "./book.model.js";
import createTransferModel from "./trasnfer.model.js";
import createMessageModel from "./message.model.js";

export const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = createUserModel(sequelize, Sequelize);
db.Book = createBookModel(sequelize, Sequelize);
db.Transfer = createTransferModel(sequelize, Sequelize);
db.Message = createMessageModel(sequelize, Sequelize);

db.User.hasMany(db.Book);
db.Book.belongsTo(db.User, { foreignKey: "userId" });

db.User.hasMany(db.Transfer, { foreignKey: "userId" });
db.Book.hasMany(db.Transfer, { foreignKey: "bookId" });

db.Transfer.belongsTo(db.User, { foreignKey: "userId" });
db.Transfer.belongsTo(db.Book, { foreignKey: "bookId" });

db.Message.belongsTo(db.User, { foreignKey: "emitId" });
db.Message.belongsTo(db.User, { foreignKey: "recepId" });
