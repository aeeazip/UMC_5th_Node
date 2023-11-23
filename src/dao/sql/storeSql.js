export const confirmStore =
  "SELECT EXISTS (SELECT 1 FROM Store WHERE store_id = ?) as isExistStore;";

export const confirmReview =
  "SELECT EXISTS (SELECT 1 FROM Review WHERE mission_id = ? and member_id = ? and store_id = ?) as isExistReview;";

export const insertReviewSql =
  "INSERT INTO Review(member_id, store_id, mission_id, content, score) VALUES (?, ?, ?, ?, ?);";

export const insertStoreMissionSql =
  "INSERT INTO Store_Misison(store_id, point, price) VALUES (?, ?, ?);";

export const confirmMission =
  "SLECT EXISTS (SELECT 1 FROM Member_Mission WHERE member_id = ? and status = ? and store_mission_id = ?) as isExistMission;";

export const insertMemberMissionSql =
  "INSERT INTO Member_Misison(store_mission_id, member_id, status) VALUES (?, ?, ?);";

export const getReviewByReviewId =
  "SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at " +
  "FROM review r JOIN user u on r.user_id = u.user_id " +
  "WHERE r.restaurant_id = ? AND r.review_id < ? " +
  "ORDER BY r.review_id DESC LIMIT ? ;";

export const getReviewByReviewIdAtFirst =
  "SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at " +
  "FROM review r JOIN user u on r.user_id = u.user_id " +
  "WHERE r.restaurant_id = ? " +
  "ORDER BY r.review_id DESC LIMIT ? ;";
