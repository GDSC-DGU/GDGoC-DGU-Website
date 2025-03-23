/**
 * 모듈화한 카드 컴포넌트들을 조합하여 만든 세미나 카드 컴포넌트입니다.
 * @author 태욱
 */
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
      <Card.CardContainer>
        <Card.CardImage src={src} alt='SeminarImage' size='small' />
        <Card.CardBody>
          <Card.Generation generation={generation} />
          <Card.Title title={title} part={part} />
          <Card.Content content={content} type='seminar' />
          <Card.SeminarInfo name={name} category={category} />
        </Card.CardBody>
      </Card.CardContainer>
    </Card>
  );
};
