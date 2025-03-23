import { Card } from "./Card.components";

interface StudyCardProps {
  generation: number;
  title: string;
  content: string;
  src: string;
  part: "AI/ML" | "Server/Cloud" | "Web/App" | "Devral" | "Lead";
  name: string;
  status: string;
}

export const StudyCard = ({ generation, title, content, src, part, name, status }: StudyCardProps) => {
  return (
    <Card>
      <Card.CardContainer>
        <Card.CardImage src={src} alt='StudyImage' size='small' />
        <Card.CardBody>
          <Card.Generation generation={generation} />
          <Card.Title title={title} part={part} />
          <Card.Content content={content} type='study' />
          <Card.StudyInfo name={name} status={status} />
        </Card.CardBody>
      </Card.CardContainer>
    </Card>
  );
};
