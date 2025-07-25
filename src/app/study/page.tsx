"use client";

import { useEffect, useState } from "react";

import { Filter, IntroBanner, StudyInfo } from "@/src/components";
import { StudyCard } from "@/src/components/card/StudyCard.component";
import { studyIntroduce } from "@/src/constants";
import { useStudyQuery } from "@/src/lib/query/useStudyQuery";
import { Study } from "@/src/types";

export default function StudyPage() {
  const { data: study } = useStudyQuery();
  const [generation, setGeneration] = useState("전체");
  const [part, setPart] = useState("전체");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredStudies = study?.filter((s) => {
    const matchesGeneration = generation === "전체" || String(s.generation) === generation;
    const matchesPart = part === "전체" || s.part === part;
    return matchesGeneration && matchesPart;
  });

  return (
    <div className='w-full pb-24 flex flex-col items-center'>
      <IntroBanner type='study' />
      <section className='w-fit max-w-screen-xl justify-center'>
        <div className='flex flex-col gap-2 tablet:flex-row justify-between tablet:items-center py-6 tablet:py-12'>
          <div className='justify-start max-w-screen-xl gap-4 flex'>
            <Filter category='generation' value={generation} onChange={setGeneration} />
            <Filter category='simplePart' value={part} onChange={setPart} />
          </div>
          <label className='text-Body2 tablet:text-Body1 text-gray-600 text-end'>
            {filteredStudies?.length}개의 스터디
          </label>
        </div>
        {part !== "전체" && (
          <div className='pb-6 desktop:pb-12 w-[312px] tablet:w-[648px] desktop:w-full flex justify-center'>
            <div className='w-full'>
              <StudyInfo
                part={part as "AI/ML" | "Server/Cloud" | "Web/App"}
                content={studyIntroduce[part as "AI/ML" | "Server/Cloud" | "Web/App"]}
              />
            </div>
          </div>
        )}
        <div className='w-fit place-items-center grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 justify-center'>
          {filteredStudies?.map((s: Study) => <StudyCard key={s.id} study={s} />)}
        </div>
      </section>
    </div>
  );
}
