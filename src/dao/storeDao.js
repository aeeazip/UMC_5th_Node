import { pool } from "../../config/database";
import { BaseError } from "../../config/error";
import { status } from "../../config/responseStatus";
import {
  confirmStore,
  confirmReview,
  insertReviewSql,
  insertStoreMissionSql,
  insertMemberMisisonSql,
} from "./sql/storeSql";

// 리뷰 작성
export const addReview = async (data) => {
  try {
    const conn = await pool.getConnection();
    // 가게 존재 여부 검사
    const [confirm1] = await pool.query(confirmStore, data.storeId);
    if (!confirm1[0].isExistStore) {
      conn.release();
      return -1;
    }

    // 리뷰 작성 여부 검사
    const [confirm2] = await pool.query(confirmReview, [
      data.missionId,
      data.memberId,
      data.storeId,
    ]);

    if (confirm2[0].isExistReview) {
      conn.release();
      return -1;
    }

    // 리뷰 작성
    const result = await pool.query(insertReviewSql, [
      data.memberId,
      data.storeId,
      data.missionId,
      data.content,
      data.score,
    ]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    throw new BaseError(status.BAD_REQUEST);
  }
};

// 가게 미션 등록
export const addMission = async (data) => {
  try {
    const conn = await pool.getConnection();
    // 가게 존재 여부 검사
    const [confirm] = await pool.query(confirmStore, data.storeId);
    if (!confirm[0].isExistStore) {
      conn.release();
      return -1;
    }

    // 미션 등록
    const result = await pool.query(insertStoreMissionSql, [
      data.storeId,
      data.point,
      data.price,
    ]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    throw new BaseError(status.BAD_REQUEST);
  }
};

// 미션 등록
export const addMissionToMemberId = async (data) => {
  try {
    const conn = await pool.getConnection();
    const [confirm] = await pool.query(confirmMission, [
      1,
      "도전중",
      data.storeMissionId,
    ]);
    if (!confirm[0].isExistMission) {
      conn.release();
      return -1;
    }

    // 미션 등록
    const result = await pool.query(insertMemberMissionSql, [
      data.storeMissionId,
      1,
      "도전중",
    ]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    throw new BaseError(status.BAD_REQUEST);
  }
};
