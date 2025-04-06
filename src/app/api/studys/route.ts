import { NextResponse } from "next/server";

import { getStudyList } from "@/src/lib/notion/study.service";

export async function GET() {
  try {
    const study = await getStudyList();
    return NextResponse.json(study);
  } catch (error) {
    console.error("Error fetching members:", error);
    return NextResponse.json({ message: "Failed to fetch members" }, { status: 500 });
  }
}
