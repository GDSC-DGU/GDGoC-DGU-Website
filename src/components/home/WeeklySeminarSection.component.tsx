import Link from "next/link";
import { useEffect, useState } from "react";

import { SeminarCard } from "@/src/components/card/SeminarCard.component";
import { isMobile } from "@/src/function/utils";
import { useSeminarQuery } from "@/src/lib/query/useSeminarQuery";
import { Seminar } from "@/src/types";

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

export const WeeklySeminarSection = () => {
  const { data: seminars, isLoading, isError } = useSeminarQuery();
  const [displaySeminars, setDisplaySeminars] = useState<Seminar[]>([]);

  useEffect(() => {
    const updateDisplaySeminars = () => {
      if (seminars) {
        const count = isMobile() ? 1 : 3;
        setDisplaySeminars(getRandomItems(seminars, count));
      }
    };

    // 초기 설정
    updateDisplaySeminars();

    // 윈도우 리사이즈 이벤트 리스너
    window.addEventListener("resize", updateDisplaySeminars);

    return () => {
      window.removeEventListener("resize", updateDisplaySeminars);
    };
  }, [seminars]);

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;

  return (
    <div className='w-full'>
      <div className='flex justify-between items-center mb-8 px-10 tablet:px-4'>
        <div className='text-gray-600 font-bold text-[24px] font-notosanskr'>Seminar</div>
        <button className='bg-blue-100 text-blue px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition-colors'>
          <Link href='/seminar'>For More</Link>
        </button>
      </div>
      <section className='w-full flex justify-center'>
        <div className='w-fit max-w-screen-xl place-items-center px-4 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 justify-start'>
          {displaySeminars.map((s: Seminar) => (
            <SeminarCard key={s.id} seminar={s} />
          ))}
        </div>
      </section>
    </div>
  );
};
