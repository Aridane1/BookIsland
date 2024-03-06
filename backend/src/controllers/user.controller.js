import bcrypt from "bcryptjs";

import { db } from "../models/index.js";
import { generateToken, getCleanUser } from "../utils/jwtUtils.js";

const User = db.User;

export const createUser = async (req, res) => {
  try {
    let { email, password, username, gender, description } = req.body;
    if (!email || !password || !username) throw new Error("Missing fields");

    let existUser = await User.findOne({ where: { email: email } });

    if (existUser) {
      const token = generateToken(existUser);
      const userObj = getCleanUser(existUser);

      return res.status(409).json({
        message: "Email already in use",
        user: userObj,
        access_token: token,
      });
    }

    let user = {
      username: username,
      email: email,
      password: password,
      gender: gender,
      description: description,
    };

    user.password = bcrypt.hashSync(password);

    let newUser = await User.create(user);

    const token = generateToken(newUser);
    const userObj = getCleanUser(newUser);

    res.status(200).send({ user: userObj, access_token: token });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Error creating the user",
    });
  }
};

export const findAllUser = async (req, res) => {
  try {
    let users = await User.findAll();
    if (users == []) {
      return res.status(404).send({ message: "No data found" });
    }
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({
      message: "Error getting all the users",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    let { userId } = req.params;
    let fieldsToUpdate = req.body;

    let user = await User.update(userId, fieldsToUpdate);

    if (!user) {
      return res.status(404).send({ message: "The user was not found." });
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: "Error updating the user" });
  }
};

export const findOneUser = async (req, res) => {
  try {
    let { userId } = req.params;
    let user = await user.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(404).send({ message: "User Not Found!" });
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: "Error finding the user" });
  }
};

export const deleteOneUser = async (req, res) => {
  try {
    let { userId } = req.params;
    await User.destroy({ where: { id: userId } });
    res.status(200).send("Deleted Successfully");
  } catch (err) {
    res.status(500).send({ message: "Error deleting the user" });
  }
};
