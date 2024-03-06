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
    gender: {
      type: Sequelize.STRING,
    },
  });

  return User;
}
