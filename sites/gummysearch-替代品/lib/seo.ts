import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://gummysearch-alt.vercel.app",
    name: "GummySpy",
    title: "GummySpy — GummySearch replacement with competitor ad spy, $9.9/mo",
    description:
      "5 free uses. Audience pain mining across Reddit, HN & Product Hunt + competitor Meta/Google ad intelligence. GummySearch alternative at $9.9/mo.",
    keywords: [
      "GummySearch alternative",
      "competitor ad spy",
      "Reddit audience research",
      "indie hacker market research",
      "SpyCenter alternative",
      "pain point mining",
      "SaaS idea validation",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://gummysearch-alt.vercel.app",
    name: "GummySearch 替代品",
    title: "GummySearch 替代品 — 受众痛点 + 竞品广告情报，$9.9/月",
    description:
      "免费体验 5 次。跨 Reddit、HN、Product Hunt 受众痛点挖掘 + 竞品 Meta/Google 广告情报。GummySearch 平替，$9.9/月一口价。",
    keywords: [
      "GummySearch 替代品",
      "竞品广告侦察",
      "Reddit 受众研究",
      "独立开发者市场调研",
      "SpyCenter 替代品",
      "痛点挖掘",
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
  { path: "/spy", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/gummysearch-alternative-indie-hackers",
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
