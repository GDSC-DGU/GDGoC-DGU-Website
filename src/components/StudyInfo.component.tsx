import Image from "next/image";
import React from "react";

import clsx from "clsx";

/**
 * study page에서 각 파트별 스터디에 대한 설명을 나타내는 컴포넌트입니다.
 * part와 content를 props로 입력받아 콜아웃의 형태로 강조하여 보여줍니다.
 * @author 정선
 */

interface StudyInfoProps {
  part: "AI/ML" | "Server/Cloud" | "Web/App";
  content: string;
}

export const StudyInfo = ({ part, content }: StudyInfoProps) => {
  const partToFileName: Record<string, string> = {
    "AI/ML": "AM",
    "Server/Cloud": "SC",
    "Web/App": "WA",
  };

  const iconPath = `/images/svg/${partToFileName[part]}.svg`;

  return (
    <div
      className={clsx("flex items-center gap-3 px-6 py-4 rounded-xl", {
        "bg-red-50": part === "AI/ML",
        "bg-blue-50": part === "Server/Cloud",
        "bg-green-50": part === "Web/App",
      })}
    >
      <Image src={iconPath} alt={part} width={30} height={30} />
      <p className='text-sm tablet:text-xl text-black'>{content}</p>
    </div>
  );
};
