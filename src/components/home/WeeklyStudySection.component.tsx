"use client";

import Link from "next/link";

import { StudyCard } from "@/src/components/card/StudyCard.component";
import { useStudyQuery } from "@/src/lib/query/useStudyQuery";
import { Study } from "@/src/types";

/**
 * 배열에서 랜덤으로 n개의 요소를 선택하는 함수
 * @author 동현
 * @param array - 원본 배열
 * @param n - 선택할 요소의 개수
 * @returns 랜덤으로 선택된 n개의 요소 배열
 */
const getRandomItems = <T,>(array: T[], n: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

export const WeeklyStudySection = () => {
  const { data: studies, isLoading, isError } = useStudyQuery();

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;

  return (
    <div className='w-full'>
      <div className='flex justify-between items-center mb-8 px-4'>
        <div className='text-gray-600 font-bold text-[24px] font-notosanskr'>Study</div>
        <button className='bg-blue-100 text-blue px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition-colors'>
          <Link href='/study'>For More</Link>
        </button>
      </div>
      <section className='w-full flex justify-center'>
        <div className='w-fit max-w-screen-xl place-items-center px-4 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 justify-start'>
          {studies && getRandomItems(studies, 3).map((s: Study) => <StudyCard key={s.id} study={s} />)}
        </div>
      </section>
    </div>
  );
};
