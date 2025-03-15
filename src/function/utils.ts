import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 *  현재 기기가 모바일인지 확인하는 함수입니다.
 * 창 너비가 1024px 이하면 모바일로 판단합니다.
 * SSR 환경에서는 항상 false를 반환합니다.
 * @author 도형
 */
export const isMobile = () => {
  if (typeof window === "undefined") return false;
  const width = window.innerWidth;
  return width <= 1024;
};

/**
 * 여러 Tailwind CSS 클래스를 결합하고 충돌을 자동으로 해결하는 유틸리티 함수입니다.
 * clsx로 클래스들을 결합한 후 tailwind-merge로 충돌을 해결합니다.
 * 조건부 클래스 적용과 클래스 우선순위 관리에 매우 유용합니다.
 * @author 도형
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
