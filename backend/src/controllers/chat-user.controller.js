import { db } from "../models/index.js";
const ChatUser = db.ChatUser;

export const createChatUser = async (req, res) => {
  try {
    let chatUser = await ChatUser.create(req.body);
    if (!chatUser) {
      return res.status(404).send({ message: "Error creating the chat user" });
    }
    return res.status(200).send({ message: "Succesfull to create chat user" });
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
};
export const createChatUserWithWs = async (data) => {
  try {
    const result = await ChatUser.create(data);

    if (!result) {
      return;
    }

    return result;
  } catch (err) {
    return;
  }
};

export const getChatUserByInterestedAndChangingUser = async (req, res) => {
  try {
    let { userId } = req.params;
    let chatsUser = await ChatUser.findAll({
      where: {
        [db.Sequelize.Op.or]: [
          { interested_user: userId },
          { changing_user: userId },
        ],
      },
      include: [
        {
          model: db.User,
          as: "interestedUser",
          foreignKey: "interested_user",
        },
        {
          model: db.User,
          as: "changingUser",
          foreignKey: "changing_user",
        },
      ],
    });

    let combinedUsers = chatsUser.map((chat) => {
      const combinedUser = { id: chat.id, user: {} };

      if (chat.interestedUser.id !== Number(userId)) {
        combinedUser.user = chat.interestedUser;
      }

      if (chat.changingUser.id !== Number(userId)) {
        combinedUser.user = chat.changingUser;
      }

      return combinedUser;
    });
    res.status(200).send(combinedUsers);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal server error" });
  }
};

export const deleteChatUser = async (req, res) => {
  try {
    let { chatId } = req.params;
    let result = await ChatUser.destroy({ where: { id: chatId } });
    if (!result) {
      return res
        .status(404)
        .send({ message: "Unable to remove user from conversation" });
    }
    res.status(200).send({ message: "The chat was deleted succesfull" });
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
};
