import { Project } from "@/src/types";

import { getRelationTitle } from "./getRelationTitle";
import { notion } from "./notion.client";

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
