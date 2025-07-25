"use client";

import { useEffect, useMemo, useState } from "react";

import { IntroBanner } from "@/src/components";
import { Filter } from "@/src/components";
import { ProjectCard } from "@/src/components/card/ProjectCard.component";
import { useProjectQuery } from "@/src/lib/query/useProjectQuery";
import { Project } from "@/src/types";

export default function ProjectPage() {
  const { data: projects } = useProjectQuery();
  const [generation, setGeneration] = useState("전체");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredProjects = useMemo(() => {
    if (!projects) return [];

    if (generation === "전체") return projects;

    return projects.filter((project: Project) => {
      return String(project.generation) === generation;
    });
  }, [projects, generation]);

  return (
    <div className='w-full pb-24 flex flex-col items-center'>
      <IntroBanner type='project' />
      <section className='w-fit max-w-screen-xl justify-center'>
        <div className='flex flex-col tablet:flex-row justify-between tablet:items-center py-6 tablet:py-12'>
          <Filter category='generation' value={generation} onChange={setGeneration} />
          <label className='text-Body2 tablet:text-Body1 text-gray-600 text-end'>
            {filteredProjects.length}개의 프로젝트
          </label>
        </div>
        <div className='w-fit place-items-center grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 justify-center'>
          {filteredProjects?.map((m: Project) => <ProjectCard key={m.id} project={m} />)}
        </div>
      </section>
    </div>
  );
}
