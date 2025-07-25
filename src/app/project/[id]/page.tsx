"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

import { ProjectDetail } from "@/src/components/detailLayout/ProjectDetail.component";
import { useProjectQuery } from "@/src/lib/query/useProjectQuery";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const projectId = String(id);
  const { data: projects, isLoading, isError } = useProjectQuery();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const matchedProject = projects?.find((item) => item.id === projectId);
  if (!matchedProject) return <p>프로젝트를 찾을 수 없습니다.</p>;

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;

  return (
    <div className='w-full p-4 tablet:py-12 desktop:py-24 bg-white flex flex-col items-center'>
      <ProjectDetail project={matchedProject} />
    </div>
  );
}
