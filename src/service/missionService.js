import { logger } from "../../config/winston.js";
import { pool } from "../../config/database.js";

import { missionResponseDTO } from "../dto/missionResDto.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/responseStatus.js";
import { selectMissionStatus } from "../dao/missionDao.js";

export const getMissionByStatus = async function (missionStatus) {
  try {
    const connection = await pool.getConnection(
      async (connection) => connection
    );
    const missionResult = await selectMissionStatus(connection, missionStatus);
    connection.release();
    return missionResponseDTO(missionResult);
  } catch (err) {
    logger.error(`App - getMissionByStatus Service error\n`);
    throw new BaseError(status.BAD_REQUEST);
  }
};
