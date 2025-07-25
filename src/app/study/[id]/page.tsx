"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

import { StudyDetail } from "@/src/components/detailLayout/StudyDetail.component";
import { useStudyQuery } from "@/src/lib/query/useStudyQuery";

export default function StudyDetailPage() {
  const { id } = useParams();
  const studyId = String(id);
  const { data: studys, isLoading, isError } = useStudyQuery();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const matchedStudy = studys?.find((item) => item.id === studyId);
  if (!matchedStudy) return <p>프로젝트를 찾을 수 없습니다.</p>;

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;

  return (
    <div className='w-full p-4 tablet:py-12 desktop:py-24 bg-white flex flex-col items-center'>
      <StudyDetail study={matchedStudy} />
    </div>
  );
}
