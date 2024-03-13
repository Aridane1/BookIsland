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
    });
    res.status(200).send(chatsUser);
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
