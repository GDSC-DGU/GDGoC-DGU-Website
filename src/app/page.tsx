"use client";

import Image from "next/image";

import { IntroduceSection, MainEventsSection, WeeklyActivitesSection } from "@/src/components/home";

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-black text-white w-full'>
      {/* 메인 컨텐츠 */}
      <main className='flex flex-col items-center justify-center flex-1 text-center tablet:px-8 w-full'>
        <Image src='/images/svg/home_img_2.svg' alt='GDGoC' width={1440} height={1000} />
        <div className='mt-10 py-10'>
          <h1 className='text-2xl desktop:text-6xl font-bold mb-4'>Google Developer Group on Campus</h1>
          <h2 className='text-xl desktop:text-4xl font-bold mb-4'>Dongguk University</h2>
        </div>
      </main>
      <div className='w-full h-64 bg-gradient-to-b from-black to-white' />
      <div className='flex flex-col items-center flex-1 tablet:px-8 py-16 bg-white w-full'>
        {/* 첫 번째 섹션: GDGoC 소개 */}
        <IntroduceSection />

        {/* 두 번째 섹션: Main Events */}
        <MainEventsSection />

        {/* 세 번째 섹션: Weekly Activity */}
        <WeeklyActivitesSection />
      </div>
    </div>
  );
}
