/**
 * 모듈화한 디테일 레이아웃 컴포넌트들을 조합하여 만든 프로젝트 디테일 컴포넌트입니다.
 * @author 정선
 */
import { Project } from "@/src/types";

import { DetailLayout } from "./DetailLayout.component";

export type ProjectDetailProps = {
  project: Project;
};

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const { title, content, generation, src, id, leader, members, githubLink, youtubeLink } = project;

  return (
    <DetailLayout>
      <DetailLayout.TitleContainer title={title} type='project' generation={generation} />
      <DetailLayout.ImageBox src={src} alt='프로젝트 대표 사진' />
      <DetailLayout.ContentContainer content={content} type='project'>
        <DetailLayout.ProjectInfo leader={leader} members={members} githubLink={githubLink} youtubeLink={youtubeLink} />
      </DetailLayout.ContentContainer>
    </DetailLayout>
  );
};
