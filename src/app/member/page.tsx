"use client";

import { useEffect, useState } from "react";

import { Filter } from "@/src/components";
import { MemberCard } from "@/src/components/card/MemberCard.component";
import { TwoCircleComponent } from "@/src/components/page/TwoCircle.components";
import { useMemberQuery } from "@/src/lib/query/useMemberQuery";
import { Member } from "@/src/types";
import { normalizePart } from "@/src/utils/normalizePart";

import PartFilter from "./components/PartFilter";

export default function MemberPage() {
  const { data: members } = useMemberQuery();
  const [generation, setGeneration] = useState("전체");
  const [part, setPart] = useState("전체");

  useEffect(() => {
    scrollTo();
  }, []);

  const filteredMembers = members?.filter((m: Member) => {
    const matchGeneration = generation === "전체" || m.generation === Number(generation);
    const matchPart = part === "전체" || normalizePart(m.part) === part;
    return matchGeneration && matchPart;
  });

  return (
    <div className='w-full py-6 tablet:py-12 desktop:py-24 flex flex-col items-center bg-white'>
      <TwoCircleComponent
        TwoCircle={{
          circleColor: "border-blue",
          text: "Member",
          textColor: "text-blue",
          size: 150,
          textSize: 24,
        }}
      />
      <section className='w-fit max-w-screen-xl justify-center'>
        <div className='flex flex-row justify-center tablet:items-center py-6 tablet:py-12 gap-4'>
          <Filter category='generation' value={generation} onChange={setGeneration} />
          {/* 모바일: Filter만 보이기 */}
          <div className='block tablet:hidden'>
            <Filter category='part' value={part} onChange={setPart} />
          </div>
          {/* 태블릿 이상: PartFilter만 보이기 */}
          <div className='hidden tablet:block'>
            <PartFilter selectedPart={part} onSelect={setPart} />
          </div>
        </div>
        <div className='w-fit place-items-center grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 justify-center'>
          {filteredMembers?.map((m: Member) => <MemberCard key={m.id} member={m} />)}
        </div>
      </section>
    </div>
  );
}
