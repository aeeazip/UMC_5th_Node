import { status } from "../../config/responseStatus.js";
import { response } from "../../config/response.js";
import {
  writeReview,
  insertMission,
  insertMissionToMemberId,
  getReview,
} from "../service/storeService.js";

// 1. 리뷰 작성 API
export const reviewWrite = async (req, res, next) => {
  console.log("리뷰 작성을 요청하였습니다!");
  res.send(
    response(status.SUCCESS, await writeReview(req.params.storeId, req.body))
  );
};

// 2. 가게에 미션 추가 API
export const addMission = async (req, res, next) => {
  console.log("미션 작성을 요청하였습니다!");
  res.send(
    resposne(status.SUCCESS, await insertMission(req.params.storeId, req.body))
  );
};

// 3. 가게의 미션을 도전하는 API
export const challengeMission = async (req, res, next) => {
  console.log("가게 미션 도전을 요청하였습니다!");
  res.send(
    response(
      status.SUCCESS,
      await insertMissionToMemberId(req.params.storeMissionId)
    )
  );
};

// 4. 리뷰 조회 API
export const reviewPreview = async (req, res, next) => {
  return res.send(
    response(status.SUCCESS, await getReview(req.params.storeId, req.query))
  );
};
