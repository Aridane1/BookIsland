export default function createMessageModel(sequelize, Sequelize) {
  const Message = sequelize.define("message", {
    author: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    emit_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    recep_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  });
  return Message;
}
