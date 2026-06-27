import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://pain-radar.vercel.app",
    name: "Pain Radar",
    title: "Pain Radar — Cross-platform pain point scanner for indie hackers, $9.9/mo",
    description:
      "5 free scans. Scan Reddit, Hacker News & Product Hunt for pain points. GummySearch alternative with opportunity scoring. $9.9/mo flat.",
    keywords: [
      "cross-platform pain points",
      "GummySearch alternative",
      "Hacker News pain mining",
      "Product Hunt validation",
      "indie hacker research",
      "opportunity scoring",
      "SaaS idea validation",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://pain-radar.vercel.app",
    name: "跨平台痛点雷达",
    title: "跨平台痛点雷达 — 独立开发者 HN+Reddit+PH 扫描，$9.9/月",
    description:
      "免费体验 5 次扫描。跨 Reddit、Hacker News 与 Product Hunt 挖掘痛点，机会分评分。GummySearch 平替，$9.9/月一口价。",
    keywords: [
      "跨平台痛点挖掘",
      "GummySearch 替代品",
      "Hacker News 痛点扫描",
      "Product Hunt 验证",
      "独立开发者调研",
      "机会分评分",
      "SaaS 想法验证",
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
  { path: "/scan", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/cross-platform-pain-radar-indie-hackers",
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
