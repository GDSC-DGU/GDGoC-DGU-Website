import localFont from "next/font/local";
import React from "react";

import { twMerge } from "tailwind-merge";

/**
 * 텍스트 스타일링을 위한 타이포그래피 컴포넌트 모음입니다.
 * H1~H4 제목 컴포넌트와 다양한 크기의 본문 텍스트 컴포넌트를 제공하며,
 * 모든 컴포넌트는 Pretendard 폰트를 기본으로 사용합니다.
 * 반응형 디자인을 지원하며, as 프로퍼티를 통해 HTML 태그를 일괄적으로 변경할 수 있습니다.
 * @author 도형
 */

const AppleSDGothic = localFont({
  src: [{ path: "../../public/fonts/PretendardVariable.woff2" }],
  display: "swap",
});

type TypographyProps = {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
};

export const H1 = ({ className, children, as: Tag = "h1" }: TypographyProps) => (
  <Tag className={twMerge(AppleSDGothic.className, "text-3xl md:text-4xl font-bold text-black", className)}>
    {children}
  </Tag>
);

export const H2 = ({ className, children, as: Tag = "h2" }: TypographyProps) => (
  <Tag className={twMerge(AppleSDGothic.className, "text-2xl md:text-3xl font-semibold text-black", className)}>
    {children}
  </Tag>
);

export const H3 = ({ className, children, as: Tag = "h3" }: TypographyProps) => (
  <Tag className={twMerge(AppleSDGothic.className, "text-xl md:text-2xl font-medium text-black", className)}>
    {children}
  </Tag>
);

export const H4 = ({ className, children, as: Tag = "h4" }: TypographyProps) => (
  <Tag className={twMerge(AppleSDGothic.className, "text-lg md:text-xl font-normal text-black", className)}>
    {children}
  </Tag>
);

//  본문 스타일
export const BodyText = ({ className, children, as: Tag = "p" }: TypographyProps) => (
  <Tag className={twMerge(AppleSDGothic.className, "text-base text-gray-700", className)}>{children}</Tag>
);

export const DetailText = ({ className, children, as: Tag = "span" }: TypographyProps) => (
  <Tag className={twMerge(AppleSDGothic.className, "text-sm text-gray-500", className)}>{children}</Tag>
);

export const SmallText = ({ className, children, as: Tag = "span" }: TypographyProps) => (
  <Tag className={twMerge(AppleSDGothic.className, "text-xs text-gray-500", className)}>{children}</Tag>
);
