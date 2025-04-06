/**
 * 모듈화한 카드 컴포넌트들을 조합하여 만든 프로젝트 카드 컴포넌트입니다.
 * ProjectCardProps는 Project type을 기반으로 정의하였습니다.
 * @author 태욱, 정선
 */
import { Project } from "@/src/types";

import { Card } from "./Card.components";

export type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, content, generation, src } = project;
  return (
    <Card>
      <Card.CardContainer>
        <Card.CardImage src={src} alt='projectImage' size='small' />
        <Card.CardBody>
          <Card.Generation generation={generation} />
          <Card.Title title={title} />
          <Card.Content content={content} type='project' />
        </Card.CardBody>
      </Card.CardContainer>
    </Card>
  );
};
