import BaseError from "../../config/error";
import status from "../../config/responseStatus";
import { addReview, addMission, addMissionToMemberId } from "../dao/storeDao";

export const reviewWrite = async (storeId, body) => {
  const reviewWriteData = await addReview({
    memberId: 1,
    storeId: storeId,
    missionId: body.missionId,
    content: body.content,
    score: body.score,
  });

  if (reviewWriteData == -1) {
    throw new BaseError(status.REVIEW_ALREADY_EXIST);
  } else {
    return "리뷰 작성 성공";
  }
};

export const insertMisison = async (storeId, body) => {
  const insertMissionData = await addMission({
    storeId: storeId,
    point: body.point,
    price: body.price,
  });

  if (insertMissionData == -1) {
    throw new BaseError(status.STORE_NOT_EXIST);
  } else {
    return "가게 미션 등록 성공";
  }
};

export const insertMissionToMemberId = async (storeMissionId) => {
  const inserMissionData = await addMissionToMemberId({
    storeMissionId: storeMissionId,
    memberId: 1,
  });

  if (insertMissionData == -1) {
    throw new BaseError(status.STORE_NOT_EXIST);
  } else {
    return "미션 도전 성공";
  }
};
