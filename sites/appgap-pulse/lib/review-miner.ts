export type ReviewSignal =
  | "missing_feature"
  | "broken"
  | "overpriced"
  | "competitor_gap"
  | "opportunity";

export type ReviewPoint = {
  id: string;
  quote: string;
  source: string;
  app: string;
  rating: number;
  signal: ReviewSignal;
  intensity: number;
  keywords: string[];
};

const REVIEW_DATABASE: ReviewPoint[] = [
  {
    id: "r1",
    quote:
      "Crashes every time I try to export a PDF. Been waiting 6 months for a fix. Would switch instantly if something reliable existed.",
    source: "App Store · 1★",
    app: "Invoice Maker Pro",
    rating: 1,
    signal: "broken",
    intensity: 10,
    keywords: ["invoice", "pdf", "export", "freelance", "billing"],
  },
  {
    id: "r2",
    quote:
      "No offline mode at all. I travel constantly and this app is useless without WiFi. Desperate for an alternative.",
    source: "App Store · 1★",
    app: "TaskFlow",
    rating: 1,
    signal: "missing_feature",
    intensity: 9,
    keywords: ["offline", "travel", "task", "productivity", "nomad"],
  },
  {
    id: "r3",
    quote:
      "$14.99/mo for basic habit tracking? Streaks does more for $4.99. Looking for something simpler and cheaper.",
    source: "App Store · 1★",
    app: "HabitStack",
    rating: 1,
    signal: "overpriced",
    intensity: 8,
    keywords: ["habit", "tracking", "subscription", "streaks", "wellness"],
  },
  {
    id: "r4",
    quote:
      "Why is there no way to share my workout plan with my coach? Every fitness app locks you in. Huge gap in the market.",
    source: "App Store · 1★",
    app: "FitLog",
    rating: 1,
    signal: "opportunity",
    intensity: 9,
    keywords: ["fitness", "coach", "sharing", "workout", "health"],
  },
  {
    id: "r5",
    quote:
      "Customer support takes 2 weeks to reply. For a $29/mo business tool this is unacceptable. Need a lightweight CRM that actually responds.",
    source: "App Store · 1★",
    app: "ClientDesk",
    rating: 1,
    signal: "competitor_gap",
    intensity: 9,
    keywords: ["crm", "support", "freelance", "client", "business"],
  },
  {
    id: "r6",
    quote:
      "Can't import my Notion database. Migration is a nightmare. Would pay for a tool that syncs Notion → spreadsheet without breaking.",
    source: "App Store · 1★",
    app: "DataBridge",
    rating: 1,
    signal: "missing_feature",
    intensity: 8,
    keywords: ["notion", "import", "migration", "spreadsheet", "data"],
  },
  {
    id: "r7",
    quote:
      "Ads everywhere even on the paid plan. Deleted immediately. Indie devs need a clean note app without upsells.",
    source: "App Store · 1★",
    app: "QuickNotes+",
    rating: 1,
    signal: "competitor_gap",
    intensity: 8,
    keywords: ["notes", "ads", "clean", "indie", "writing"],
  },
  {
    id: "r8",
    quote:
      "No dark mode in 2026. My eyes hurt after 10 minutes. How is this still missing from a reading app?",
    source: "App Store · 1★",
    app: "ReadLater",
    rating: 1,
    signal: "missing_feature",
    intensity: 7,
    keywords: ["reading", "dark mode", "accessibility", "books", "ui"],
  },
  {
    id: "r9",
    quote:
      "Subscription jumped from $4.99 to $12.99 overnight with zero new features. Classic bait and switch.",
    source: "App Store · 1★",
    app: "ScanPDF",
    rating: 1,
    signal: "overpriced",
    intensity: 10,
    keywords: ["pdf", "scanner", "pricing", "subscription", "document"],
  },
  {
    id: "r10",
    quote:
      "Wish there was an app that clusters 1-star reviews into actionable product ideas. Manual App Store research takes forever.",
    source: "App Store · 1★",
    app: "MarketScout",
    rating: 1,
    signal: "opportunity",
    intensity: 10,
    keywords: ["app store", "research", "reviews", "startup", "ideas"],
  },
  {
    id: "r11",
    quote:
      "Timer doesn't work in background on iOS 18. Useless for Pomodoro. Every competitor has the same bug — room for a new player.",
    source: "App Store · 1★",
    app: "FocusTimer",
    rating: 1,
    signal: "broken",
    intensity: 8,
    keywords: ["pomodoro", "timer", "focus", "ios", "productivity"],
  },
  {
    id: "r12",
    quote:
      "No Stripe integration for invoicing. I have to copy-paste amounts manually. Freelancers deserve better.",
    source: "App Store · 1★",
    app: "BillEasy",
    rating: 1,
    signal: "missing_feature",
    intensity: 9,
    keywords: ["stripe", "invoice", "freelance", "payment", "billing"],
  },
  {
    id: "r13",
    quote:
      "Deleted all my data after an update. No backup, no export. Never trusting this category again unless someone builds local-first.",
    source: "App Store · 1★",
    app: "BudgetPal",
    rating: 1,
    signal: "broken",
    intensity: 10,
    keywords: ["budget", "backup", "local", "finance", "data loss"],
  },
  {
    id: "r14",
    quote:
      "Can't customize the booking page. Calendly clone but uglier and twice the price. Need a $10/mo alternative.",
    source: "App Store · 1★",
    app: "BookMe",
    rating: 1,
    signal: "competitor_gap",
    intensity: 9,
    keywords: ["booking", "calendly", "scheduling", "freelance", "calendar"],
  },
  {
    id: "r15",
    quote:
      "No API, no webhooks, no integrations. It's 2026 and this project tool is still a walled garden.",
    source: "App Store · 1★",
    app: "TeamBoard",
    rating: 1,
    signal: "missing_feature",
    intensity: 8,
    keywords: ["api", "integration", "project", "team", "developer"],
  },
];

export type ScanResult = {
  keyword: string;
  points: ReviewPoint[];
  totalFound: number;
  clusters: number;
  scannedAt: string;
};

export function scanAppReviews(keyword: string): ScanResult {
  const q = keyword.trim().toLowerCase();
  const terms = q.split(/\s+/).filter(Boolean);

  const scored = REVIEW_DATABASE.map((point) => {
    const haystack =
      `${point.quote} ${point.keywords.join(" ")} ${point.app} ${point.source}`.toLowerCase();
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

  const points = (
    scored.length > 0 ? scored : REVIEW_DATABASE.map((p) => ({ point: p, score: p.intensity }))
  )
    .slice(0, 8)
    .map((x) => x.point);

  const signals = new Set(points.map((p) => p.signal));

  return {
    keyword: keyword.trim(),
    points,
    totalFound: scored.length || REVIEW_DATABASE.length,
    clusters: signals.size,
    scannedAt: new Date().toISOString(),
  };
}

export function signalLabel(signal: ReviewSignal, locale: "en" | "zh"): string {
  const labels = {
    en: {
      missing_feature: "Missing feature",
      broken: "Broken",
      overpriced: "Overpriced",
      competitor_gap: "Competitor gap",
      opportunity: "Market gap",
    },
    zh: {
      missing_feature: "功能缺失",
      broken: "严重故障",
      overpriced: "定价过高",
      competitor_gap: "竞品空白",
      opportunity: "市场机会",
    },
  };
  return labels[locale][signal];
}
