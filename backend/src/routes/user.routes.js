import { Router } from "express";
import {
  createUser,
  deleteOneUser,
  findAllUser,
  updateUser,
  findOneUser,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/", findAllUser);
router.get("/:userId", findOneUser);
router.post("/", createUser);
router.put("/noImage/:userId", updateUser);
router.delete("/:userId", deleteOneUser);

export default router;
