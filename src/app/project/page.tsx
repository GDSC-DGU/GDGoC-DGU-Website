"use client";

import { ProjectCard } from "@/src/components/card/ProjectCard.component";
import { useProjectQuery } from "@/src/lib/query/useProjectQuery";
import { Project } from "@/src/types";

export default function ProjectPage() {
  const { data: projects, isLoading, isError } = useProjectQuery();

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;

  return (
    <section className='w-full py-24 flex justify-center'>
      <div className='w-fit max-w-screen-xl place-items-center px-4 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 justify-start'>
        {projects?.map((m: Project) => <ProjectCard key={m.id} project={m} />)}
      </div>
    </section>
  );
}
