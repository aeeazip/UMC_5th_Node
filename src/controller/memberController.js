import { status } from "../../config/responseStatus.js";
import { response } from "../../config/response.js";

export const getUser = (req, res, next) => {
  res.send(response(status.SUCCESS, "This is test"));
};
