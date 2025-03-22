import React from "react";

import clsx from "clsx";

import { HighlightText } from "./Highlight.component";

/**
 * 세미나, 스터디, 프로젝트 페이지에서 사용될 Part Tag 컴포넌트입니다.
 * part를 입력받아 해당 파트에 맞는 색상으로 표시합니다.
 * @author 정선
 */

interface PartTagProps {
  part: "AI/ML" | "Server/Cloud" | "Web/App" | "Devral" | "Lead";
}

export const PartTag = ({ part }: PartTagProps) => {
  return (
    <div className='flex flex-wrap'>
      <HighlightText
        className={clsx("text-xs font-semibold rounded-md px-3 py-1 bg-white border-2", {
          "text-red border-red": part === "AI/ML",
          "text-blue border-blue": part === "Server/Cloud",
          "text-green border-green": part === "Web/App",
          "text-yellow border-yellow": part === "Devral",
          "text-black border-black": part === "Lead",
        })}
      >
        {part}
      </HighlightText>
    </div>
  );
};
