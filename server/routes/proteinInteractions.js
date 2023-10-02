import express from "express";
import {
  findProteinInteractionById,
  searchProteinInteractions,
} from "../controllers/proteinInteractionsController.js";

const router = express.Router();

router.get("/search", searchProteinInteractions);
router.get("/:id", findProteinInteractionById);

export default router;
