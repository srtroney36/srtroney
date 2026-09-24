import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCrmSession } from "@/lib/crm-auth";

export async function PATCH(request: Request) {
  if (!(await getCrmSession())) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  const body = await request.json().catch(() => null);
  const validStatuses = ["new", "reviewing", "replied", "archived"];
  if (typeof body?.id !== "string" || !validStatuses.includes(body.status)) return NextResponse.json({ error: "Invalid contact update." }, { status: 400 });
  const contact = await prisma.contactSubmission.update({ where: { id: body.id }, data: { status: body.status } });
  return NextResponse.json({ contact });
}

export async function DELETE(request: Request) {
  if (!(await getCrmSession())) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  const body = await request.json().catch(() => null);
  if (typeof body?.id !== "string") return NextResponse.json({ error: "Invalid contact ID." }, { status: 400 });
  await prisma.contactSubmission.delete({ where: { id: body.id } });
  return NextResponse.json({ ok: true });
}
