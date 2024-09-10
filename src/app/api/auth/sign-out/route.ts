import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { revokeAllSessions } from "@/lib/firebase/firebase-admin";
import { APIResponse } from "@/types";

export async function GET() {
  const sessionCookie = cookies().get("__session")?.value;

  if (!sessionCookie)
    return NextResponse.json<APIResponse<string>>({ success: false, error: "Session not found." }, { status: 400 });

  cookies().delete("__session");

  await revokeAllSessions(sessionCookie);

  return NextResponse.json<APIResponse<string>>({ success: true, data: "Signed out successfully." });
}