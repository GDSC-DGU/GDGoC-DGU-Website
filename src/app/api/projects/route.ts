import { NextResponse } from "next/server";

import { getProjectList } from "@/src/lib/notion/project.service";

/**
 * [API] GET /api/projects
 * Notion에서 프로젝트 데이터를 조회하여 클라이언트에 JSON 형태로 응답하는 API 핸들러입니다.
 * @author 정선
 */

export async function GET() {
  try {
    const project = await getProjectList();
    return NextResponse.json(project);
  } catch (error) {
    console.error("Error fetching members:", error);
    return NextResponse.json({ message: "Failed to fetch members" }, { status: 500 });
  }
}
