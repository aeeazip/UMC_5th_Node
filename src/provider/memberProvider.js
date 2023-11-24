import { BaseError } from "../../config/error.js";
import { status } from "../../config/responseStatus.js";
import {
  getPreviewReviewByMemberId,
  getPreviewMissionByMemberId,
} from "../dao/memberDao.js";
import { previewReviewResponseDTO } from "../dto/storeResDto.js";
import { previewMissionResponseDTO } from "../dto/missionResDto.js";

export const getReviewsByMemberId = async (memberId, query) => {
  // size가 입력되지 않았다면 default는 3
  const { reviewId, size = 3 } = query;
  return previewReviewResponseDTO(
    await getPreviewReviewByMemberId(reviewId, size, memberId)
  );
};

export const getMissionActiveByMemberId = async (memberId, query) => {
  // size가 입력되지 않았다면 default는 3
  const { missionId, size = 3 } = query;
  return previewMissionResponseDTO(
    await getPreviewMissionByMemberId(missionId, size, memberId)
  );
};
