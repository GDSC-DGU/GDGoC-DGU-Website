/**
 * 모듈화한 디테일 레이아웃 컴포넌트들을 조합하여 만든 스터디 디테일 컴포넌트입니다.
 * @author 정선
 */
import { Study } from "@/src/types";

import { DetailLayout } from "./DetailLayout.component";

export type StudyDetailProps = {
  study: Study;
};

export const StudyDetail = ({ study }: StudyDetailProps) => {
  const { title, content, generation, src, id, name, part, members, status } = study;

  return (
    <DetailLayout>
      <DetailLayout.TitleContainer title={title} part={part} type='study' generation={generation} />
      <DetailLayout.ImageBox src={src} alt='프로젝트 대표 사진' />
      <DetailLayout.ContentContainer content={content} type='study'>
        <DetailLayout.StudyInfo name={name} members={members} status={status} />
      </DetailLayout.ContentContainer>
    </DetailLayout>
  );
};
