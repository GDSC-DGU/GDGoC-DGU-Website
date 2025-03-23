/**
 * 모듈화한 카드 컴포넌트들을 조합하여 만든 스터디 카드 컴포넌트입니다.
 * @author 태욱
 */
import { CardProps } from "@/src/types";

import { Card } from "./Card.components";

export const StudyCard = ({ generation, title, content, src, part, name, status }: CardProps) => {
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
