/**
 * 모듈화한 카드 컴포넌트들을 조합하여 만든 멤버 카드 컴포넌트입니다.
 * @author 태욱
 */
import { CardProps } from "@/src/types";

import { Card } from "./Card.components";

export const MemberCard = ({ generation, memberName, src, part, role, major, githubLink, linkedInLink }: CardProps) => {
  return (
    <Card>
      <Card.CardContainer type='member'>
        <Card.CardImage src={src} alt='MemberImage' size='large' />
        <Card.CardBody>
          <Card.Generation generation={generation} />
          <Card.Title title={memberName} part={part} />
          <Card.MemeberContent role={role} major={major} github={githubLink} linkedIn={linkedInLink} />
        </Card.CardBody>
      </Card.CardContainer>
    </Card>
  );
};
