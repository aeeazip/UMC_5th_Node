import { status } from "../../config/responseStatus.js";
import { response } from "../../config/response.js";
import { joinUser } from "../service/memberService.js";

// 0. 테스트 API
export const getUser = (req, res, next) => {
  res.send(response(status.SUCCESS, "This is test"));
};

// 1. 회원가입 API
export const userSignup = async (req, res, next) => {
  console.log("회원가입을 요청하였습니다!");
  res.send(response(status.SUCCESS, await joinUser(req.body)));
};
