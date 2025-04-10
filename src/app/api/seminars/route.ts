import { NextResponse } from "next/server";

import { getSeminarList } from "@/src/lib/notion/seminar.service";

/**
 * [API] GET /api/seminar
 * Notion에서 세미나 데이터를 조회하여 클라이언트에 JSON 형태로 응답하는 API 핸들러입니다.
 * @author 정선
 */

export async function GET() {
  try {
    const seminars = await getSeminarList();
    return NextResponse.json(seminars);
  } catch (error) {
    console.error("Error fetching members:", error);
    return NextResponse.json({ message: "Failed to fetch members" }, { status: 500 });
  }
}
