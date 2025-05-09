"use client";

import { StudyCard } from "@/src/components/card/StudyCard.component";
import { useStudyQuery } from "@/src/lib/query/useStudyQuery";
import { Study } from "@/src/types";

export default function StudyPage() {
  const { data: seminars, isLoading, isError } = useStudyQuery();

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;

  return (
    <section className='w-full py-24 flex justify-center'>
      <div className='w-fit max-w-screen-xl place-items-center px-4 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 justify-start'>
        {seminars?.map((s: Study) => <StudyCard key={s.id} study={s} />)}
      </div>
    </section>
  );
}
