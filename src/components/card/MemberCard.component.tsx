/**
 * 모듈화한 카드 컴포넌트들을 조합하여 만든 멤버 카드 컴포넌트입니다.
 * @author 태욱
 */
import { Card } from "./Card.components";

interface MemberCardProps {
  generation: number;
  name: string;
  src: string;
  part: "AI/ML" | "Server/Cloud" | "Web/App" | "Devral" | "Lead";
  role: string;
  major: string;
  githubLink: string;
  linkedInLink: string;
}

export const MemberCard = ({ generation, name, src, part, role, major, githubLink, linkedInLink }: MemberCardProps) => {
  return (
    <Card>
      <Card.CardContainer type='member'>
        <Card.CardImage src={src} alt='MemberImage' size='large' />
        <Card.CardBody>
          <Card.Generation generation={generation} />
          <Card.Title title={name} part={part} />
          <Card.MemeberContent role={role} major={major} github={githubLink} linkedIn={linkedInLink} />
        </Card.CardBody>
      </Card.CardContainer>
    </Card>
  );
};
