export const insertMemberSql =
  "INSERT INTO member (email, member_name, gender, birth, member_address, member_spec_address, member_phone) VALUES (?, ?, ?, ?, ?, ?, ?);";

export const getMemberID = "SELECT * FROM member WHERE member_id = ?;";

export const connectFoodCategory =
  "INSERT INTO user_favor_category (f_category_id, member_id) VALUES (?, ?);";

export const confirmEmail =
  "SELECT EXISTS(SELECT 1 FROM member WHERE email = ?) as isExistEmail;";

export const getPreferToMemberID =
  "SELECT ufc.uf_category_id, ufc.f_category_id, ufc.member_id, fcl.f_category_name " +
  "FROM member_favor_category ufc JOIN food_category_list fcl on ufc.f_category_id = fcl.f_category_id " +
  "WHERE ufc.member_id = ? ORDER BY ufc.f_category_id ASC;";

export const getReviewByMemberIdAndReviewId =
  "SELECT m.user_name, m.member_id, r.review_id, r.rate, r.review_content, r.created_at " +
  "FROM Review r JOIN Member m on r.member_id = m.member_id " +
  "WHERE m.meber_id = ? AND r.review_id < ? " +
  "ORDER BY r.review_id DESC LIMIT ? ;";

export const getReviewByMemberIdAndReviewIdAtFirst =
  "SELECT m.user_name, m.member_id, r.review_id, r.rate, r.review_content, r.created_at " +
  "FROM Review r JOIN Member m on r.member_id = m.member_id " +
  "WHERE m.member_id = ?" +
  "ORDER BY r.review_id DESC LIMIT ? ;";

export const getMissionByMemberIdAndMissionId =
  "SELECT me.user_name, me.member_id, mi.mission_id, mi.created_at " +
  "FROM Mission mi JOIN Member me on mi.member_id = me.member_id " +
  "WHERE me.meber_id = ? AND mi.mission_id < ? " +
  "ORDER BY mi.mission_id DESC LIMIT ? ;";

export const getMissionByMemberIdAndMissionIdAtFirst =
  "SELECT me.user_name, me.member_id, mi.mission_id, mi.created_at " +
  "FROM Mission mi JOIN Member me on mi.member_id = me.member_id " +
  "WHERE me.member_id = ?" +
  "ORDER BY mi.mission_id DESC LIMIT ? ;";
