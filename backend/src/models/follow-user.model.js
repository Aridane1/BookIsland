export default function createFollowUserModel(sequelize, Sequelize) {
  const FollowUser = sequelize.define("followUser", {
    follow_user: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    following_user: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
  return FollowUser;
}
