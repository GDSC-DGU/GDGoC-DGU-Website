import { Study } from "@/src/types";

import { getRelationTitle } from "./getRelationTitle";
import { notion } from "./notion.client";

const dbIds = [process.env.NOTION_STUDY_DATABASE_ID_GEN1!, process.env.NOTION_STUDY_DATABASE_ID_GEN2!];

export const getStudyList = async (): Promise<Study[]> => {
  const results = await Promise.all(dbIds.map((id) => notion.databases.query({ database_id: id })));

  const studys = await Promise.all(
    results.flatMap((res, index) =>
      res.results.map(async (page: any) => {
        const props = page.properties;
        const leaderId = props.Lead?.relation?.[0]?.id;
        const participateIds = props.Participate?.relation?.map((rel: any) => rel.id) ?? [];
        const leaderName = leaderId ? await getRelationTitle(leaderId) : "팀장";
        const participateNames = await getRelationTitle(participateIds ?? []);

        return {
          id: page.id,
          generation: props.Generation?.number ?? index + 1,
          title: props.Title?.title?.[0]?.plain_text ?? "",
          content: props.Description?.rich_text?.[0]?.text?.content ?? "",
          src: page.cover?.file?.url ?? "",
          name: leaderName,
          part: props.Part?.select?.name ?? "",
          status: props.Status?.status?.name ?? "",
          members: participateNames,
        };
      }),
    ),
  );

  return studys;
};
