import { Member } from "@/src/types/member";

import { notion } from "./notion.client";

const dbIds = [process.env.NOTION_MEMBER_DATABASE_ID_GEN1!, process.env.NOTION_MEMBER_DATABASE_ID_GEN2!];

export const getMemberList = async (): Promise<Member[]> => {
  const results = await Promise.all(dbIds.map((id) => notion.databases.query({ database_id: id })));

  const allMembers = results.flatMap((res, index) =>
    res.results.map((page: any) => {
      const props = page.properties;
      return {
        id: page.id,
        name: props.Name?.title?.[0]?.plain_text ?? "",
        part: props.Part?.select?.name ?? "",
        major: props.Major?.select?.name ?? "",
        generation: props.Generation?.number ?? index + 1,
        role: props.Role?.select?.name ?? "",
        githubLink: props.Github?.rich_text?.[0]?.plain_text ?? "",
        linkedInLink: "", // 필요 시 확장
        src: "",
      };
    }),
  );

  const partPriority = {
    Lead: 0,
    Devral: 1,
    "AI/ML": 2,
    "Web/App": 3,
    "Server/Cloud": 4,
  };

  allMembers.sort((a, b) => {
    const partA = partPriority[a.part as keyof typeof partPriority] ?? 99;
    const partB = partPriority[b.part as keyof typeof partPriority] ?? 99;

    if (partA !== partB) return partA - partB;
    return a.name.localeCompare(b.name);
  });
  return allMembers;
};
