import { notion } from "@/src/lib/notion/notion.client";

/**
 * 관계형 Notion 페이지에서 원하는 필드의 title 값을 가져오는 함수입니다.
 * Notion의 relation 타입 속성에서 연결된 페이지 ID를 통해 해당 페이지의 Name 값을 추출합니다.
 * 하나의 pageId 혹은 pageId 배열을 받아 각각의 이름 리스트로 반환합니다.
 * - study의 Leader, Participate, project의 Leader, Members 필드 등 Member를 참조하는 관계형 필드에서 사용됩니다.
 * @author 정선
 */

// 오버로드 선언
export async function getRelationTitle(pageId: string): Promise<string>;
export async function getRelationTitle(pageIds: string[]): Promise<string[]>;

export async function getRelationTitle(pageIdOrIds: string | string[]): Promise<string | string[]> {
  if (typeof pageIdOrIds === "string") {
    try {
      const page = await notion.pages.retrieve({ page_id: pageIdOrIds });
      const nameProp = (page as any).properties?.Name;
      return nameProp?.title?.[0]?.plain_text ?? "";
    } catch (error) {
      console.error(`Failed to fetch title for page ${pageIdOrIds}:`, error);
      return "이름 불러오기 실패";
    }
  } else {
    const results = await Promise.all(pageIdOrIds.map((id) => getRelationTitle(id)));
    return results;
  }
}
