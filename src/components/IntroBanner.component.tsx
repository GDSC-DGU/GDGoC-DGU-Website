"use client";

import React, { useRef, useState } from "react";

import { PAGE_INTRODUCE } from "../constants";

/**
 * 세미나, 프로젝트, 스터디 페이지의 상단에 들어가는 페이지 설명 배너입니다.
 * @author 정선
 **/

type PageType = "project" | "seminar" | "study";

interface IntroBannerProps {
  type: PageType;
}

export const IntroBanner = ({ type }: IntroBannerProps) => {
  return (
    <div className='w-full flex py-12 px-8 tablet:px-16 desktop:px-24 items-start gap-4 bg-blue-50 flex-col'>
      <h1 className='text-Head3 tablet:text-Head1 text-black'>{PAGE_INTRODUCE[type].title}</h1>
      <p className='text-Body4 tablet:text-Body1 text-black'>. . . .</p>
      <p className='text-Body4 tablet:text-Body1 text-black'>{PAGE_INTRODUCE[type].content}</p>
    </div>
  );
};
