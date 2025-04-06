import { Project } from "@/src/types";

import { getRelationTitle } from "./getRelationTitle";
import { notion } from "./notion.client";

/**
 * Notion에 저장된 프로젝트 데이터베이스(1기, 2기)를 병합하여 프로젝트 리스트를 반환합니다.
 * Leader, Members는 관계형 필드로, getRelationTitle 함수를 사용하여 추출합니다.
 * @author 정선
 */

const dbIds = [process.env.NOTION_PROJECT_DATABASE_ID_GEN1!, process.env.NOTION_PROJECT_DATABASE_ID_GEN2!];

export const getProjectList = async (): Promise<Project[]> => {
  const results = await Promise.all(dbIds.map((id) => notion.databases.query({ database_id: id })));

  const projects = await Promise.all(
    results.flatMap((res, index) =>
      res.results.map(async (page: any) => {
        const props = page.properties;
        const leaderId = props.Leader?.relation?.[0]?.id;
        const leaderName = leaderId ? await getRelationTitle(leaderId) : "리더";
        const memberIds = props.Members?.relation?.map((rel: any) => rel.id) ?? [];

        const mamberNames = await getRelationTitle(memberIds ?? []);
        return {
          id: page.id,
          generation: props.Generation?.number ?? index + 1,
          title: props.Idea?.title?.[0]?.plain_text ?? "",
          content: props.Introduction?.rich_text?.[0]?.text?.content ?? "",
          src: page.cover?.file?.url ?? "",
          leader: leaderName,
          githubLink: props.Github?.rich_text?.[0]?.text?.content ?? "",
          youtubeLink: props.Youtube?.rich_text?.[0]?.text?.content ?? "",
          members: mamberNames,
        };
      }),
    ),
  );

  return projects;
};
