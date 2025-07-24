import React from "react";

import { cn } from "@/src/function/utils";
import { TwoCircle } from "@/src/types";

/**
 * Page 디자인에 사용되는 두 개의 연결된 원모양 컴포넌트입니다.
 * @author 동현
 */

export type TwoCircleProps = {
  TwoCircle: TwoCircle;
};

export const TwoCircleComponent = ({ TwoCircle }: TwoCircleProps) => {
  const { circleColor, text, textColor, textSize, size } = TwoCircle;

  return (
    <div className='relative flex items-center justify-center' style={{ width: size, height: size }}>
      {/* 왼쪽 원 */}
      <div
        className={cn("absolute rounded-full border-2", circleColor)}
        style={{
          width: size * 0.625,
          height: size * 0.625,
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      {/* 오른쪽 원 */}
      <div
        className={cn("absolute rounded-full border-2", circleColor)}
        style={{
          width: size * 0.625,
          height: size * 0.625,
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      {/* 중앙 텍스트 */}
      <div
        className={cn("absolute font-bold text-center flex items-center justify-center bg-white", textColor)}
        style={{
          fontSize: textSize,
          lineHeight: 1,
          height: size * 0.487,
        }}
      >
        {text}
      </div>
    </div>
  );
};
