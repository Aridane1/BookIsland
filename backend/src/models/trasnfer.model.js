export default function createTransferModel(sequelize, Sequelize) {
  const Transfer = sequelize.define("transfer", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type_transaction: {
      type: Sequelize.ENUM("swap", "donate"),
    },
    date_transaction: {
      type: Sequelize.DATE,
    },
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    bookId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
  });

  return Transfer;
}
