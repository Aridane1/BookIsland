import { db } from "../models/index.js";
const Message = db.Message;

export const createMessage = (infoMessage) => {
  try {
    let message = Message.create(infoMessage);
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
