import React from "react";

import { twMerge } from "tailwind-merge";

/**
 * 반응형 텍스트 크기와 secondary 색상을 가진 기본 단락 컴포넌트입니다.
 * @author 도형
 */
export const Paragraph = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={twMerge("text-sm lg:text-base font-normal text-secondary", className)}>{children}</p>;
};
