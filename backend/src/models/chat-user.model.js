export default function createChatUserModel(sequelize, Sequelize) {
  const ChatUser = sequelize.define("chatUser", {
    interested_user: {
      type: Sequelize.INTEGER,
    },
    changing_user: {
      type: Sequelize.INTEGER,
    },
    book_id: {
      type: Sequelize.INTEGER,
    },
    finish_chat: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });
  return ChatUser;
}
