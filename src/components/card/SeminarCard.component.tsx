import { PartTag } from "../PartTag";
import { Card } from "./Card.components";

interface SeminarCardProps {
  generation: number;
  title: string;
  content: string;
  src: string;
  part: "AI/ML" | "Server/Cloud" | "Web/App" | "Devral" | "Lead";
  name: string;
  category: string;
}

export const SeminarCard = ({ generation, title, content, src, part, name, category }: SeminarCardProps) => {
  return (
    <Card>
      <Card.SmallCardContainer>
        <Card.CardImage src={src} alt='projectImage' size='small' />
        <Card.CardBody>
          <Card.Generation generation={generation} />
          <Card.Title title={title} part={part} />
          <Card.Content content={content} type='seminar' />
          <Card.SeminarInfo name={name} category={category} />
        </Card.CardBody>
      </Card.SmallCardContainer>
    </Card>
  );
};
