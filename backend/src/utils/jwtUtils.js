import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/envConfig.js";

export const generateToken = (userData) => {
  if (!userData) return null;

  var user = {
    id: userData.id,
    username: userData.username,
    email: userData.email,
  };

  return jwt.sign(user, JWT_SECRET, {
    expiresIn: 60 * 60 * 24,
  });
};

export const getCleanUser = (userData) => {
  if (!userData) return null;

  return {
    id: userData.id,
    username: userData.username,
    email: userData.email,
  };
};
