export const previewReviewResponseDTO = (data) => {
  const reviews = [];

  for (let i = 0; i < data.length; i++) {
    reviews.push({
      user_name: data[i].user_name,
      rate: data[i].rate,
      review_body: data[i].review_content,
      create_date: formatDate(data[i].created_at),
    });
  }
  return { reviewData: reviews, cursorId: data[data.length - 1].review_id };
};

// 요청하는 날짜의 값을 YYYY.MM.DD 형태로 변경
const formatDate = (date) => {
  return new Intl.DateTimeFormat("kr")
    .format(new Date(date))
    .replaceAll(" ", "")
    .slice(0, -1);
};
