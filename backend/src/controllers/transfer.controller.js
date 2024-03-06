import { db } from "../models/index.js";
import bcrypt from "bcryptjs";
const Transfer = db.Transfer;

export const createTransfer = async (req, res) => {
  try {
    let { type_transaction, date_transaction} = req.body;
    if (!type_transaction || !date_transaction) throw new Error("Missing fields");

    let transfer = {
      type_transaction: type_transaction,
      date_transaction: date_transaction,
    };

    transfer.password = bcrypt.hashSync(password);

    let newTransfer = await Transfer.create(transfer);

    res.status(200).send(newTransfer);
  } catch (err) {
    res.status(500).send({
      message: "Error creating the transfer",
    });
  }
};

export const findAllTransfer = async (req, res) => {
  try {
    let transfers = await Transfer.findAll();
    if (transfers == []) {
      return res.status(404).send({ message: "No data found" });
    }
    res.status(200).send(transfers);
  } catch (err) {
    res.status(500).send({
      message: "Error getting all the transfers",
    });
  }
};

export const updateTransfer = async (req, res) => {
  try {
    let { transferId } = req.params;
    let fieldsToUpdate = req.body;

    let transfer = await Transfer.update(transferId, fieldsToUpdate);

    if (!transfer) {
      return res.status(404).send({ message: "The transfer was not found." });
    }
    res.status(200).send(transfer);
  } catch (err) {
    res.status(500).send({ message: "Error updating the transfer" });
  }
};

export const findOneTransfer = async (req, res) => {
  try {
    let { transferId } = req.params;
    let transfer = await transfer.findOne({ where: { id: transferId } });
    if (!transfer) {
      return res.status(404).send({ message: "Transfer Not Found!" });
    }
    res.status(200).send(transfer);
  } catch (err) {
    res.status(500).send({ message: "Error finding the transfer" });
  }
};

export const deleteOneTransfer = async (req, res) => {
  try {
    let { transferId } = req.params;
    await Transfer.destroy({ where: { id: transferId } });
    res.status(200).send("Deleted Successfully");
  } catch (err) {
    res.status(500).send({ message: "Error deleting the transfer" });
  }
};
