import { Router } from "express";
import {
  createUser,
  createUserWithImage,
  deleteOneUser,
  findAllUser,
  findOneUser,
  updateUser,
  updateUserWithImage,
} from "../controllers/user.controller.js";

import {
  isAuthenticated,
  signin,
} from "../middlewares/authentication.middleware.js";
import { multerUltis } from "../middlewares/multerUtlis.middleware.js";

const router = Router();

router.get("/", isAuthenticated, findAllUser);
router.get("/:userId", findOneUser);
router.post("/no-image-to-add", createUser);
router.post("/", multerUltis.single("file"), createUserWithImage);
router.put("/noImage/:userId", multerUltis.single("file"), updateUser);
router.put("/:userId", updateUserWithImage);
router.delete("/:userId", isAuthenticated, deleteOneUser);
router.post("/signin", signin);

export default router;
