"use client";

import { useEffect, useMemo, useState } from "react";

import { IntroBanner } from "@/src/components";
import { Filter } from "@/src/components";
import { SeminarCard } from "@/src/components/card/SeminarCard.component";
import { useSeminarQuery } from "@/src/lib/query/useSeminarQuery";
import { Seminar } from "@/src/types";
import { seminarTypeMap } from "@/src/types";
import { normalizePart } from "@/src/utils/normalizePart";

export default function SeminarPage() {
  const { data: seminars } = useSeminarQuery();
  const [generation, setGeneration] = useState("전체");
  const [part, setPart] = useState("전체");
  const [type, setType] = useState("전체");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredSeminars = useMemo(() => {
    if (!seminars) return [];

    return seminars.filter((s: Seminar) => {
      const matchGeneration = generation === "전체" || String(s.generation) === generation;
      const matchPart = part === "전체" || normalizePart(s.part) === part;
      const mappedType = seminarTypeMap[type];
      const matchesType = type === "전체" || s.category === mappedType;
      return matchGeneration && matchPart && matchesType;
    });
  }, [seminars, generation, part, type]);

  return (
    <div className='w-full pb-24 flex flex-col items-center'>
      <IntroBanner type='seminar' />
      <section className='w-fit max-w-screen-xl justify-center'>
        <div className='flex flex-col gap-2 tablet:flex-row justify-between tablet:items-center py-6 tablet:py-12'>
          <div className='justify-start max-w-screen-xl gap-4 flex'>
            <Filter category='generation' value={generation} onChange={setGeneration} />
            <Filter category='simplePart' value={part} onChange={setPart} />
            <Filter category='type' value={type} onChange={setType} />
          </div>
          <label className='text-Body2 tablet:text-Body1 text-gray-600 text-end'>
            {filteredSeminars.length}개의 세미나
          </label>
        </div>
        <div className='w-fit place-items-center grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 justify-center'>
          {filteredSeminars.map((s: Seminar) => (
            <SeminarCard key={s.id} seminar={s} />
          ))}
        </div>
      </section>
    </div>
  );
}
