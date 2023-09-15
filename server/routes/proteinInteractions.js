import express from "express";
import { searchProteinInteractions } from "../controllers/proteinInteractions.js";

const router = express.Router();

router.get("/search", searchProteinInteractions);

export default router;
