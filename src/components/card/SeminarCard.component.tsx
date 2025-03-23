import { PartTag } from "../PartTag";
import { Card } from "./Card.components";

interface ProjectCardProps {
  generation: number;
  title: string;
  content: string;
  src: string;
  part: "AI/ML" | "Server/Cloud" | "Web/App" | "Devral" | "Lead";
  name: string;
  category: string;
}

export const ProjectCard = ({ generation, title, content, src, part, name, category }: ProjectCardProps) => {
  return (
    <Card>
      <Card.SmallCardContainer>
        <Card.CardImage src={src} alt='projectImage' size='small' />
        <Card.CardBody>
          <Card.Generation generation={generation} />
          <Card.Title title={title} part={part} />
          <Card.Content content={content} type='project' />
          <Card.Speaker name={name} />
          <Card.Category category={category} />
        </Card.CardBody>
      </Card.SmallCardContainer>
    </Card>
  );
};
