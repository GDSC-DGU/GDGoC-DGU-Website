import { Card } from "./Card.components";

interface MemberCardProps {
  generation: number;
  title: string;
  src: string;
  part: "AI/ML" | "Server/Cloud" | "Web/App" | "Devral" | "Lead";
  role: string;
  major: string;
  githubLink: string;
  linkedInLink: string;
}

export const MemberCard = ({
  generation,
  title,
  src,
  part,
  role,
  major,
  githubLink,
  linkedInLink,
}: MemberCardProps) => {
  return (
    <Card>
      <Card.CardContainer type='member'>
        <Card.CardImage src={src} alt='MemberImage' size='large' />
        <Card.CardBody>
          <Card.Generation generation={generation} />
          <Card.Title title={title} part={part} />
          <Card.MemeberContent role={role} major={major} github={githubLink} linkedIn={linkedInLink} />
        </Card.CardBody>
      </Card.CardContainer>
    </Card>
  );
};
