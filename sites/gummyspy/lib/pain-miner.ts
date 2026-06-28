export type PainSignal = "wish" | "alternative" | "frustrated" | "would_pay";
export type PainPlatform = "reddit" | "hn" | "producthunt";

export type PainPoint = {
  id: string;
  quote: string;
  platform: PainPlatform;
  source: string;
  signal: PainSignal;
  intensity: number;
  opportunityScore: number;
  keywords: string[];
};

const PAIN_DATABASE: PainPoint[] = [
  {
    id: "p1",
    quote:
      "I wish there was a tool that scans HN + Reddit + Product Hunt for SaaS ideas without me reading 50 threads manually. GummySearch shutting down left a huge gap.",
    platform: "reddit",
    source: "r/SaaS",
    signal: "wish",
    intensity: 9,
    opportunityScore: 87,
    keywords: ["reddit", "hn", "producthunt", "saas", "gummysearch"],
  },
  {
    id: "p2",
    quote:
      "Looking for a GummySearch alternative under $20/mo that covers Reddit AND Hacker News. Syften is close but no opportunity scoring.",
    platform: "hn",
    source: "Ask HN",
    signal: "alternative",
    intensity: 10,
    opportunityScore: 92,
    keywords: ["gummysearch", "alternative", "hn", "reddit", "research"],
  },
  {
    id: "p3",
    quote:
      "Show HN: Built a pain point scanner across Reddit and PH — would love feedback. PainHunt charges too much for solo founders.",
    platform: "hn",
    source: "Show HN",
    signal: "would_pay",
    intensity: 8,
    opportunityScore: 78,
    keywords: ["pain", "scanner", "producthunt", "indie", "validation"],
  },
  {
    id: "p4",
    quote:
      "Frustrated with PainOnSocial — $49/mo just to scan 2 subreddits. Need multi-platform under $10/mo.",
    platform: "reddit",
    source: "r/indiehackers",
    signal: "frustrated",
    intensity: 9,
    opportunityScore: 85,
    keywords: ["painonsocial", "reddit", "pricing", "indie", "scanner"],
  },
  {
    id: "p5",
    quote:
      "Product Hunt launch got 200 upvotes but zero paying users. Wish I had validated on Reddit/HN pain threads first.",
    platform: "producthunt",
    source: "Product Hunt",
    signal: "wish",
    intensity: 8,
    opportunityScore: 74,
    keywords: ["validation", "producthunt", "launch", "reddit", "hn"],
  },
  {
    id: "p6",
    quote:
      "Would pay $15/mo for something that ranks pain points from HN comments and Reddit posts with a single opportunity score.",
    platform: "hn",
    source: "Ask HN",
    signal: "would_pay",
    intensity: 9,
    opportunityScore: 88,
    keywords: ["opportunity", "score", "hn", "reddit", "ranking"],
  },
  {
    id: "p7",
    quote:
      "Looking for alternative to BuildWhatTheyWant — good Reddit coverage but misses Hacker News and Product Hunt discussions entirely.",
    platform: "reddit",
    source: "r/SaaS",
    signal: "alternative",
    intensity: 8,
    opportunityScore: 81,
    keywords: ["buildwhattheywant", "hn", "producthunt", "alternative"],
  },
  {
    id: "p8",
    quote:
      "Frustrated with Mixpanel pricing — $500/mo for funnel analytics when I have 200 users. HN thread had same complaint.",
    platform: "reddit",
    source: "r/SaaS",
    signal: "frustrated",
    intensity: 8,
    opportunityScore: 76,
    keywords: ["analytics", "mixpanel", "funnel", "saas", "pricing"],
  },
  {
    id: "p9",
    quote:
      "Ask HN: How do you validate startup ideas post-GummySearch? Reddit API is unstable and PH comments are gold.",
    platform: "hn",
    source: "Ask HN",
    signal: "wish",
    intensity: 10,
    opportunityScore: 94,
    keywords: ["validate", "gummysearch", "reddit", "producthunt", "startup"],
  },
  {
    id: "p10",
    quote:
      "I hate that Canny costs $79/mo just for a public roadmap. Saw the same pain on Product Hunt maker discussions.",
    platform: "reddit",
    source: "r/indiehackers",
    signal: "frustrated",
    intensity: 9,
    opportunityScore: 83,
    keywords: ["canny", "roadmap", "feature", "voting", "indie"],
  },
  {
    id: "p11",
    quote:
      "Product Hunt: 'Looking for a tool that surfaces pain points across communities' — 340 upvotes, clear demand signal.",
    platform: "producthunt",
    source: "Product Hunt",
    signal: "would_pay",
    intensity: 9,
    opportunityScore: 86,
    keywords: ["pain", "communities", "producthunt", "saas", "research"],
  },
  {
    id: "p12",
    quote:
      "Would pay for cross-platform pain mining: Reddit + HN + PH in one search. PainSpotter is close but $29/mo.",
    platform: "reddit",
    source: "r/Entrepreneur",
    signal: "would_pay",
    intensity: 9,
    opportunityScore: 90,
    keywords: ["cross-platform", "pain", "hn", "producthunt", "mining"],
  },
  {
    id: "p13",
    quote:
      "Show HN: Indie hacker tool for finding validated SaaS ideas from social — need HN + Reddit, not just one platform.",
    platform: "hn",
    source: "Show HN",
    signal: "wish",
    intensity: 8,
    opportunityScore: 79,
    keywords: ["saas", "ideas", "validation", "hn", "reddit"],
  },
  {
    id: "p14",
    quote:
      "Looking for alternative to Syften for multi-platform keyword alerts with pain scoring, not just mention counts.",
    platform: "reddit",
    source: "r/SaaS",
    signal: "alternative",
    intensity: 8,
    opportunityScore: 77,
    keywords: ["syften", "alerts", "scoring", "reddit", "hn"],
  },
  {
    id: "p15",
    quote:
      "Frustrated scrolling Product Hunt comments manually for pain signals. There has to be a $10/mo aggregator.",
    platform: "producthunt",
    source: "Product Hunt",
    signal: "frustrated",
    intensity: 7,
    opportunityScore: 72,
    keywords: ["producthunt", "comments", "pain", "aggregator", "indie"],
  },
];

export type ScanResult = {
  keyword: string;
  points: PainPoint[];
  totalFound: number;
  platforms: Record<PainPlatform, number>;
  avgOpportunityScore: number;
  scannedAt: string;
};

export function scanPainPoints(keyword: string): ScanResult {
  const q = keyword.trim().toLowerCase();
  const terms = q.split(/\s+/).filter(Boolean);

  const scored = PAIN_DATABASE.map((point) => {
    const haystack = `${point.quote} ${point.keywords.join(" ")} ${point.source} ${point.platform}`.toLowerCase();
    let score = 0;
    for (const term of terms) {
      if (haystack.includes(term)) score += point.intensity;
      for (const kw of point.keywords) {
        if (kw.includes(term) || term.includes(kw)) score += 3;
      }
    }
    return { point, score };
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  const points = (scored.length > 0 ? scored : PAIN_DATABASE.map((p) => ({ point: p, score: p.intensity })))
    .slice(0, 8)
    .map((x) => x.point);

  const platforms: Record<PainPlatform, number> = { reddit: 0, hn: 0, producthunt: 0 };
  for (const p of points) platforms[p.platform]++;

  const avgOpportunityScore = Math.round(
    points.reduce((sum, p) => sum + p.opportunityScore, 0) / points.length
  );

  return {
    keyword: keyword.trim(),
    points,
    totalFound: scored.length || PAIN_DATABASE.length,
    platforms,
    avgOpportunityScore,
    scannedAt: new Date().toISOString(),
  };
}

/** @deprecated use scanPainPoints */
export function minePainPoints(keyword: string) {
  const result = scanPainPoints(keyword);
  return {
    keyword: result.keyword,
    points: result.points,
    totalFound: result.totalFound,
    minedAt: result.scannedAt,
  };
}

export function platformLabel(platform: PainPlatform, locale: "en" | "zh"): string {
  const labels = {
    en: { reddit: "Reddit", hn: "Hacker News", producthunt: "Product Hunt" },
    zh: { reddit: "Reddit", hn: "Hacker News", producthunt: "Product Hunt" },
  };
  return labels[locale][platform];
}

export function signalLabel(signal: PainSignal, locale: "en" | "zh"): string {
  const labels = {
    en: { wish: "I wish", alternative: "Alternative", frustrated: "Frustrated", would_pay: "Would pay" },
    zh: { wish: "我希望", alternative: "寻找替代", frustrated: "不满", would_pay: "愿意付费" },
  };
  return labels[locale][signal];
}
