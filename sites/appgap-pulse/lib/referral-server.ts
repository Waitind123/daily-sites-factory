/**
 * 服务端邀请奖励 — 好友首次试用成功后上报
 */
import { cookies } from "next/headers";
import { getInviteCookieName, getVisitorCookieName } from "./trial-core";

function hubUrl() {
  return (
    process.env.NEXT_PUBLIC_FACTORY_ANALYTICS_URL ||
    process.env.FACTORY_ANALYTICS_URL ||
    "https://intercom-pulse.vercel.app"
  ).replace(/\/$/, "");
}

export async function reportReferralTrialComplete(siteId: string) {
  const jar = await cookies();
  const inviteCode = jar.get(getInviteCookieName(siteId))?.value;
  const refereeVisitorId = jar.get(getVisitorCookieName())?.value;
  if (!inviteCode || !refereeVisitorId) return { ok: false as const, reason: "no_invite" };

  try {
    const res = await fetch(`${hubUrl()}/api/referral/complete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ siteId, inviteCode, refereeVisitorId }),
      signal: AbortSignal.timeout(12000),
    });
    const data = (await res.json().catch(() => ({}))) as { ok?: boolean; reason?: string };
    return { ok: Boolean(res.ok && data.ok), reason: data.reason };
  } catch {
    return { ok: false as const, reason: "network" };
  }
}

export async function syncReferralBonusFromHub(siteId: string, visitorId: string) {
  if (!visitorId) return null;
  try {
    const res = await fetch(
      `${hubUrl()}/api/referral?siteId=${encodeURIComponent(siteId)}&visitorId=${encodeURIComponent(visitorId)}`,
      { signal: AbortSignal.timeout(12000), cache: "no-store" }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { bonusTrials?: number };
    return typeof data.bonusTrials === "number" ? data.bonusTrials : 0;
  } catch {
    return null;
  }
}
