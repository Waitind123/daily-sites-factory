/**
 * 免费体验额度 — 各站点复制到 lib/trial.ts，修改 SITE_ID
 * 标准：非会员可免费体验 FREE_TRIAL_LIMIT 次，用尽后引导 /join 订阅
 */
import { cookies } from "next/headers";

export const FREE_TRIAL_LIMIT = 5;

export function getTrialCookieName(siteId: string) {
  return `${siteId}_trial_used`;
}

export async function getTrialUsed(siteId: string): Promise<number> {
  const jar = await cookies();
  const raw = jar.get(getTrialCookieName(siteId))?.value;
  const n = parseInt(raw ?? "0", 10);
  return Number.isFinite(n) ? Math.min(n, FREE_TRIAL_LIMIT) : 0;
}

export function trialCookieHeader(siteId: string, used: number): string {
  const maxAge = 365 * 24 * 60 * 60;
  return `${getTrialCookieName(siteId)}=${used}; Path=/; Max-Age=${maxAge}; SameSite=Lax; HttpOnly`;
}

export async function getTrialStatus(siteId: string, isMember: boolean) {
  const used = await getTrialUsed(siteId);
  const remaining = Math.max(0, FREE_TRIAL_LIMIT - used);
  return {
    limit: FREE_TRIAL_LIMIT,
    used,
    remaining,
    isMember,
    canUse: isMember || remaining > 0,
  };
}

/** 检查是否允许本次使用（不扣次数） */
export async function consumeTrial(siteId: string, isMember: boolean) {
  if (isMember) {
    return { ...(await getTrialStatus(siteId, true)), consumed: true as const };
  }
  const used = await getTrialUsed(siteId);
  if (used >= FREE_TRIAL_LIMIT) {
    return {
      ...(await getTrialStatus(siteId, false)),
      consumed: false as const,
    };
  }
  return {
    ...(await getTrialStatus(siteId, false)),
    consumed: true as const,
  };
}

/** 功能成功后调用，扣 1 次 */
export async function incrementTrial(siteId: string) {
  const used = await getTrialUsed(siteId);
  const next = Math.min(used + 1, FREE_TRIAL_LIMIT);
  return {
    used: next,
    remaining: Math.max(0, FREE_TRIAL_LIMIT - next),
    cookieHeader: trialCookieHeader(siteId, next),
  };
}
