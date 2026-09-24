import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.name !== "string" || typeof body.email !== "string" || typeof body.message !== "string") {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const name = body.name.trim();
  const email = body.email.trim().toLowerCase();
  const message = body.message.trim();

  if (!name || !email || !message || !email.includes("@")) {
    return NextResponse.json({ error: "Please provide valid contact details." }, { status: 400 });
  }

  await prisma.contactSubmission.create({ data: { name, email, message } });
  return NextResponse.json({ ok: true }, { status: 201 });
}