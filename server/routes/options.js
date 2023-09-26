import express from "express";
import {
  getExperimentOptions,
  getJournalOptions,
  getPDBIdOptions,
  getProtein1Options,
  getProtein2Options,
  getPubMedIdOptions,
} from "../controllers/optionsController.js";

const router = express.Router();

router.get("/protein1", getProtein1Options);
router.get("/protein2", getProtein2Options);
router.get("/pdb_id", getPDBIdOptions);
router.get("/experiment", getExperimentOptions);
router.get("/pubmed_id", getPubMedIdOptions);
router.get("/journal", getJournalOptions);

export default router;
