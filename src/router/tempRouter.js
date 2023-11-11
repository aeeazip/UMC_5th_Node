import express from "express";
import { tempTest, tempException } from "../controller/tempController.js";

export const tempRouter = express.Router();

tempRouter.get("/test", tempTest);
tempRouter.get("/exception/:flag", tempException);
