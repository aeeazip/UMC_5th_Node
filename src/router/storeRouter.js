import express from "express";
import asyncHandler from "express-async-handler";
import {
  reviewWrite,
  addMission,
  challengeMission,
} from "../controller/storeController.js";

export const storeRouter = express.Router();

// 1. 리뷰 작성 API
// asyncHandler로 감싸주면 try-catch 없이도 오류 발생 X
storeRouter.post("/:storeId/review", asyncHandler(reviewWrite));

// 2. 가게에 미션 추가 API
storeRouter.post("/:storeId", asyncHandler(addMission));

// 3. 가게의 미션을 도전중인 미션에 추가 API
storeRouter.post("/:storeMissionId/challenge", asyncHandler(challengeMission));
