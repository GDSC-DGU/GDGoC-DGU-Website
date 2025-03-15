/**
 *  여러 줄의 텍스트를 받아 첫 번째 줄은 굵게, 나머지 줄은 얇게 스타일링하여
 * React 요소로 변환하는 포맷팅 함수입니다.
 * @author 도형
 */

export const formatLabel = (label: string) => {
  return label.split("\n").map((text, index) => (
    <span key={index} className={index === 0 ? "font-bold" : "font-light"}>
      {index !== 0 && <br />}
      {text}
    </span>
  ));
};
