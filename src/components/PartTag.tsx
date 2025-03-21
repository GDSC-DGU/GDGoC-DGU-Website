import React from "react";

import clsx from "clsx";

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
        className={clsx("text-xs font-semibold rounded-md px-3 py-1 bg-white border-2", {
          "text-red border-red": color === "red",
          "text-blue border-blue": color === "blue",
          "text-green border-green": color === "green",
          "text-yellow border-yellow": color === "yellow",
          "text-black border-black": color === "black",
        })}
      >
        {text}
      </HighlightText>
    </div>
  );
};
