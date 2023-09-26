import express from "express";
import {
  getExperimentOptions,
  getJournalOptions,
  getPBDIdOptions,
  getProtein1Options,
  getProtein2Options,
  getPubMedIdOptions,
} from "../controllers/optionsController.js";

const router = express.Router();

router.get("/protein1", getProtein1Options);
router.get("/protein2", getProtein2Options);
router.get("/pbd_id", getPBDIdOptions);
router.get("/experiment", getExperimentOptions);
router.get("/pubmed_id", getPubMedIdOptions);
router.get("/journal", getJournalOptions);

export default router;
