import { BaseError } from "../../config/error.js";
import { status } from "../../config/responseStatus.js";
import { getPreviewReview } from "../dao/storeDao.js";
import { previewReviewResponseDTO } from "../dto/storeResDto.js";

export const getReview = async (storeId, query) => {
  // size가 입력되지 않았다면 default는 3
  const { reviewId, size = 3 } = query;
  return previewReviewResponseDTO(
    await getPreviewReview(reviewId, size, storeId)
  );
};
