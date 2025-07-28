import { NextResponse } from "next/server";

import { getMainEventList } from "@/src/lib/notion/mainEvent.service";

/**
 * [API] GET /api/mainEvents
 * Notion에서 메인 이벤트 데이터를 조회하여 클라이언트에 JSON 형태로 응답하는 API 핸들러입니다.
 * @author 동현
 */

export async function GET() {
  try {
    const mainEvents = await getMainEventList();
    return NextResponse.json(mainEvents);
  } catch (error) {
    console.error("Error fetching main events:", error);
    return NextResponse.json({ message: "Failed to fetch main events" }, { status: 500 });
  }
}
