import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { generateToken, getCleanUser } from "../utils/jwtUtils.js";
import { JWT_SECRET } from "../config/env.config.js";
import { db } from "../models/index.js";

const User = db.User;

export const signin = async (req, res) => {
  try {
    const email = req.body.email;
    const pwd = req.body.password;

    if (!email || !pwd) {
      return res.status(400).json({
        error: true,
        message: "Email or Password required.",
      });
    }
    let userData = await User.findOne({ where: { email: email } });
    let result = bcrypt.compareSync(pwd, userData.password);

    if (!result) return res.status(401).send("Password not valid!");
    const token = generateToken(userData);
    const userObj = getCleanUser(userData);
    return res.json({ user: userObj, access_token: token });
  } catch (err) {
    return res.status(500).json({ message: "Hubo algun error al logearte" });
  }
};

export const isAuthenticated = async (req, res, next) => {
  const token = req.token;
  if (!token) {
    return res.status(400).json({
      error: true,
      message: "Token is required.",
    });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const userData = await User.findOne({ email: user.email });

    if (!userData) {
      return res.status(401).json({
        error: true,
        message: "Invalid user.",
      });
    }

    req.user = userData;
    next();
  } catch (err) {
    return res.status(401).json({
      error: true,
      message: "Invalid token.",
    });
  }
};
