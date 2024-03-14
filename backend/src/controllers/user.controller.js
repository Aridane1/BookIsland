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
      filename: req.file ? req.file.filename : ""
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

export const updateUser = async (req, res) => {
  try {
    let { username, email, password, gender, description } =
      req.body;
    const { userId } = req.params;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send({ message: "User Not Found!" });
    }
    let newUser = {
      username: username,
      email: email,
      password: password,
      gender: gender,
      description: description,
      filename: req.file ? req.file.filename : "",
    };

    if (user.filename) {
      const imagePath = path.join(__dirname, "../public/images", user.filename);
      await fs.unlink(imagePath);
      console.log("Image deleted");
    }

    const [num] = await User.update(newUser, {
      where: { id: userId },
    });

    if (num == 1) {
      res.send({
        message: "User updated.",
      });
    } else {
      res.send({
        message: "User cannot be updated.",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error updating user" });
  }
};

export const updateUserIfNotImage = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send({ message: "User Not Found!" });
    }
    console.log(req.body);
    const [num] = await User.update(req.body, {
      where: { id: userId },
    });

    if (num == 1) {
      res.send({
        message: "User updated.",
      });
    } else {
      res.send({
        message: "User cannot be updated.",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error updating user" });
  }
};

export const deleteOneUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send({ message: "User Not Found!" });
    }

    if (user.filename) {
      const imagePath = path.join(__dirname, "../public/images", user.filename);
      await fs.unlink(imagePath);
      console.log("Image deleted");
    }

    const num = await User.destroy({
      where: { id: userId },
    });

    if (num == 1) {
      res.send({
        message: "User deleted.",
      });
    } else {
      res.send({
        message: "User cannot be deleted.",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error deleting User" });
  }
};
