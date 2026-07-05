"use client";

const VID_KEY = "factory_vid";
const REF_KEY = "dsf_invite_";

export function getVisitorId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem(VID_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(VID_KEY, id);
  }
  document.cookie = `${VID_KEY}=${id}; path=/; max-age=31536000; samesite=lax`;
  return id;
}

export function captureInviteFromUrl(siteId: string) {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const code = params.get("ref") || params.get("invite");
  if (!code) return;
  localStorage.setItem(`${REF_KEY}${siteId}`, code);
  fetch(`/api/referral/capture?code=${encodeURIComponent(code)}`, { keepalive: true }).catch(
    () => {}
  );
}

export function referralHubUrl() {
  return (
    process.env.NEXT_PUBLIC_FACTORY_ANALYTICS_URL || "https://intercom-pulse.vercel.app"
  ).replace(/\/$/, "");
}

export async function fetchReferralStatus(siteId: string) {
  const visitorId = getVisitorId();
  const res = await fetch(
    `${referralHubUrl()}/api/referral?siteId=${encodeURIComponent(siteId)}&visitorId=${encodeURIComponent(visitorId)}&origin=${encodeURIComponent(window.location.origin)}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("referral_status_failed");
  return res.json() as Promise<{
    code: string;
    inviteUrl: string;
    bonusTrials: number;
    referralsCompleted: number;
    rewardPerReferral: number;
  }>;
}

export async function refreshTrialWithBonus(siteId: string) {
  const visitorId = getVisitorId();
  const res = await fetch(`/api/trial?visitorId=${encodeURIComponent(visitorId)}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("trial_refresh_failed");
  return res.json();
}
