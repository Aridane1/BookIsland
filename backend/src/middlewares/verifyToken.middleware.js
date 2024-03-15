import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.config.js";

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return next();

  if (token.indexOf("Basic ") === 0) {
    handleBasicAuth(req, res, next);
  } else if (token.indexOf("Bearer ") === 0) {
    handleBearerToken(req, res, next, token);
  } else {
    return res.status(401).json({
      error: true,
      message: "Tipo de autenticación no compatible.",
    });
  }
};

const handleBasicAuth = (req, res, next) => {
  const base64Credentials = req.headers.authorization.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "ascii"
  );

  const [email, password, type] = credentials.split(":");
  req.body.email = email;
  req.body.password = password;

  next();
};

const handleBearerToken = (req, res, next, token) => {
  token = token.replace("Bearer ", "");
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({
        error: true,
        message: "Usuario no válido.",
      });
    } else {
      req.user = user;
      req.token = token;
      next();
    }
  });
};

export default verifyToken;
