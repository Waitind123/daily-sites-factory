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
      "Harvest raised prices from $12 to $1,900/mo — what's everyone switching to? Need something indie-friendly for time tracking.",
    subreddit: "saas",
    source: "r/SaaS",
    signal: "switching",
    intentScore: 10,
    keywords: ["harvest", "time tracking", "switching", "pricing", "saas"],
    postedAgo: "2h ago",
  },
  {
    id: "l2",
    quote:
      "Looking for a SubWatch alternative under $15/mo. I just need Reddit keyword alerts with intent scoring, not a full CRM.",
    subreddit: "indiehackers",
    source: "r/indiehackers",
    signal: "alternative",
    intentScore: 9,
    keywords: ["subwatch", "reddit", "leads", "alternative", "indie"],
    postedAgo: "4h ago",
  },
  {
    id: "l3",
    quote:
      "StackLead is $49/mo now — anyone found a cheaper Reddit lead gen tool that still scores buying intent?",
    subreddit: "saas",
    source: "r/SaaS",
    signal: "pricing",
    intentScore: 9,
    keywords: ["stacklead", "reddit", "lead gen", "pricing", "intent"],
    postedAgo: "6h ago",
  },
  {
    id: "l4",
    quote:
      "Switching from ReplyGain — too many false positives. Need something that filters for 'alternative to' and 'switching from' only.",
    subreddit: "entrepreneur",
    source: "r/Entrepreneur",
    signal: "switching",
    intentScore: 10,
    keywords: ["replygain", "alternative", "switching", "reddit", "leads"],
    postedAgo: "8h ago",
  },
  {
    id: "l5",
    quote:
      "Can someone recommend a Reddit monitoring tool for B2B SaaS? Calendly competitors keep popping up in r/SaaS threads.",
    subreddit: "saas",
    source: "r/SaaS",
    signal: "recommendation",
    intentScore: 8,
    keywords: ["calendly", "monitoring", "reddit", "saas", "b2b"],
    postedAgo: "12h ago",
  },
  {
    id: "l6",
    quote:
      "Subreach wants $79/mo for Reddit DMs. I just want to find high-intent threads where people ask for tool recommendations.",
    subreddit: "startups",
    source: "r/startups",
    signal: "pricing",
    intentScore: 8,
    keywords: ["subreach", "reddit", "recommendations", "pricing", "threads"],
    postedAgo: "1d ago",
  },
  {
    id: "l7",
    quote:
      "Alternative to Leadline? Their inbox is nice but $39/mo is steep for a solo founder doing Reddit outbound.",
    subreddit: "indiehackers",
    source: "r/indiehackers",
    signal: "alternative",
    intentScore: 9,
    keywords: ["leadline", "reddit", "outbound", "alternative", "solo"],
    postedAgo: "1d ago",
  },
  {
    id: "l8",
    quote:
      "We monitor competitor mentions on Reddit now. Every time someone posts about switching from Heroku, we're in the thread within 20 min.",
    subreddit: "saas",
    source: "r/SaaS",
    signal: "switching",
    intentScore: 10,
    keywords: ["heroku", "competitor", "switching", "reddit", "monitoring"],
    postedAgo: "2d ago",
  },
  {
    id: "l9",
    quote:
      "Looking for a tool that auto-extracts 'I wish there was' vs 'I'm switching' — the second one actually converts.",
    subreddit: "entrepreneur",
    source: "r/Entrepreneur",
    signal: "recommendation",
    intentScore: 9,
    keywords: ["switching", "intent", "reddit", "conversion", "leads"],
    postedAgo: "2d ago",
  },
  {
    id: "l10",
    quote:
      "Typeform free tier is 10 responses/mo. Switching to something under $10/mo with unlimited forms — any recs?",
    subreddit: "saas",
    source: "r/SaaS",
    signal: "switching",
    intentScore: 9,
    keywords: ["typeform", "forms", "switching", "pricing", "saas"],
    postedAgo: "3d ago",
  },
  {
    id: "l11",
    quote:
      "Bitly $35/mo for link tracking is insane. Need a Reddit-friendly short link tool with click analytics under $10.",
    subreddit: "indiehackers",
    source: "r/indiehackers",
    signal: "pricing",
    intentScore: 7,
    keywords: ["bitly", "links", "analytics", "pricing", "reddit"],
    postedAgo: "3d ago",
  },
  {
    id: "l12",
    quote:
      "Anyone using Reddit for lead gen without getting banned? Need rule-aware monitoring for r/SaaS and r/startups.",
    subreddit: "startups",
    source: "r/startups",
    signal: "recommendation",
    intentScore: 8,
    keywords: ["reddit", "lead gen", "saas", "startups", "monitoring"],
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
