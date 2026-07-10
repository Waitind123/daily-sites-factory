import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://seo-rank-tracker-lemon.vercel.app",
    name: "Rank Pulse",
    title: "Rank Pulse — SEMrush alternative for indie devs, $9.9/mo flat",
    description:
      "5 free rank checks. SEMrush $130/mo? $9.9/mo flat: daily keyword position tracking, rank history, 7-day trends. Ship SEO in 30 seconds.",
    keywords: [
      "keyword rank tracker",
      "SEMrush alternative",
      "Google position tracking",
      "indie hacker SEO",
      "daily rank check",
      "cheap rank tracker",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://seo-rank-tracker-lemon.vercel.app",
    name: "SEO 排名追踪",
    title: "SEO 排名追踪 — SEMrush 平替，独立开发者 $9.9/月",
    description:
      "免费体验 5 次排名查询。SEMrush 要 $130/月？$9.9/月一口价：每日关键词排名追踪、历史图表、7 日趋势，30 秒上线。",
    keywords: [
      "关键词排名追踪",
      "SEMrush 替代品",
      "Google 排名查询",
      "独立开发者 SEO",
      "每日排名检查",
      "便宜排名工具",
    ],
    locale: "zh_CN",
  },
} as const;

export const siteConfig = siteConfigByLocale.zh;

export const SITE_URL = siteConfig.url;

export function getSiteConfig(locale: Locale) {
  return siteConfigByLocale[locale];
}

export async function buildLocaleMetadata(locale: Locale): Promise<Metadata> {
  const cfg = getSiteConfig(locale);
  return buildSiteMetadata({ ...cfg, keywords: [...cfg.keywords] });
}

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/dashboard", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/semrush-alternative-indie-hackers",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
];

export function softwareApplicationJsonLd(locale: Locale = "en") {
  const cfg = getSiteConfig(locale);
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: cfg.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "9.9",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
    },
    description: cfg.description,
    url: cfg.url,
  };
}

export const metadata = buildSiteMetadata({
  ...siteConfigByLocale.en,
  keywords: [...siteConfigByLocale.en.keywords],
});
