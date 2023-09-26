import express from "express";
import {
  getDeltaDeltaGRange,
  getDeltaGRange,
  getPHRange,
  getTemperatureRange,
} from "../controllers/rangesController.js";

const router = express.Router();

router.get("/temperature", getTemperatureRange);
router.get("/ph", getPHRange);
router.get("/delta_g", getDeltaGRange);
router.get("/delta_delta_g", getDeltaDeltaGRange);

export default router;
