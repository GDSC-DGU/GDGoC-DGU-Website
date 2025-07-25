import React from "react";

import { twMerge } from "tailwind-merge";

/**
 * 텍스트 강조 효과를 적용하는 컴포넌트입니다.
 * 텍스트 작성중 특정 키워드를 강조하고 싶을때 활용하며,
 * 노션에서의 코드 블럭과 같은 효과를 줄 수 있으며 컬러 팔레트를 변경할 수 있습니다.
 * @author 도형
 * 디자인에 맞게 padding 값 수정하였습니다.
 * @author 정선
 */

export const HighlightText = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={twMerge("bg-gray-200 text-Body4 rounded px-2 py-1 whitespace-nowrap", className)}>{children}</p>;
};
