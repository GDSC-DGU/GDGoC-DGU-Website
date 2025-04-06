import { Client } from "@notionhq/client";

/**
 * Notion API 클라이언트 인스턴스를 생성합니다.
 * 모든 Notion API 요청에 해당 클라이언트를 사용합니다.
 * @author 정선
 */

export const notion = new Client({
  auth: process.env.NOTION_API_SECRET,
});
