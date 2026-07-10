import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://ai-overview-rank.vercel.app",
    name: "AIO Rank",
    title: "AIO Rank — AI Overview + classic SERP tracking for indie devs, $9.9/mo",
    description:
      "5 free dual-track checks. Track Google classic rank AND AI Overview citations. SEMrush ignores AI Overviews — $9.9/mo flat for indie sites.",
    keywords: [
      "AI Overview rank tracker",
      "Google AI Overview SEO",
      "SERP tracking indie",
      "AI citation monitoring",
      "classic rank tracker",
      "SEMrush alternative",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://ai-overview-rank.vercel.app",
    name: "AI Overview 排名追踪",
    title: "AI Overview 排名追踪 — 经典排名 + AI 摘要双轨，独立开发者 $9.9/月",
    description:
      "免费体验 5 次双轨查询。同时追踪 Google 经典排名与 AI Overview 引用。SEMrush 忽略 AI 摘要 — $9.9/月一口价。",
    keywords: [
      "AI Overview 排名追踪",
      "Google AI 摘要 SEO",
      "SERP 双轨监控",
      "AI 引用监测",
      "经典排名追踪",
      "SEMrush 替代品",
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
    path: "/guide/ai-overview-rank-tracking-indie-hackers",
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
