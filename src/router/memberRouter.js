import express from "express";
import { getUser } from "../controller/memberController.js";

export const memberRouter = express.Router();

memberRouter.get("/test", getUser);
