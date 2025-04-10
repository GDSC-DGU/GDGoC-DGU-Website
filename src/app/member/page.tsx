"use client";

import Image from "next/image";

import { MemberCard } from "@/src/components/card/MemberCard.component";
import { useMemberQuery } from "@/src/lib/query/useMemberQuery";
import { Member } from "@/src/types";

export default function MemberPage() {
  const { data: members, isLoading, isError } = useMemberQuery();

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;

  return (
    <section className='w-full py-24 flex justify-center'>
      <div className='w-fit max-w-screen-xl place-items-center px-4 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 justify-start'>
        {members?.map((m: Member) => <MemberCard key={m.id} member={m} />)}
      </div>
    </section>
  );
}
