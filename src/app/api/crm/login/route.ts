import { SignJWT } from "jose";
import { NextResponse } from "next/server";

function getSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("AUTH_SECRET is not configured.");
  return new TextEncoder().encode(secret);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const valid = body?.username === process.env.CRM_ADMIN_USERNAME && body?.password === process.env.CRM_ADMIN_PASSWORD;

  if (!valid) return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });

  const token = await new SignJWT({ role: "admin" }).setProtectedHeader({ alg: "HS256" }).setSubject("crm-admin").setIssuedAt().setExpirationTime("7d").sign(getSecret());
  const response = NextResponse.json({ ok: true });
  response.cookies.set("crm_session", token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 7 });
  return response;
}