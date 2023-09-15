import express from "express";
import { searchProteinInteractions } from "../controllers/proteinInteractions";

const router = express.Router();

router.get("/search", searchProteinInteractions);

export default router;