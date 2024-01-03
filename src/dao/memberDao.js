import { pool } from "../../config/database.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/responseStatus.js";
import {
  connectFoodCategory,
  confirmEmail,
  getMemberID,
  insertMemberSql,
  getPreferToMemberID,
  getReviewByMemberIdAndReviewIdAtFirst,
  getReviewByMemberIdAndReviewId,
  getMissionByMemberIdAndMissionId,
  getMissionByMemberIdAndMissionIdAtFirst,
} from "./sql/memberSql.js";

// Member 데이터 삽입
export const addMember = async (data) => {
  try {
    const conn = await pool.getConnection();
    const [confirm] = await pool.query(confirmEmail, data.email);

    if (confirm[0].isExistEmail) {
      conn.release();
      return -1;
    }

    const result = await pool.query(insertMemberSql, [
      data.email,
      data.name,
      data.gender,
      data.birth,
      data.addr,
      data.specAddr,
      data.phone,
    ]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    throw new BaseError(status.BAD_REQUEST);
  }
};

// 사용자 정보 얻기
export const getMember = async (memberId) => {
  try {
    const conn = await pool.getConnection();
    const [member] = await pool.query(getMemberID, memberId);

    console.log(member);

    if (member.length == 0) {
      return -1;
    }

    conn.release();
    return member;
  } catch (err) {
    throw new BaseError(status.BAD_REQUEST);
  }
};

// 음식 선호 카테고리 매핑
export const setPrefer = async (memberId, foodCategoryId) => {
  try {
    const conn = await pool.getConnection();

    await pool.query(connectFoodCategory, [foodCategoryId, memberId]);

    conn.release();

    return;
  } catch (err) {
    throw new BaseError(status.BAD_REQUEST);
  }
};

// 사용자 선호 카테고리 반환
export const getMemberPreferToMemberID = async (memberID) => {
  try {
    const conn = await pool.getConnection();
    const prefer = await pool.query(getPreferToMemberID, memberID);

    conn.release();

    return prefer;
  } catch (err) {
    throw new BaseError(status.BAD_REQUEST);
  }
};

// 내가 작성한 리뷰 목록
export const getPreviewReviewByMemberId = async (cursorId, size, memberId) => {
  try {
    const conn = await pool.getConnection();

    if (
      cursorId == "undefined" ||
      typeof cursorId == "undefined" ||
      cursorId == null
    ) {
      const [reviews] = await pool.query(
        getReviewByMemberIdAndReviewIdAtFirst,
        [parseInt(memberId), parseInt(size)]
      );
      conn.release();
      return reviews;
    } else {
      const [reviews] = await pool.query(getReviewByMemberIdAndReviewId, [
        parseInt(memberId),
        parseInt(cursorId),
        parseInt(size),
      ]);
      conn.release();
      return reviews;
    }
  } catch (err) {
    throw new BaseError(status.BAD_REQUEST);
  }
};

// 내가 진행중인 미션 목록
export const getPreviewMissionByMemberId = async (cursorId, size, memberId) => {
  try {
    const conn = await pool.getConnection();

    if (
      cursorId == "undefined" ||
      typeof cursorId == "undefined" ||
      cursorId == null
    ) {
      const [missions] = await pool.query(
        getMissionByMemberIdAndMissionIdAtFirst,
        [parseInt(memberId), parseInt(size)]
      );
      conn.release();
      return missions;
    } else {
      const [missions] = await pool.query(getMissionByMemberIdAndMissionId, [
        parseInt(memberId),
        parseInt(cursorId),
        parseInt(size),
      ]);
      conn.release();
      return missions;
    }
  } catch (err) {
    throw new BaseError(status.BAD_REQUEST);
  }
};
