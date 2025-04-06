import { NextResponse } from "next/server";

import { getMemberList } from "@/src/lib/notion/member.service";

export async function GET() {
  try {
    const members = await getMemberList();
    return NextResponse.json(members);
  } catch (error) {
    console.error("Error fetching members:", error);
    return NextResponse.json({ message: "Failed to fetch members" }, { status: 500 });
  }
}
