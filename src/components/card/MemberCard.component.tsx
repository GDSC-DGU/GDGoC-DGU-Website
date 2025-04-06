/**
 * 모듈화한 카드 컴포넌트들을 조합하여 만든 멤버 카드 컴포넌트입니다.
 * MemberCardProps는 Member type을 기반으로 정의하였습니다.
 * @author 태욱, 정선
 */
import { Member } from "@/src/types/member";

import { Card } from "./Card.components";

export type MemberCardProps = {
  member: Member;
};

export const MemberCard = ({ member }: MemberCardProps) => {
  const { name, part, major, role, githubLink, linkedInLink, generation, src } = member;
  return (
    <Card>
      <Card.CardContainer type='member'>
        <Card.CardImage src={src} alt='MemberImage' size='large' />
        <Card.CardBody>
          <Card.Generation generation={generation} />
          <Card.Title title={name} part={part} />
          <Card.MemeberContent
            role={role}
            major={major}
            github={githubLink}
            linkedIn={linkedInLink ? linkedInLink : ""}
          />
        </Card.CardBody>
      </Card.CardContainer>
    </Card>
  );
};
