import express from "express";
import { addPin, deletePin, editPin, getPins } from "../controllers/pins.js";

const router = express.Router();

router.get("/", getPins);

router.post("/", addPin);

router.put("/:id", editPin);

router.delete("/:id", deletePin);

export default router;
