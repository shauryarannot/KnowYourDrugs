import express from "express";
import { fetchDrugInfo, fetchEvents } from "../controllers/drugController.js";

const router = express.Router();

router.get("/label/:name", fetchDrugInfo);
router.get("/events", fetchEvents);

export default router;
