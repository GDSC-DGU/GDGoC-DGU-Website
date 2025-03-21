import React from "react";

import { HighlightText } from "./Highlight.component";

/**
 * 세미나, 스터디, 프로젝트 페이지에서 사용될 Part Tag 컴포넌트입니다.
 * color, text를 입력받아 표시합니다.
 * @author 정선
 */

interface PartTagProps {
  text: string;
  color: string;
}

export const PartTag = ({ text, color }: PartTagProps) => {
  return (
    <div className='flex flex-wrap'>
      <HighlightText
        className={` text-xs md:text-xs lg:text-xs font-bold text-${color} rounded-md px-3 py-1 bg-white border-${color} border-2`}
      >
        {text}
      </HighlightText>
    </div>
  );
};
