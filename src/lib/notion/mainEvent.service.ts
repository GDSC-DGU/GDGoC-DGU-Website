import { MainEvent } from "@/src/types/mainEvent";

import { notion } from "./notion.client";

const dbId = process.env.NOTION_MAIN_EVENT_DATABASE_ID!;

/**
 * Presigned URL의 만료 여부를 확인합니다.
 * @param expiresStr Notion에서 받은 URL의 만료 시간 (ISO 8601 형식)
 * @returns URL이 만료되었는지 여부
 * @author 동현
 */

const isUrlExpired = (expiresStr: string): boolean => {
  try {
    const expiresTime = new Date(expiresStr);
    const currentTime = new Date();
    return currentTime >= expiresTime;
  } catch {
    return true; // 만료 시간 파싱 실패 시 만료된 것으로 간주
  }
};

/**
 * Notion 페이지에서 새 이미지 URL을 요청합니다.
 * @param pageId Notion 페이지 ID
 * @returns 새 이미지 URL 또는 빈 문자열
 * @author 동현
 */

const fetchNewImageUrl = async (pageId: string): Promise<string> => {
  try {
    const pageContent = await notion.blocks.children.list({ block_id: pageId });
    const imageBlock = pageContent.results.find((block: any) => block.type === "image") as any;

    if (imageBlock && imageBlock.image) {
      return imageBlock.image.file?.url ?? imageBlock.image.external?.url ?? "";
    }
    return "";
  } catch (error) {
    console.error(`Error fetching new image URL for page ${pageId}:`, error);
    return "";
  }
};

/**
 * Notion에 저장된 메인 이벤트 데이터베이스를 조회하여 메인 이벤트 리스트를 반환합니다.
 * 날짜 기준 최신순으로 정렬됩니다.
 * @author 동현
 */

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
      let imageSrc = "";
      let expiresStr = "";

      // 페이지 내부 이미지 가져오기
      try {
        const pageContent = await notion.blocks.children.list({ block_id: page.id });
        const imageBlock = pageContent.results.find((block: any) => block.type === "image") as any;

        if (imageBlock && imageBlock.image) {
          imageSrc = imageBlock.image.file?.url ?? imageBlock.image.external?.url ?? "";
          expiresStr = imageBlock.image.file?.expiry_time ?? ""; // Notion API에서 제공하는 만료 시간
        }

        // Presigned URL 만료 확인
        if (imageSrc && expiresStr && isUrlExpired(expiresStr)) {
          console.warn(`Presigned URL expired for page ${page.id}, fetching new URL`);
          imageSrc = await fetchNewImageUrl(page.id); // 만료된 경우 새 URL 요청
        }
      } catch (error: any) {
        console.error(`Error fetching page content for ${page.id}:`, error);

        // AccessDenied 오류 처리
        if (error.message.includes("AccessDenied")) {
          console.warn(`AccessDenied for page ${page.id}, attempting to fetch new URL`);
          imageSrc = await fetchNewImageUrl(page.id); // 오류 발생 시 새 URL 요청
        }
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
