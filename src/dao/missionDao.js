// status로 미션 조회
async function selectMissionStatus(connection, status) {
  const selectMissionListQuery = `
            SELECT *
            FROM Mission
            WHERE status = ?;
        `;

  const [missionRows] = await connection.query(selectMissionListQuery, status);
  return missionRows;
}

export { selectMissionStatus };
