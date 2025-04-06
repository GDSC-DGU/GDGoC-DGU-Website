import { NextResponse } from "next/server";

import { getMemberList } from "@/src/lib/notion/member.service";

/**
 * [API] GET /api/members
 * Notion에서 멤버 데이터를 조회하여 클라이언트에 JSON 형태로 응답하는 API 핸들러입니다.
 * @author 정선
 */

export async function GET() {
  try {
    const members = await getMemberList();
    return NextResponse.json(members);
  } catch (error) {
    console.error("Error fetching members:", error);
    return NextResponse.json({ message: "Failed to fetch members" }, { status: 500 });
  }
}
