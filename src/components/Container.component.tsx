import React from "react";

/**
 * 모든 화면에 적용되는 컨테이너 컴포넌트입니다.
 * @author 도형
 */

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <main className={`max-w-4xl w-full mx-auto pt-10 pb-20 px-4 md:px-10 max-md:pt-5`}>{children}</main>;
};
