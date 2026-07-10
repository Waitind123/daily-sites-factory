import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://release-pulse.vercel.app",
    name: "Release Pulse",
    title: "Release Pulse — Changelog to social posts for indie devs, $29/mo",
    description:
      "5 free conversions. PushToPost $9/mo? $29/mo flat: paste release notes → X, LinkedIn, Threads. Ship announcements in 30 seconds.",
    keywords: [
      "changelog to social media",
      "release notes converter",
      "PushToPost alternative",
      "indie hacker marketing",
      "changelog social posts",
      "release announcement tool",
      "build in public",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://release-pulse.vercel.app",
    name: "发布日志转社交帖",
    title: "发布日志转社交帖 — PushToPost 平替，独立开发者 $29/月",
    description:
      "免费体验 5 次。PushToPost 要 $9/月？$29/月一口价：粘贴 release notes → X、领英、Threads，30 秒完成发布通知。",
    keywords: [
      "发布日志转社交帖",
      "changelog 改写工具",
      "PushToPost 替代品",
      "独立开发者营销",
      "版本发布通知",
      "构建公开",
      "release notes 转换",
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
  { path: "/convert", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/changelog-social-posts-indie-hackers",
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
