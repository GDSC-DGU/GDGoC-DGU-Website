import { NextResponse } from "next/server";

import { getProjectList } from "@/src/lib/notion/project.service";

export async function GET() {
  try {
    const project = await getProjectList();
    return NextResponse.json(project);
  } catch (error) {
    console.error("Error fetching members:", error);
    return NextResponse.json({ message: "Failed to fetch members" }, { status: 500 });
  }
}
