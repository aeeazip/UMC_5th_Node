import { status } from "../../config/responseStatus.js";
import { response } from "../../config/response.js";
import { joinUser } from "../service/memberService.js";
import {
  getReviewsByMemberId,
  getMissionActiveByMemberId,
} from "../provider/memberProvider.js";
// 0. 테스트 API
export const getUser = (req, res, next) => {
  res.send(response(status.SUCCESS, "This is test"));
};

// 1. 회원가입 API
export const userSignup = async (req, res, next) => {
  console.log("회원가입을 요청하였습니다!");
  res.send(response(status.SUCCESS, await joinUser(req.body)));
};

// 2. 내가 작성한 리뷰 목록 API
export const getMyReviews = async (req, res, next) => {
  console.log("내가 작성한 리뷰 목록을 요청하였습니다!");
  res.send(
    response(
      status.SUCCESS,
      await getReviewsByMemberId(req.params.memberId, req.query)
    )
  );
};

// 3. 내가 진행중인 미션 목록 API
export const getMissionActive = async (req, res, next) => {
  console.log("내가 진행중인 미션 목록을 요청하였습니다!");
  if (req.query.status == "active") {
    // request의 status 검사 (진행중인지 검사)
    res.send(
      response(
        status.SUCCESS,
        await getMissionActiveByMemberId(req.params.memberId, req.query)
      )
    );
  }
};
