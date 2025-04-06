"use client";

import { SeminarCard } from "@/src/components/card/SeminarCard.component";
import { useSeminarQuery } from "@/src/lib/query/useSeminarQuery";
import { Seminar } from "@/src/types";

export default function SeminarPage() {
  const { data: seminars, isLoading, isError } = useSeminarQuery();

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;

  return (
    <section className='w-full py-24 flex justify-center'>
      <div className='w-fit max-w-screen-xl place-items-center px-4 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 justify-start'>
        {seminars?.map((s: Seminar) => <SeminarCard key={s.id} seminar={s} />)}
      </div>
    </section>
  );
}
