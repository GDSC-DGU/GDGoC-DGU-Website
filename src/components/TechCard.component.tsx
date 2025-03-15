import Image from "next/image";
import React from "react";

import { cn, isMobile } from "@/src/function/utils";

/**
 * 기술 카드 컴포넌트입니다.
 * @author 도형
 */

export const TechCard = ({
  imageSrc,
  imageSrcs = [],
  texts = [],
  leftTexts = [],
  rightTexts = [],
  layout = "standard",
  className = "",
  imageAlt = "",
  imageSize = 80,
}: {
  imageSrc?: string;
  imageSrcs?: string[];
  texts: string[];
  leftTexts?: string[];
  rightTexts?: string[];
  layout?: "standard" | "split";
  className?: string;
  imageAlt?: string;
  imageSize?: number;
}) => {
  const mobile = isMobile();

  if (layout === "standard") {
    return (
      <div className={cn("bg-gray-50 rounded-2xl shadow-sm p-4 flex flex-col items-center", className)}>
        <div className='mb-3 flex justify-center items-center h-24'>
          {imageSrcs.length > 0 ? (
            <div className='flex space-x-2'>
              {imageSrcs.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`${imageAlt || texts[0] || ""} ${index + 1}`}
                  width={imageSize}
                  height={imageSize}
                  className='object-contain'
                />
              ))}
            </div>
          ) : imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt || texts[0] || ""}
              width={imageSize}
              height={imageSize}
              className='object-contain'
            />
          ) : (
            <div className='w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center'>
              <span className='text-xl font-bold text-gray-500'>{(texts[0] || "").charAt(0) || "?"}</span>
            </div>
          )}
        </div>
        <div className='text-center'>
          {texts.map((text, index) => (
            <p key={index} className={cn("font-bold text-gray-600", mobile ? "text-sm" : "text-lg")}>
              {text}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("bg-gray-50 rounded-1xl shadow-sm p-4 flex items-center justify-between", className)}>
      {/* 가운데 이미지 */}
      <div className='mx-4 flex justify-center items-center'>
        {imageSrc ? (
          <Image src={imageSrc} alt={imageAlt || ""} width={imageSize} height={imageSize} className='object-contain' />
        ) : (
          <div className='w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center'>
            <span className='text-2xl font-bold text-gray-500'>?</span>
          </div>
        )}
      </div>
    </div>
  );
};
