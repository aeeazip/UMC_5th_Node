import { status } from "../../config/responseStatus.js";
import { getTempData } from "../services/tempService";
import { response } from "../../config/response.js";

export const tempTest = (req, res, next) => {
  res.send(response(status.SUCCESS, getTempData()));
};
