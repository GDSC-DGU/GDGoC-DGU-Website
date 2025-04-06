import { Seminar } from "@/src/types";

import { getRelationTitle } from "./getRelationTitle";
import { notion } from "./notion.client";

const dbIds = [process.env.NOTION_SEMINAR_DATABASE_ID_GEN1!, process.env.NOTION_SEMINAR_DATABASE_ID_GEN2!];

export const getSeminarList = async (): Promise<Seminar[]> => {
  const results = await Promise.all(dbIds.map((id) => notion.databases.query({ database_id: id })));

  const seminars = await Promise.all(
    results.flatMap((res, index) =>
      res.results.map(async (page: any) => {
        const props = page.properties;
        const speakerId = props.Speaker?.relation?.[0]?.id;
        const speakerName = speakerId ? await getRelationTitle(speakerId) : "스피커";
        return {
          id: page.id,
          generation: props.Generation?.number ?? index + 1,
          title: props.Name?.title?.[0]?.plain_text ?? "",
          content: props.Description?.rich_text?.[0]?.text?.content ?? "",
          src: props.Files?.files?.[1]?.file?.url ?? "",
          part: props.Topic?.select?.name ?? "",
          name: speakerName,
          category: props.Tags?.select?.name ?? "",
        };
      }),
    ),
  );

  return seminars;
};
