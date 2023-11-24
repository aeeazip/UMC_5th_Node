export const missionResponseDTO = (result) => {
  return { missionList: result };
};

export const previewMissionResponseDTO = (data) => {
  const missions = [];

  for (let i = 0; i < data.length; i++) {
    missions.push({
      user_name: data[i].user_name,
      member_id: data[i].member_id,
      mission_id: data[i].mission_id,
      create_date: formatDate(data[i].created_at),
    });
  }
  return { missionData: missions, cursorId: data[data.length - 1].mission_id };
};

// 요청하는 날짜의 값을 YYYY.MM.DD 형태로 변경
const formatDate = (date) => {
  return new Intl.DateTimeFormat("kr")
    .format(new Date(date))
    .replaceAll(" ", "")
    .slice(0, -1);
};
