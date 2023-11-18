export const confirmStore =
  "SELECT EXISTS (SELECT 1 FROM Store WHERE store_id = ?) as isExistStore;";

export const confirmReview =
  "SELECT EXISTS (SELECT 1 FROM Review WHERE mission_id = ? and member_id = ? and store_id = ?) as isExistReview;";

export const insertReviewSql =
  "INSERT INTO Review(member_id, store_id, mission_id, content, score) VALUES (?, ?, ?, ?, ?);";

export const insertMissionSql =
  "INSERT INTO Store_Misison(store_id, point, price) VALUES (?, ?, ?);";

export const confirmMission =
  "SLECT EXISTS (SELECT 1 FROM Member_Mission WHERE member_id = ? and status = ? and store_mission_id = ?) as isExistMission;";
