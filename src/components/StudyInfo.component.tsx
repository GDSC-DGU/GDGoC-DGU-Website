import React from "react";

import clsx from "clsx";

/**
 * study page에서 각 파트별 스터디에 대한 설명을 나타내는 컴포넌트입니다.
 * part와 content를 props로 입력받아 콜아웃의 형태로 강조하여 보여줍니다.
 * @author 정선
 */

interface StudyInfoProps {
  part: "AM" | "SC" | "WA";
  content: string;
}

export const StudyInfo = ({ part, content }: StudyInfoProps) => {
  const iconPath = `/images/svg/${part}.svg`;

  return (
    <div
      className={clsx("flex items-center gap-3 px-6 py-4 rounded-xl", {
        "bg-red-50": part === "AM",
        "bg-blue-50": part === "SC",
        "bg-green-50": part === "WA",
      })}
    >
      <img src={iconPath} alt={part} width={30} height={30} />
      <p className='text-sm tablet:text-xl text-black'>{content}</p>
    </div>
  );
};
