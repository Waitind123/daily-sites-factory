import { cookies } from "next/headers";

const MEMBER_COOKIE = "uptime_pulse_member";

export async function isMember(): Promise<boolean> {
  const jar = await cookies();
  return jar.get(MEMBER_COOKIE)?.value === "1";
}

export function memberCookieHeader(): string {
  const maxAge = 365 * 24 * 60 * 60;
  return `${MEMBER_COOKIE}=1; Path=/; Max-Age=${maxAge}; SameSite=Lax; HttpOnly`;
}
