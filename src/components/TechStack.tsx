import React from "react";

import { HighlightText } from "./Highlight.component";
import { H2 } from "./Typography.component";

const FrontendStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "React-Native",
  "Dart",
  "Flutter",
  "SwiftUI",
  "Swift",
];
const InfrastructureStack = ["AWS - Solutions Architect Associate, AWS Certified Developer", "Docker", "Vercel"];

/**
 * 코드블럭 형태의 기술 스택 컴포넌트입니다.
 * 게시글의 기술 스택을 표시할 때 활용되며 키워드를 표시할때에도 활용됩니다.
 * @author 도형
 */

export const TechStack = () => {
  return (
    <div>
      <H2 className='font-black text-lg md:text-lg lg:text-lg mt-20 mb-10'>Tech Stack</H2>
      <div className='flex flex-wrap flex-col'>
        <H2 className='font-black text-md md:text-md lg:text-md mb-4'>Frontend</H2>
        <div className='flex flex-wrap gap-5'>
          {FrontendStack.map((item) => (
            <HighlightText key={item} className='text-sm md:text-sm lg:text-sm font-normal text-secondary rounded-md'>
              {item}
            </HighlightText>
          ))}
        </div>
        <H2 className='font-black text-md md:text-md lg:text-md mb-4 mt-5'>Infrastructure</H2>
        <div className='flex flex-wrap gap-5'>
          {InfrastructureStack.map((item) => (
            <HighlightText key={item} className='text-sm md:text-sm lg:text-sm font-normal text-secondary rounded-md'>
              {item}
            </HighlightText>
          ))}
        </div>
      </div>
    </div>
  );
};
