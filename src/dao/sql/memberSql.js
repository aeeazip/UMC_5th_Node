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
