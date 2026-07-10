import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://bookmark-pulse.vercel.app",
    name: "Bookmark Pulse",
    title: "Bookmark Pulse — Pocket alternative for indie hackers, $29/mo flat",
    description:
      "5 free bookmark saves. Mozilla killed Pocket? $29/mo flat: folders, public share links, instant search. No AI second brain.",
    keywords: [
      "Pocket alternative",
      "bookmark manager",
      "read it later",
      "Raindrop alternative",
      "indie hacker tools",
      "link collection",
      "bookmark sharing",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://bookmark-pulse.vercel.app",
    name: "书签收藏平替",
    title: "Bookmark Pulse — Pocket 平替，独立开发者 $29/月",
    description:
      "免费体验 5 次保存。Mozilla 关停 Pocket？$29/月一口价：文件夹、公开分享、即时搜索。不要 AI 第二大脑。",
    keywords: [
      "Pocket 替代品",
      "书签管理",
      "稍后阅读",
      "Raindrop 替代品",
      "独立开发者工具",
      "链接收藏",
      "书签分享",
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
  { path: "/bookmarks", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/pocket-alternative-indie-hackers",
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
    applicationCategory: "UtilitiesApplication",
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
