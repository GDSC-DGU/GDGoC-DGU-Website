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
      <Card.SmallCardContainer>
        <Card.CardImage src={src} alt='projectImage' size='small' />
        <Card.CardBody>
          <Card.Generation generation={generation} />
          <Card.Title title={title} />
          <Card.Content content={content} type='project' />
        </Card.CardBody>
      </Card.SmallCardContainer>
    </Card>
  );
};
