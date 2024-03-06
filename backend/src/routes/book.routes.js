import { Router } from "express";
import {
  createBook,
  deleteOneBook,
  findAllBook,
  updateBook,
  findOneBook,
} from "../controllers/book.controller.js";

const router = Router();

router.get("/", findAllBook);
router.get("/:bookId", findOneBook);
router.post("/", upload.single('file'), createBook);
router.put("/:bookId", upload.single('file'), updateBook);
router.delete("/:bookId", deleteOneBook);

export default router;
