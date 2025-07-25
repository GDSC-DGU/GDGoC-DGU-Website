/**
 * 모듈화한 카드 컴포넌트들을 조합하여 만든 스터디 카드 컴포넌트입니다.
 * StudyCardProps는 Study 타입을 기반으로 정의하였습니다.
 * @author 태욱
 */
import { useRouter } from "next/navigation";

import { Study } from "@/src/types";

import { Card } from "./Card.components";

export type StudyCardProps = {
  study: Study;
};

export const StudyCard = ({ study }: StudyCardProps) => {
  const { title, name, part, generation, src, content, status, id } = study;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/study/${id}`);
  };

  return (
    <Card onClick={handleClick}>
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
