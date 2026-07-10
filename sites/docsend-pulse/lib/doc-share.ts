import { createHash, randomBytes } from "crypto";

export type PageView = {
  page: number;
  views: number;
  avgTimeSec: number;
  completionPct: number;
};

export type ViewerSession = {
  viewer: string;
  location: string;
  device: string;
  viewedAt: string;
  pagesViewed: number;
  totalTimeSec: number;
};

export type DocShare = {
  id: string;
  title: string;
  pageCount: number;
  recipientEmail?: string;
  trackingUrl: string;
  totalViews: number;
  uniqueViewers: number;
  avgTimeSec: number;
  downloadAttempts: number;
  pageViews: PageView[];
  sessions: ViewerSession[];
  createdAt: string;
};

const shares = new Map<string, DocShare>();

function hashSeed(input: string): number {
  const hex = createHash("sha256").update(input).digest("hex").slice(0, 8);
  return parseInt(hex, 16);
}

function pick<T>(arr: T[], seed: number, offset: number): T {
  return arr[(seed + offset) % arr.length];
}

const viewerNames = {
  en: ["Alex M.", "Sarah K.", "James L.", "Priya S.", "Marcus T.", "Jenny R."],
  zh: ["张明", "李雪", "王磊", "陈芳", "刘洋", "赵婷"],
};

const locations = {
  en: ["San Francisco, US", "London, UK", "Berlin, DE", "Toronto, CA", "Singapore", "Sydney, AU"],
  zh: ["上海", "北京", "深圳", "杭州", "成都", "广州"],
};

const devices = {
  en: ["Desktop · Chrome", "Mobile · Safari", "Desktop · Firefox", "Tablet · Safari"],
  zh: ["桌面 · Chrome", "手机 · Safari", "桌面 · Firefox", "平板 · Safari"],
};

export function createDocShare(
  title: string,
  pageCount: number,
  recipientEmail: string | undefined,
  locale: "en" | "zh" = "en"
): DocShare {
  const seed = hashSeed(`${title}:${pageCount}:${Date.now()}`);
  const id = randomBytes(8).toString("hex");
  const slug = createHash("sha256").update(id).digest("hex").slice(0, 12);
  const trackingUrl = `https://docsend-pulse.vercel.app/v/${slug}`;

  const pages = Math.max(1, Math.min(50, pageCount));
  const pageViews: PageView[] = Array.from({ length: pages }, (_, i) => {
    const pageNum = i + 1;
    const baseViews = Math.max(1, 12 - i * 2 + (seed % 5));
    const avgTime = Math.max(8, 45 - i * 4 + (seed % 15));
    const completion = Math.max(15, 95 - i * 12 + (seed % 8));
    return {
      page: pageNum,
      views: baseViews,
      avgTimeSec: avgTime,
      completionPct: completion,
    };
  });

  const sessionCount = 2 + (seed % 4);
  const sessions: ViewerSession[] = Array.from({ length: sessionCount }, (_, i) => ({
    viewer: pick(viewerNames[locale], seed, i),
    location: pick(locations[locale], seed, i + 3),
    device: pick(devices[locale], seed, i + 7),
    viewedAt: new Date(Date.now() - (i + 1) * 3600000 * (1 + (seed % 3))).toISOString(),
    pagesViewed: Math.max(1, pages - i),
    totalTimeSec: 30 + (seed % 120) + i * 15,
  }));

  const share: DocShare = {
    id,
    title: title.trim(),
    pageCount: pages,
    recipientEmail: recipientEmail?.trim() || undefined,
    trackingUrl,
    totalViews: pageViews.reduce((sum, p) => sum + p.views, 0),
    uniqueViewers: sessionCount,
    avgTimeSec: Math.round(sessions.reduce((s, v) => s + v.totalTimeSec, 0) / sessionCount),
    downloadAttempts: 1 + (seed % 3),
    pageViews,
    sessions,
    createdAt: new Date().toISOString(),
  };

  shares.set(id, share);
  return share;
}

export function getShare(id: string): DocShare | undefined {
  return shares.get(id);
}

export function listShares(): DocShare[] {
  return [...shares.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}
