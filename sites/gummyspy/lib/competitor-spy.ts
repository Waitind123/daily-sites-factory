export type AdPlatform = "meta" | "google" | "linkedin";

export type CompetitorAd = {
  id: string;
  platform: AdPlatform;
  headline: string;
  body: string;
  daysRunning: number;
  spendEstimate: string;
};

export type SeoKeyword = {
  keyword: string;
  position: number;
  volume: number;
  difficulty: number;
};

export type ReviewWeakness = {
  source: string;
  quote: string;
  theme: string;
  severity: number;
};

export type SpyResult = {
  domain: string;
  ads: CompetitorAd[];
  seoKeywords: SeoKeyword[];
  weaknesses: ReviewWeakness[];
  totalAds: number;
  avgAdDays: number;
  scannedAt: string;
};

const SPY_DATABASE: Record<string, Omit<SpyResult, "domain" | "scannedAt">> = {
  spycenter: {
    ads: [
      {
        id: "a1",
        platform: "meta",
        headline: "GummySearch is gone. Spy on competitors instead.",
        body: "Enter any URL → get their Meta ads, SEO keywords & review weaknesses. $79/mo.",
        daysRunning: 42,
        spendEstimate: "$2.4k",
      },
      {
        id: "a2",
        platform: "google",
        headline: "Audience Spy — Reddit pain points in seconds",
        body: "AI extracts 'I wish' and 'I hate' statements verbatim. Built for founders.",
        daysRunning: 28,
        spendEstimate: "$1.8k",
      },
      {
        id: "a3",
        platform: "linkedin",
        headline: "Competitor Spy for indie hackers",
        body: "See what ads your competitors run on Meta & Google. No enterprise pricing.",
        daysRunning: 14,
        spendEstimate: "$900",
      },
    ],
    seoKeywords: [
      { keyword: "gummysearch alternative", position: 3, volume: 2400, difficulty: 42 },
      { keyword: "reddit audience research", position: 7, volume: 1800, difficulty: 55 },
      { keyword: "competitor ad spy tool", position: 12, volume: 3200, difficulty: 61 },
      { keyword: "indie hacker market research", position: 18, volume: 900, difficulty: 38 },
    ],
    weaknesses: [
      {
        source: "G2",
        quote: "Too expensive for solo founders — $199/mo is enterprise pricing.",
        theme: "Pricing",
        severity: 9,
      },
      {
        source: "Capterra",
        quote: "Competitor Spy module is great but Audience Spy misses Product Hunt.",
        theme: "Coverage",
        severity: 7,
      },
      {
        source: "Trustpilot",
        quote: "Wish it had a free tier or lower entry price under $20/mo.",
        theme: "Pricing",
        severity: 8,
      },
    ],
    totalAds: 12,
    avgAdDays: 28,
  },
  painhunt: {
    ads: [
      {
        id: "b1",
        platform: "meta",
        headline: "Find validated startup ideas from Reddit",
        body: "26 platforms. AI Opportunity Score. PainHunt — $29/mo.",
        daysRunning: 56,
        spendEstimate: "$3.1k",
      },
      {
        id: "b2",
        platform: "google",
        headline: "GummySearch replacement — pain point mining",
        body: "Scan Reddit, HN, Product Hunt for SaaS ideas. Start free.",
        daysRunning: 35,
        spendEstimate: "$2.2k",
      },
    ],
    seoKeywords: [
      { keyword: "pain point discovery tool", position: 5, volume: 1600, difficulty: 48 },
      { keyword: "startup idea validation", position: 9, volume: 4100, difficulty: 67 },
      { keyword: "reddit saas ideas", position: 14, volume: 1200, difficulty: 44 },
    ],
    weaknesses: [
      {
        source: "G2",
        quote: "$29/mo is steep when I only need 3 platforms, not 26.",
        theme: "Pricing",
        severity: 8,
      },
      {
        source: "Product Hunt",
        quote: "No competitor ad intelligence — just pain mining.",
        theme: "Features",
        severity: 7,
      },
    ],
    totalAds: 8,
    avgAdDays: 45,
  },
  default: {
    ads: [
      {
        id: "c1",
        platform: "meta",
        headline: "Stop guessing what your competitors do",
        body: "See their active ads, SEO keywords & review weaknesses in one dashboard.",
        daysRunning: 21,
        spendEstimate: "$1.5k",
      },
      {
        id: "c2",
        platform: "google",
        headline: "Competitor intelligence for bootstrappers",
        body: "Meta + Google ads, G2/Capterra weaknesses, SEO gaps — $9.9/mo.",
        daysRunning: 18,
        spendEstimate: "$1.2k",
      },
    ],
    seoKeywords: [
      { keyword: "competitor analysis tool", position: 8, volume: 5400, difficulty: 72 },
      { keyword: "saas competitor research", position: 15, volume: 2100, difficulty: 58 },
      { keyword: "ad spy tool indie", position: 22, volume: 800, difficulty: 41 },
    ],
    weaknesses: [
      {
        source: "G2",
        quote: "Enterprise pricing — need something under $20/mo for solo founders.",
        theme: "Pricing",
        severity: 9,
      },
      {
        source: "Capterra",
        quote: "Great features but onboarding takes too long for a quick competitive check.",
        theme: "UX",
        severity: 6,
      },
    ],
    totalAds: 6,
    avgAdDays: 20,
  },
};

function extractDomain(input: string): string {
  const trimmed = input.trim().toLowerCase();
  try {
    const url = trimmed.includes("://") ? new URL(trimmed) : new URL(`https://${trimmed}`);
    return url.hostname.replace(/^www\./, "").split(".")[0];
  } catch {
    return trimmed.replace(/^www\./, "").split(".")[0];
  }
}

export function spyCompetitor(input: string): SpyResult {
  const domain = extractDomain(input);
  const data = SPY_DATABASE[domain] ?? SPY_DATABASE.default;

  return {
    domain: input.trim(),
    ...data,
    scannedAt: new Date().toISOString(),
  };
}

export function platformLabel(platform: AdPlatform, locale: "en" | "zh"): string {
  const labels = {
    en: { meta: "Meta Ads", google: "Google Ads", linkedin: "LinkedIn Ads" },
    zh: { meta: "Meta 广告", google: "Google 广告", linkedin: "LinkedIn 广告" },
  };
  return labels[locale][platform];
}
