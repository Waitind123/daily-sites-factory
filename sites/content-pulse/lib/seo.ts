import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://content-pulse-murex.vercel.app",
    name: "Content Pulse",
    title: "Content Pulse — Buffer alternative for indie devs, $9.9/mo flat",
    description:
      "5 free reposts. Buffer $15/mo? $9.9/mo flat: one paste → X, LinkedIn, Threads, Reddit, Product Hunt. Ship launches in 30 seconds.",
    keywords: [
      "multi-platform repost",
      "social media scheduler",
      "Buffer alternative",
      "indie hacker marketing",
      "content distribution",
      "cross-posting tool",
      "changelog to social",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://content-pulse-murex.vercel.app",
    name: "内容多平台分发",
    title: "内容多平台分发 — Buffer 平替，独立开发者 $9.9/月",
    description:
      "免费体验 5 次。Buffer 要 $15/月？$9.9/月一口价：一次粘贴 → X、领英、Threads、Reddit、Product Hunt，30 秒完成发布分发。",
    keywords: [
      "多平台内容分发",
      "社交媒体定时发布",
      "Buffer 替代品",
      "独立开发者营销",
      "内容改写工具",
      "交叉发布",
      "changelog 转社交帖",
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
  { path: "/repost", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/buffer-alternative-indie-hackers",
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
