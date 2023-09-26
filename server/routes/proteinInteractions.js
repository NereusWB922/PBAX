import express from "express";
import { searchProteinInteractions } from "../controllers/proteinInteractionsController.js";

const router = express.Router();

router.get("/search", searchProteinInteractions);

export default router;
