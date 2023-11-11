import { status } from "../../config/responseStatus.js";
import { getMissionByStatus } from "../service/missionService.js";
import { response } from "../../config/response.js";

export const getMissions = (req, res, next) => {
  const missionStatus = req.params.status;
  return res.send(response(status.SUCCESS, getMissionByStatus(missionStatus)));
};
