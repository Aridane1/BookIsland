import { Router } from "express";
import {
  createTransfer,
  deleteOneTransfer,
  findAllTransfer,
  updateTransfer,
  findOneTransfer,
} from "../controllers/transfer.controller.js";

const router = Router();

router.get("/", findAllTransfer);
router.get("/:transferId", findOneTransfer);
router.post("/", createTransfer);
router.put("/:transferId", updateTransfer);
router.delete("/:transferId", deleteOneTransfer);

export default router;
