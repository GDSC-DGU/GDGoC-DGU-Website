import { NextResponse } from "next/server";

import { getStudyList } from "@/src/lib/notion/study.service";

/**
 * [API] GET /api/studys
 * Notion에서 스터디 데이터를 조회하여 클라이언트에 JSON 형태로 응답하는 API 핸들러입니다.
 * @author 정선
 */

export async function GET() {
  try {
    const study = await getStudyList();
    return NextResponse.json(study);
  } catch (error) {
    console.error("Error fetching members:", error);
    return NextResponse.json({ message: "Failed to fetch members" }, { status: 500 });
  }
}
