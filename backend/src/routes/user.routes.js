import { Router } from "express";
import {
  createUser,
  deleteOneUser,
  findAllUser,
  updateUser,
  findOneUser,
} from "../controllers/user.controller.js";

import {
  isAuthenticated,
  signin,
} from "../middlewares/authentication.middleware.js";

const router = Router();

router.get("/", isAuthenticated, findAllUser);
router.get("/:userId", isAuthenticated, findOneUser);
router.post("/", createUser);
router.put("/noImage/:userId", isAuthenticated, updateUser);
router.delete("/:userId", isAuthenticated, deleteOneUser);
router.post("/signin", signin);

export default router;
