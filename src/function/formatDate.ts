/**
 * 날짜 문자열을 포맷팅하는 함수입니다.
 *  예를 들어 "2025-03-29 00:00:00" 형식의 날짜 문자열을 "2025년 3월 29일" 형식으로 변환하며, 2024.03.29로도 변환합니다.
 */

export function formatDate(dateString: string) {
  try {
    // ISO 형식인 경우
    if (dateString.includes("T")) {
      return new Date(`${dateString}`).toLocaleDateString("ko-KR", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      });
    }

    // "YYYY-MM-DD HH:MM:SS" 형식인 경우
    const [datePart, timePart] = dateString.split(" ");
    const [year, month, day] = datePart.split("-").map(Number);

    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch (error) {
    return dateString; // 변환 실패 시 원본 반환
  }
}
