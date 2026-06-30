import { randomBytes } from "crypto";
import { simulateRank } from "./rank-engine";
import { simulateAiOverview, type AiOverviewStatus } from "./ai-overview-engine";

export type RankSnapshot = {
  position: number;
  checkedAt: string;
  aiOverview: AiOverviewStatus;
};

export type TrackedKeyword = {
  id: string;
  keyword: string;
  domain: string;
  position: number;
  previousPosition: number | null;
  aiOverview: AiOverviewStatus;
  lastChecked: string;
  createdAt: string;
  history: RankSnapshot[];
};

const keywords = new Map<string, TrackedKeyword>();

function randomId(): string {
  return randomBytes(6).toString("hex");
}

function normalizeDomain(domain: string): string {
  return domain
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/.*$/, "");
}

export function createKeyword(keyword: string, domain: string): TrackedKeyword {
  const normalized = normalizeDomain(domain);
  const position = simulateRank(keyword, normalized);
  const aiOverview = simulateAiOverview(keyword, normalized);
  const now = new Date().toISOString();
  const entry: TrackedKeyword = {
    id: randomId(),
    keyword: keyword.trim().toLowerCase(),
    domain: normalized,
    position,
    previousPosition: null,
    aiOverview,
    lastChecked: now,
    createdAt: now,
    history: [{ position, checkedAt: now, aiOverview }],
  };
  keywords.set(entry.id, entry);
  return entry;
}

export function listKeywords(): TrackedKeyword[] {
  return [...keywords.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getKeywordById(id: string): TrackedKeyword | undefined {
  return keywords.get(id);
}

export function checkKeywordRank(id: string): TrackedKeyword | null {
  const entry = keywords.get(id);
  if (!entry) return null;

  const newPosition = simulateRank(entry.keyword, entry.domain, entry.position);
  const newAiOverview = simulateAiOverview(entry.keyword, entry.domain, entry.aiOverview);
  const now = new Date().toISOString();

  entry.previousPosition = entry.position;
  entry.position = newPosition;
  entry.aiOverview = newAiOverview;
  entry.lastChecked = now;
  entry.history.unshift({ position: newPosition, checkedAt: now, aiOverview: newAiOverview });
  if (entry.history.length > 30) entry.history = entry.history.slice(0, 30);

  keywords.set(id, entry);
  return entry;
}

export function getKeywordStats(id: string) {
  const entry = keywords.get(id);
  if (!entry) return null;

  const change =
    entry.previousPosition !== null ? entry.previousPosition - entry.position : 0;
  const best = Math.min(...entry.history.map((h) => h.position));
  const last7 = entry.history.filter(
    (h) => Date.now() - new Date(h.checkedAt).getTime() < 7 * 24 * 60 * 60 * 1000
  );

  return {
    id: entry.id,
    keyword: entry.keyword,
    domain: entry.domain,
    position: entry.position,
    previousPosition: entry.previousPosition,
    change,
    bestPosition: best,
    lastChecked: entry.lastChecked,
    checksLast7Days: last7.length,
    history: entry.history.slice(0, 14),
    aiOverview: entry.aiOverview,
  };
}
