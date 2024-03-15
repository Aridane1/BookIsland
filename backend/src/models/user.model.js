export default function createUserModel(sequelize, Sequelize) {
  const User = sequelize.define("user", {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
    filename: {
      type: Sequelize.STRING,
    },
    genre: {
      type: Sequelize.STRING,
    },
  });

  return User;
}
