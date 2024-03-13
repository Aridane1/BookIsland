import { Router } from "express";
import {
  createBook,
  deleteOneBook,
  findAllBook,
  updateBook,
  findOneBook,
  updateBookIfNotImage,
} from "../controllers/book.controller.js";
import { multerUltis } from "../middlewares/multerUtlis.middleware.js";

const router = Router();

router.get("/", findAllBook);
router.get("/:bookId", findOneBook);
router.post("/", multerUltis.single("file"), createBook);
router.put("/no-image/:bookId", updateBookIfNotImage);
router.put("/:bookId", multerUltis.single("file"), updateBook);
router.delete("/:bookId", deleteOneBook);

export default router;
