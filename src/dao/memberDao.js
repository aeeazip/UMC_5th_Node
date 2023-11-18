import { pool } from "../../config/database";
import { BaseError } from "../../config/error";
import { status } from "../../config/responseStatus";
import {
  connectFoodCategory,
  confirmEmail,
  getMemberID,
  insertMemberSql,
  getPreferToMemberID,
} from "./sql/memberSql";

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
