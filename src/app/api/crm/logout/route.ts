import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const accept = request.headers.get("accept") || "";
  const wantsJson = accept.includes("application/json") && !accept.includes("text/html");

  const response = wantsJson
    ? NextResponse.json({ ok: true })
    : NextResponse.redirect(new URL("/crm/login", request.url), 303);

  response.cookies.set("crm_session", "", {
    httpOnly: true,
    expires: new Date(0),
    sameSite: "lax",
    path: "/",
  });

  return response;
}
