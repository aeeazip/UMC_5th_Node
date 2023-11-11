import express from "express";
import { getMissions } from "../controller/missionController.js";

export const missionRouter = express.Router();

missionRouter.get("/:status", getMissions);
