import { db } from "../models/index.js";
const Message = db.Message;

export const createMessage = async (infoMessage) => {
  try {
    let message = await Message.create(infoMessage);
    return;
  } catch (err) {
    return "Error creating the message";
  }
};

export const addManyMessage = async (req, res) => {
  try {
    let { messages } = req.body;
    await Message.bulkCreate(messages);
    res.status(200).send({ message: "Message added successfully" });
  } catch (err) {
    res.status(400).send({ message: "Error adding the messages" });
  }
};

export const getAllMessagesByChat = async (chatId) => {
  try {
    let messages = await Message.findAll({
      where: {
        chat_id: chatId,
      },
    });
    return messages;
  } catch (err) {
    console.log(err);
  }
};
