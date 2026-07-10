import { createHash } from "crypto";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

export const REFERRAL_BONUS_TRIALS = 5;
const REFERRALS_PATH = "analytics/referrals.json";

export interface ReferralUserRecord {
  code: string;
  bonusTrials: number;
  referralsCompleted: number;
  createdAt: string;
}

export interface ReferralsFile {
  version: number;
  updatedAt: string | null;
  users: Record<string, Record<string, ReferralUserRecord>>;
  codes: Record<string, { siteId: string; visitorId: string }>;
  completedReferees: Record<string, true>;
}

const REPO = process.env.GITHUB_REPO || "Waitind123/daily-sites-factory";
const TOKEN =
  process.env.ANALYTICS_GITHUB_PAT ||
  process.env.GITHUB_TOKEN ||
  process.env.GH_TOKEN;

function repoRoot() {
  return join(process.cwd(), "..", "..");
}

function emptyReferrals(): ReferralsFile {
  return { version: 1, updatedAt: null, users: {}, codes: {}, completedReferees: {} };
}

function makeCode(visitorId: string, siteId: string) {
  return createHash("sha256")
    .update(`${siteId}:${visitorId}`)
    .digest("base64url")
    .slice(0, 8)
    .toUpperCase();
}

function readLocal(): ReferralsFile {
  const path = join(repoRoot(), REFERRALS_PATH);
  if (!existsSync(path)) return emptyReferrals();
  return JSON.parse(readFileSync(path, "utf8")) as ReferralsFile;
}

function writeLocal(data: ReferralsFile) {
  const path = join(repoRoot(), REFERRALS_PATH);
  const dir = join(repoRoot(), "analytics");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
}

async function githubGet(path: string) {
  if (!TOKEN) return null;
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "intercom-pulse-referrals",
    },
    signal: AbortSignal.timeout(15000),
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub GET ${path}: ${res.status}`);
  const data = await res.json();
  return { sha: data.sha, content: Buffer.from(data.content, "base64").toString("utf8") };
}

async function githubPut(path: string, content: string, sha?: string) {
  if (!TOKEN) throw new Error("GITHUB_TOKEN not configured");
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "User-Agent": "intercom-pulse-referrals",
    },
    body: JSON.stringify({
      message: `analytics: ${path} via intercom-pulse referral`,
      content: Buffer.from(content, "utf8").toString("base64"),
      sha,
    }),
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`GitHub PUT: ${res.status}`);
}

export async function loadReferrals(): Promise<ReferralsFile> {
  try {
    const remote = await githubGet(REFERRALS_PATH);
    if (remote) return JSON.parse(remote.content) as ReferralsFile;
  } catch {
    /* fallback local */
  }
  return readLocal();
}

async function saveReferrals(data: ReferralsFile) {
  data.updatedAt = new Date().toISOString();
  const content = JSON.stringify(data, null, 2) + "\n";
  if (!TOKEN) {
    writeLocal(data);
    return;
  }
  const existing = await githubGet(REFERRALS_PATH);
  await githubPut(REFERRALS_PATH, content, existing?.sha);
  writeLocal(data);
}

function ensureUser(data: ReferralsFile, siteId: string, visitorId: string) {
  if (!data.users[siteId]) data.users[siteId] = {};
  let user = data.users[siteId][visitorId];
  if (!user) {
    const code = makeCode(visitorId, siteId);
    user = {
      code,
      bonusTrials: 0,
      referralsCompleted: 0,
      createdAt: new Date().toISOString(),
    };
    data.users[siteId][visitorId] = user;
    data.codes[code] = { siteId, visitorId };
  }
  return user;
}

export async function getReferralStatus(siteId: string, visitorId: string, origin?: string) {
  const data = await loadReferrals();
  const user = ensureUser(data, siteId, visitorId);
  await saveReferrals(data);

  const base = (origin || `https://${siteId}.vercel.app`).replace(/\/$/, "");
  const inviteUrl = `${base}/?ref=${user.code}`;

  return {
    code: user.code,
    inviteUrl,
    bonusTrials: user.bonusTrials,
    referralsCompleted: user.referralsCompleted,
    rewardPerReferral: REFERRAL_BONUS_TRIALS,
  };
}

export async function completeReferralTrial(
  siteId: string,
  inviteCode: string,
  refereeVisitorId: string
) {
  const code = String(inviteCode || "")
    .trim()
    .toUpperCase();
  if (!code || !siteId || !refereeVisitorId) {
    return { ok: false as const, reason: "invalid_payload" };
  }

  const data = await loadReferrals();
  const mapping = data.codes[code];
  if (!mapping || mapping.siteId !== siteId) {
    return { ok: false as const, reason: "invalid_code" };
  }

  if (mapping.visitorId === refereeVisitorId) {
    return { ok: false as const, reason: "self_referral" };
  }

  const refereeKey = `${siteId}:${refereeVisitorId}`;
  if (data.completedReferees[refereeKey]) {
    return { ok: false as const, reason: "already_credited" };
  }

  const referrer = data.users[siteId]?.[mapping.visitorId];
  if (!referrer) {
    return { ok: false as const, reason: "referrer_not_found" };
  }

  data.completedReferees[refereeKey] = true;
  referrer.bonusTrials += REFERRAL_BONUS_TRIALS;
  referrer.referralsCompleted += 1;
  await saveReferrals(data);

  return {
    ok: true as const,
    referrerBonus: referrer.bonusTrials,
    reward: REFERRAL_BONUS_TRIALS,
  };
}
