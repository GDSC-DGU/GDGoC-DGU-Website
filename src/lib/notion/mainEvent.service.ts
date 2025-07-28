import { MainEvent } from "@/src/types/mainEvent";

import { notion } from "./notion.client";

/**
 * Notion에 저장된 메인 이벤트 데이터베이스를 조회하여 메인 이벤트 리스트를 반환합니다.
 * 날짜 기준 최신순으로 정렬됩니다.
 * @author 동현
 */

const dbId = process.env.NOTION_MAIN_EVENT_DATABASE_ID!;

export const getMainEventList = async (): Promise<MainEvent[]> => {
  const response = await notion.databases.query({
    database_id: dbId,
    sorts: [
      {
        property: "ID",
        direction: "ascending",
      },
    ],
  });

  const mainEvents = await Promise.all(
    response.results.map(async (page: any) => {
      const props = page.properties;

      // 페이지 내부 이미지 가져오기
      let imageSrc = "";
      try {
        const pageContent = await notion.blocks.children.list({ block_id: page.id });
        const imageBlock = pageContent.results.find((block: any) => (block as any).type === "image") as any;

        if (imageBlock && imageBlock.image) {
          imageSrc = imageBlock.image.file?.url ?? imageBlock.image.external?.url ?? "";
        }
      } catch (error) {
        console.error(`Error fetching page content for ${page.id}:`, error);
      }

      return {
        id: page.id,
        title: props.Title?.title?.[0]?.plain_text ?? "",
        content: props.Content?.rich_text?.[0]?.text?.content ?? "",
        imageSrc,
      };
    }),
  );

  return mainEvents;
};
