/**
 * 모듈화한 카드 컴포넌트들을 조합하여 만든 세미나 카드 컴포넌트입니다.
 * @author 태욱
 */
import { CardProps } from "@/src/types";

import { Card } from "./Card.components";

export const SeminarCard = ({ generation, title, content, src, part, name, category }: CardProps) => {
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
