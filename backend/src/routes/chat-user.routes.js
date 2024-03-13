import { Router } from "express";
import {
  createChatUser,
  deleteChatUser,
  getChatUserByInterestedAndChangingUser,
} from "../controllers/chat-user.controller.js";

const router = Router();

router.get("/:userId", getChatUserByInterestedAndChangingUser);
router.post("/", createChatUser);
router.delete("/:chatId", deleteChatUser);

export default router;
