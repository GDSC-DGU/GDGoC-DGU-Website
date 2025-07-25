/**
 * "YYYY-MM-DD" 형식의 날짜 문자열을 입력받으면
 * "YYYY.MM.DD (요일)"처럼 요일이 포함되어 있는 형식의 문자열로 변환해주는 유틸 함수입니다.
 * @author 정선
 */

export const formatDateWithDay = (dateString: string): string => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "유효하지 않은 날짜";

  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");

  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = dayNames[date.getDay()];

  return `${year}.${month}.${day} (${dayOfWeek})`;
};
