import { Router } from "express";
import {
  createFollowUser,
  getAllUserYouFollow,
} from "../controllers/follow-user.controller.js";

const router = Router();

router.get("/", getAllUserYouFollow);
router.post("/", createFollowUser);

export default router;
