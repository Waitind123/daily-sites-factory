/**
 * 免费体验 + 邀请奖励次数（全站同步源）
 */
import { cookies } from "next/headers";

export const FREE_TRIAL_LIMIT = 5;
export const REFERRAL_BONUS_TRIALS = 5;

export function getTrialCookieName(siteId: string) {
  return `${siteId}_trial_used`;
}

export function getTrialBonusCookieName(siteId: string) {
  return `${siteId}_trial_bonus`;
}

export function getInviteCookieName(siteId: string) {
  return `dsf_invite_${siteId}`;
}

export function getVisitorCookieName() {
  return "factory_vid";
}

export async function getTrialBonus(siteId: string): Promise<number> {
  const jar = await cookies();
  const raw = jar.get(getTrialBonusCookieName(siteId))?.value;
  const n = parseInt(raw ?? "0", 10);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export function trialBonusCookieHeader(siteId: string, bonus: number): string {
  const maxAge = 365 * 24 * 60 * 60;
  return `${getTrialBonusCookieName(siteId)}=${bonus}; Path=/; Max-Age=${maxAge}; SameSite=Lax; HttpOnly`;
}

export async function getEffectiveLimit(siteId: string): Promise<number> {
  return FREE_TRIAL_LIMIT + (await getTrialBonus(siteId));
}

export async function getTrialUsed(siteId: string): Promise<number> {
  const jar = await cookies();
  const raw = jar.get(getTrialCookieName(siteId))?.value;
  const n = parseInt(raw ?? "0", 10);
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

export function trialCookieHeader(siteId: string, used: number): string {
  const maxAge = 365 * 24 * 60 * 60;
  return `${getTrialCookieName(siteId)}=${used}; Path=/; Max-Age=${maxAge}; SameSite=Lax; HttpOnly`;
}

export async function getTrialStatus(siteId: string, isMember: boolean) {
  const used = await getTrialUsed(siteId);
  const bonus = await getTrialBonus(siteId);
  const effectiveLimit = FREE_TRIAL_LIMIT + bonus;
  const remaining = Math.max(0, effectiveLimit - used);
  return {
    limit: FREE_TRIAL_LIMIT,
    bonus,
    effectiveLimit,
    used,
    remaining,
    isMember,
    canUse: isMember || remaining > 0,
    referralReward: REFERRAL_BONUS_TRIALS,
  };
}

export async function consumeTrial(siteId: string, isMember: boolean) {
  if (isMember) {
    return { ...(await getTrialStatus(siteId, true)), consumed: true as const };
  }
  const used = await getTrialUsed(siteId);
  const effectiveLimit = await getEffectiveLimit(siteId);
  if (used >= effectiveLimit) {
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

export async function incrementTrial(siteId: string) {
  const used = await getTrialUsed(siteId);
  const wasFirst = used === 0;
  const effectiveLimit = await getEffectiveLimit(siteId);
  const next = used + 1;
  return {
    used: next,
    remaining: Math.max(0, effectiveLimit - next),
    cookieHeader: trialCookieHeader(siteId, next),
    wasFirstTrial: wasFirst,
  };
}
