import { Member } from "@/src/types/member";

import { notion } from "./notion.client";

/**
 * Notion에 저장된 멤버 데이터베이스(1기, 2기)를 모두 불러와 병합하고,
 * 파트 우선순위 및 이름 가나다 순서대로 정렬 후 정렬된 멤버 리스트를 반환합니다.
 * - Lead > Devral > AI/ML > Web/App > Server/Cloud
 * @author 정선
 */

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
        linkedInLink: "", // 현재 없음
        src: page.cover?.external?.url ?? "",
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
