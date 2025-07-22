"use client";

import Image from "next/image";

import { IntroduceSection, WeeklyActivitesSection } from "@/src/components/home";
import { TwoCircleComponent } from "@/src/components/page/TwoCircle.components";

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-black text-white'>
      {/* 메인 컨텐츠 */}
      <main className='flex flex-col items-center justify-center flex-1 text-center px-8'>
        <Image src='/images/svg/home_img_2.svg' alt='GDGoC' width={1440} height={1000} />
        <div className='mt-10 py-10'>
          <h1 className='text-6xl font-bold mb-4'>Google Developer Group on Campus</h1>
          <h2 className='text-4xl font-bold mb-4'>Dongguk University</h2>
        </div>
      </main>
      <div className='w-full h-64 bg-gradient-to-b from-black to-white' />
      <div className='flex flex-col items-center flex-1 px-8 py-16 bg-white'>
        {/* 첫 번째 섹션: GDGoC 소개 */}
        <IntroduceSection />

        {/* 두 번째 섹션: Main Events */}
        <section className='flex flex-col items-center justify-center gap-8 mb-32 p-10'>
          <TwoCircleComponent
            TwoCircle={{
              circleColor: "border-green",
              text: "Main Events",
              textColor: "text-green",
              size: 230,
              textSize: 20,
            }}
          />
          <div>Timeline</div>
        </section>

        {/* 세 번째 섹션: Weekly Activity */}
        <WeeklyActivitesSection />
      </div>
    </div>
  );
}
