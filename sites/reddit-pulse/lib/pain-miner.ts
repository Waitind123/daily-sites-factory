export type PainSignal = "wish" | "alternative" | "frustrated" | "would_pay";

export type PainPoint = {
  id: string;
  quote: string;
  subreddit: string;
  signal: PainSignal;
  intensity: number;
  keywords: string[];
};

const PAIN_DATABASE: PainPoint[] = [
  {
    id: "p1",
    quote:
      "I wish there was a tool that mines Reddit for SaaS ideas without me reading 50 threads manually. GummySearch shutting down left a huge gap.",
    subreddit: "r/SaaS",
    signal: "wish",
    intensity: 9,
    keywords: ["reddit", "saas", "ideas", "gummysearch", "research"],
  },
  {
    id: "p2",
    quote:
      "Looking for a GummySearch alternative under $20/mo. I just need to find 'I wish' posts in r/Entrepreneur and r/startups.",
    subreddit: "r/Entrepreneur",
    signal: "alternative",
    intensity: 10,
    keywords: ["gummysearch", "alternative", "reddit", "entrepreneur", "research"],
  },
  {
    id: "p3",
    quote:
      "Frustrated with Mixpanel pricing — $500/mo for funnel analytics when I have 200 users. Would pay for something simpler.",
    subreddit: "r/SaaS",
    signal: "would_pay",
    intensity: 8,
    keywords: ["analytics", "mixpanel", "funnel", "saas", "pricing"],
  },
  {
    id: "p4",
    quote:
      "I hate that Canny costs $79/mo just for a public roadmap and feature voting. There has to be a $10 alternative.",
    subreddit: "r/indiehackers",
    signal: "frustrated",
    intensity: 9,
    keywords: ["canny", "roadmap", "feature", "voting", "indie"],
  },
  {
    id: "p5",
    quote:
      "Is there a tool that alerts me when someone posts 'looking for alternative to Notion' on Reddit? I'd pay monthly for that.",
    subreddit: "r/productivity",
    signal: "would_pay",
    intensity: 8,
    keywords: ["notion", "alternative", "alert", "reddit", "productivity"],
  },
  {
    id: "p6",
    quote:
      "I wish there was a lightweight Stripe MRR dashboard. ChartMogul is overkill and too expensive for pre-revenue founders.",
    subreddit: "r/SaaS",
    signal: "wish",
    intensity: 7,
    keywords: ["stripe", "mrr", "dashboard", "saas", "revenue"],
  },
  {
    id: "p7",
    quote:
      "Looking for alternative to UptimeRobot after the price hike. Need something under $10/mo with a public status page.",
    subreddit: "r/webdev",
    signal: "alternative",
    intensity: 8,
    keywords: ["uptime", "monitoring", "status", "alternative", "devops"],
  },
  {
    id: "p8",
    quote:
      "Frustrated with Calendly's per-seat pricing for a solo consultant. Wish someone built a dead-simple booking page for $5/mo.",
    subreddit: "r/freelance",
    signal: "frustrated",
    intensity: 7,
    keywords: ["calendly", "booking", "freelance", "scheduling", "solo"],
  },
  {
    id: "p9",
    quote:
      "Would pay for a tool that extracts pain points from G2 and Capterra reviews automatically. Manual research takes forever.",
    subreddit: "r/SaaS",
    signal: "would_pay",
    intensity: 8,
    keywords: ["g2", "capterra", "reviews", "research", "saas"],
  },
  {
    id: "p10",
    quote:
      "I wish there was a Reddit audience research tool that doesn't cost $199/mo. SpyCenter pricing is insane for bootstrappers.",
    subreddit: "r/indiehackers",
    signal: "wish",
    intensity: 9,
    keywords: ["reddit", "audience", "research", "indie", "gummysearch"],
  },
  {
    id: "p11",
    quote:
      "Looking for alternative to Bannerbear for OG image generation. $49/mo is too much when I just need 20 images a month.",
    subreddit: "r/SaaS",
    signal: "alternative",
    intensity: 7,
    keywords: ["og", "image", "banner", "social", "marketing"],
  },
  {
    id: "p12",
    quote:
      "Frustrated with HoneyBook raising prices again. Need a minimal proposal + invoice tool for freelancers under $15/mo.",
    subreddit: "r/freelance",
    signal: "frustrated",
    intensity: 8,
    keywords: ["proposal", "invoice", "freelance", "honeybook", "contract"],
  },
  {
    id: "p13",
    quote:
      "I wish there was a tool to validate SaaS ideas from Reddit threads in 10 minutes instead of 10 hours of scrolling.",
    subreddit: "r/Entrepreneur",
    signal: "wish",
    intensity: 10,
    keywords: ["validate", "saas", "ideas", "reddit", "startup"],
  },
  {
    id: "p14",
    quote:
      "Would pay $20/mo for something that finds 'I hate [competitor]' posts and ranks them by frustration level.",
    subreddit: "r/SaaS",
    signal: "would_pay",
    intensity: 9,
    keywords: ["competitor", "research", "saas", "reddit", "pain"],
  },
  {
    id: "p15",
    quote:
      "Looking for alternative to VWO for A/B testing landing pages. $198/mo is ridiculous for a solo founder with 1k visitors.",
    subreddit: "r/marketing",
    signal: "alternative",
    intensity: 8,
    keywords: ["ab", "testing", "landing", "conversion", "marketing"],
  },
];

export type MineResult = {
  keyword: string;
  points: PainPoint[];
  totalFound: number;
  minedAt: string;
};

export function minePainPoints(keyword: string): MineResult {
  const q = keyword.trim().toLowerCase();
  const terms = q.split(/\s+/).filter(Boolean);

  const scored = PAIN_DATABASE.map((point) => {
    const haystack = `${point.quote} ${point.keywords.join(" ")} ${point.subreddit}`.toLowerCase();
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

  return {
    keyword: keyword.trim(),
    points,
    totalFound: scored.length || PAIN_DATABASE.length,
    minedAt: new Date().toISOString(),
  };
}

export function signalLabel(signal: PainSignal, locale: "en" | "zh"): string {
  const labels = {
    en: { wish: "I wish", alternative: "Alternative", frustrated: "Frustrated", would_pay: "Would pay" },
    zh: { wish: "我希望", alternative: "寻找替代", frustrated: "不满", would_pay: "愿意付费" },
  };
  return labels[locale][signal];
}
