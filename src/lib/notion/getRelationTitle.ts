/**
 * 관계형 Notion 페이지에서 원하는 필드의 title 값을 가져오는 함수
 * @author 정선
 */
import { notion } from "@/src/lib/notion/notion.client";

// 오버로드 선언
export async function getRelationTitle(pageId: string): Promise<string>;
export async function getRelationTitle(pageIds: string[]): Promise<string[]>;

export async function getRelationTitle(pageIdOrIds: string | string[]): Promise<string | string[]> {
  if (typeof pageIdOrIds === "string") {
    // 단일 ID 처리
    try {
      const page = await notion.pages.retrieve({ page_id: pageIdOrIds });
      const nameProp = (page as any).properties?.Name;
      return nameProp?.title?.[0]?.plain_text ?? "이름 없음";
    } catch (error) {
      console.error(`🔴 Failed to fetch title for page ${pageIdOrIds}:`, error);
      return "이름 불러오기 실패";
    }
  } else {
    // 배열 처리: 각 ID에 대해 재귀 호출
    const results = await Promise.all(pageIdOrIds.map((id) => getRelationTitle(id)));
    return results;
  }
}
