/**
 * 모듈화한 카드 컴포넌트들을 조합하여 만든 프로젝트 카드 컴포넌트입니다.
 * @author 태욱
 */
import { Card } from "./Card.components";

interface ProjectCardProps {
  generation: number;
  title: string;
  content: string;
  src: string;
}

export const ProjectCard = ({ generation, title, content, src }: ProjectCardProps) => {
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
