import { NextResponse } from "next/server";

import { getSeminarList } from "@/src/lib/notion/seminar.service";

export async function GET() {
  try {
    const seminars = await getSeminarList();
    return NextResponse.json(seminars);
  } catch (error) {
    console.error("Error fetching members:", error);
    return NextResponse.json({ message: "Failed to fetch members" }, { status: 500 });
  }
}
