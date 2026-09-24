import { jwtVerify } from "jose";
import { cookies } from "next/headers";

function getSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("AUTH_SECRET is not configured.");
  return new TextEncoder().encode(secret);
}

export async function getCrmSession() {
  const token = (await cookies()).get("crm_session")?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload.sub === "crm_session" && payload.role === "crm_operator" ? payload : null;
  } catch {
    return null;
  }
}
