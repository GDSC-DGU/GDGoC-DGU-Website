"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

import { SeminarDetail } from "@/src/components/detailLayout/SeminarDetail.component";
import { useSeminarQuery } from "@/src/lib/query/useSeminarQuery";

export default function SeminarDetailPage() {
  const { id } = useParams();
  const seminarId = String(id);
  const { data: seminars, isLoading, isError } = useSeminarQuery();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const matchedSeminar = seminars?.find((item) => item.id === seminarId);
  if (!matchedSeminar) return <p>세미나를 찾을 수 없습니다.</p>;

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;

  return (
    <div className='w-full p-4 tablet:py-12 desktop:py-24 bg-white flex flex-col items-center'>
      <SeminarDetail seminar={matchedSeminar} />
    </div>
  );
}
