import React from "react";

import clsx from "clsx";

import { HighlightText } from "./Highlight.component";

/**
 * 코드블럭 형태의 기술 스택 컴포넌트입니다.
 * 게시글의 기술 스택을 표시할 때 활용되며 키워드를 표시할때에도 활용됩니다.
 * @author 도형
 *
 * 테크블로그의 기술 스택 태그를 나타내도록 스타일을 수정하였으며, props로 텍스트 및 컬러값을 받아와 태그의 형태로 보여줍니다.
 * @author 정선
 */

interface TechStackProps {
  text: string;
  color: string;
}

export const TechStack = ({ text, color }: TechStackProps) => {
  return (
    <div className='flex flex-wrap text-Body4'>
      <HighlightText
        className={clsx({
          "text-red bg-red-50 ": color === "red",
          "text-blue bg-blue-50": color === "blue",
          "text-green bg-green-50": color === "green",
          "text-yellow bg-yellow-50": color === "yellow",
        })}
      >
        #{text}
      </HighlightText>
    </div>
  );
};
