import express from "express";
import asyncHandler from "express-async-handler";
import {
  reviewWrite,
  addMission,
  challengeMission,
  reviewPreview,
} from "../controller/storeController.js";

// mergeParams: true -> 는 controller에서 하위 routing인 storeId를 사용하기 위해 사용
export const storeRouter = express.Router({ mergeParams: true });

// 1. 리뷰 작성 API
// asyncHandler로 감싸주면 try-catch 없이도 오류 발생 X
storeRouter.post("/:storeId/review", asyncHandler(reviewWrite));

// 2. 가게에 미션 추가 API
storeRouter.post("/:storeId", asyncHandler(addMission));

// 3. 가게의 미션을 도전중인 미션에 추가 API
storeRouter.post("/:storeMissionId/challenge", asyncHandler(challengeMission));

// 4. 리뷰 조회 API
storeRouter.get("/:storeId/reviews", asyncHandler(reviewPreview));
