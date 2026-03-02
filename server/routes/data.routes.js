import express from "express";
import { getCards } from "../controllers/data.controllers.js";

const router = express.Router();

router.get("/", getCards);

export default router;
