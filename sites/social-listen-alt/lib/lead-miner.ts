export type LeadSignal = "switching" | "alternative" | "pricing" | "recommendation";
export type LeadSubreddit = "saas" | "entrepreneur" | "indiehackers" | "startups";

export type LeadPost = {
  id: string;
  quote: string;
  subreddit: LeadSubreddit;
  source: string;
  signal: LeadSignal;
  intentScore: number;
  keywords: string[];
  postedAgo: string;
};

const LEAD_DATABASE: LeadPost[] = [
  {
    id: "l1",
    quote:
      "Brand24 Individual is $199/mo for 3 keywords — need a cheaper Reddit + X alternative with intent scoring only.",
    subreddit: "saas",
    source: "r/SaaS",
    signal: "alternative",
    intentScore: 10,
    keywords: ["brand24", "social listening", "alternative", "reddit", "intent"],
    postedAgo: "2h ago",
  },
  {
    id: "l2",
    quote:
      "Switching from Mention — dashboard is full of vanity mentions. Need something that filters 'alternative to' and 'switching from' only.",
    subreddit: "indiehackers",
    source: "X",
    signal: "switching",
    intentScore: 10,
    keywords: ["mention", "social listening", "switching", "alternative", "noise"],
    postedAgo: "4h ago",
  },
  {
    id: "l3",
    quote:
      "ReplyRadar $39/mo is steep for solo founders. Anyone found indie-friendly social listening under $15/mo?",
    subreddit: "saas",
    source: "r/SaaS",
    signal: "pricing",
    intentScore: 9,
    keywords: ["replyradar", "social listening", "pricing", "indie", "reddit"],
    postedAgo: "6h ago",
  },
  {
    id: "l4",
    quote:
      "Mention $49/mo still too much if I only monitor Reddit and X for buying signals, not PR coverage.",
    subreddit: "entrepreneur",
    source: "r/Entrepreneur",
    signal: "pricing",
    intentScore: 9,
    keywords: ["mention", "brand24", "pricing", "reddit", "x"],
    postedAgo: "8h ago",
  },
  {
    id: "l5",
    quote:
      "Can someone recommend a social listening tool for indie SaaS? Brand24 feels like overkill for monitoring competitor switches.",
    subreddit: "saas",
    source: "r/SaaS",
    signal: "recommendation",
    intentScore: 8,
    keywords: ["brand24", "social listening", "competitor", "saas", "monitoring"],
    postedAgo: "12h ago",
  },
  {
    id: "l6",
    quote:
      "Leadly is nice but $29/mo for Reddit alerts alone. I just want high-intent threads on X and Reddit.",
    subreddit: "startups",
    source: "X",
    signal: "pricing",
    intentScore: 8,
    keywords: ["leadly", "reddit", "x", "intent", "pricing"],
    postedAgo: "1d ago",
  },
  {
    id: "l7",
    quote:
      "Alternative to Awario? $29/mo for social listening but 90% of mentions are irrelevant brand noise.",
    subreddit: "indiehackers",
    source: "r/indiehackers",
    signal: "alternative",
    intentScore: 9,
    keywords: ["awario", "social listening", "alternative", "noise", "intent"],
    postedAgo: "1d ago",
  },
  {
    id: "l8",
    quote:
      "We stopped using Brand24 for mention volume. Now we only track switching threads on Reddit — conversion 3× better.",
    subreddit: "saas",
    source: "r/SaaS",
    signal: "switching",
    intentScore: 10,
    keywords: ["brand24", "switching", "reddit", "conversion", "intent"],
    postedAgo: "2d ago",
  },
  {
    id: "l9",
    quote:
      "Looking for a tool that scores buying intent on X threads — Mention alerts are too noisy for solo founders.",
    subreddit: "entrepreneur",
    source: "X",
    signal: "recommendation",
    intentScore: 9,
    keywords: ["mention", "x", "intent", "social listening", "founders"],
    postedAgo: "2d ago",
  },
  {
    id: "l10",
    quote:
      "Syften $20/mo is okay but still no intent scoring. Switching to something under $10 with alternative-to filters.",
    subreddit: "saas",
    source: "r/SaaS",
    signal: "switching",
    intentScore: 9,
    keywords: ["syften", "social listening", "switching", "intent", "alternative"],
    postedAgo: "3d ago",
  },
  {
    id: "l11",
    quote:
      "RedNudge at $7/mo is Reddit-only. Need Reddit + X with intent scores for $29 — does it exist?",
    subreddit: "indiehackers",
    source: "r/indiehackers",
    signal: "recommendation",
    intentScore: 8,
    keywords: ["rednudge", "reddit", "x", "intent", "social listening"],
    postedAgo: "3d ago",
  },
  {
    id: "l12",
    quote:
      "Anyone monitoring 'alternative to Brand24' threads? Those convert way better than generic brand mentions.",
    subreddit: "startups",
    source: "r/startups",
    signal: "alternative",
    intentScore: 8,
    keywords: ["brand24", "alternative", "social listening", "conversion", "reddit"],
    postedAgo: "4d ago",
  },
];

export type MonitorResult = {
  keyword: string;
  leads: LeadPost[];
  totalFound: number;
  subreddits: Record<LeadSubreddit, number>;
  avgIntentScore: number;
  highIntentCount: number;
  scannedAt: string;
};

export function scanLeads(keyword: string): MonitorResult {
  const q = keyword.trim().toLowerCase();
  const terms = q.split(/\s+/).filter(Boolean);

  const scored = LEAD_DATABASE.map((lead) => {
    const haystack = `${lead.quote} ${lead.keywords.join(" ")} ${lead.source}`.toLowerCase();
    let score = 0;
    for (const term of terms) {
      if (haystack.includes(term)) score += lead.intentScore;
      for (const kw of lead.keywords) {
        if (kw.includes(term) || term.includes(kw)) score += 3;
      }
    }
    return { lead, score };
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  const leads = (scored.length > 0 ? scored : LEAD_DATABASE.map((l) => ({ lead: l, score: l.intentScore })))
    .slice(0, 8)
    .map((x) => x.lead);

  const subreddits: Record<LeadSubreddit, number> = {
    saas: 0,
    entrepreneur: 0,
    indiehackers: 0,
    startups: 0,
  };
  for (const l of leads) subreddits[l.subreddit]++;

  const avgIntentScore = Math.round(
    leads.reduce((sum, l) => sum + l.intentScore, 0) / leads.length
  );
  const highIntentCount = leads.filter((l) => l.intentScore >= 9).length;

  return {
    keyword: keyword.trim(),
    leads,
    totalFound: scored.length || LEAD_DATABASE.length,
    subreddits,
    avgIntentScore,
    highIntentCount,
    scannedAt: new Date().toISOString(),
  };
}

export function signalLabel(signal: LeadSignal, locale: "en" | "zh"): string {
  const labels = {
    en: {
      switching: "Switching",
      alternative: "Alternative",
      pricing: "Pricing pain",
      recommendation: "Asking recs",
    },
    zh: {
      switching: "正在切换",
      alternative: "寻找替代",
      pricing: "价格不满",
      recommendation: "求推荐",
    },
  };
  return labels[locale][signal];
}

export function subredditLabel(sub: LeadSubreddit, locale: "en" | "zh"): string {
  const labels = {
    en: {
      saas: "r/SaaS",
      entrepreneur: "r/Entrepreneur",
      indiehackers: "r/indiehackers",
      startups: "r/startups",
    },
    zh: {
      saas: "r/SaaS",
      entrepreneur: "r/Entrepreneur",
      indiehackers: "r/indiehackers",
      startups: "r/startups",
    },
  };
  return labels[locale][sub];
}
