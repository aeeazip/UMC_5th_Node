import express from "express";
import asyncHandler from "express-async-handler";
import {
  getUser,
  userSignup,
  getMyReviews,
} from "../controller/memberController.js";

export const memberRouter = express.Router({ mergeParams: true });

// 0. 테스트 API
memberRouter.get("/test", getUser);

// 1. 회원가입 API
// asyncHandler로 감싸주면 try-catch 없이도 오류 발생 X
memberRouter.post("/signup", asyncHandler(userSignup));

// 2. 내가 작성한 리뷰 목록 API
memberRouter.get("/:memberId/review", asyncHandler(getMyReviews));
