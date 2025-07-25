/**
 * 모듈화한 디테일 레이아웃 컴포넌트들을 조합하여 만든 프로젝트 디테일 컴포넌트입니다.
 * @author 정선
 */
import { Seminar } from "@/src/types";

import { DetailLayout } from "./DetailLayout.component";

export type SeminarDetailProps = {
  seminar: Seminar;
};

export const SeminarDetail = ({ seminar }: SeminarDetailProps) => {
  const { title, content, generation, src, id, name, part, date, category } = seminar;

  return (
    <DetailLayout>
      <DetailLayout.TitleContainer title={title} part={part} type='seminar' generation={generation} />
      <DetailLayout.ImageBox src={src} alt='세미나 대표 사진' />
      <DetailLayout.ContentContainer content={content} type='project'>
        <DetailLayout.SeminarInfo name={name} date={date} category={category} title={title} />
      </DetailLayout.ContentContainer>
    </DetailLayout>
  );
};
