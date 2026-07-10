import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://docsend-pulse.vercel.app",
    name: "DocSend Pulse",
    title: "DocSend Pulse — Secure doc sharing with page analytics, $9.9/mo",
    description:
      "5 free tracked shares. DocSend $45+/user? $9.9/mo flat: secure links, page-by-page analytics, viewer sessions, and view notifications for indie founders.",
    keywords: [
      "DocSend alternative",
      "document tracking indie",
      "pitch deck analytics",
      "secure document sharing",
      "page level analytics",
      "Peony alternative",
      "Dropbox Send Track replacement",
      "investor deck tracking",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://docsend-pulse.vercel.app",
    name: "文档追踪脉冲",
    title: "文档追踪脉冲 — DocSend 替代品，安全分享 + 逐页分析 $9.9/月",
    description:
      "免费体验 5 次追踪分享。DocSend $45+/席位？$9.9/月一口价：安全链接、逐页分析、访客会话与浏览通知。",
    keywords: [
      "DocSend 替代品",
      "文档追踪独立开发者",
      "路演稿分析",
      "安全文档分享",
      "逐页分析",
      "Peony 替代品",
      "Dropbox Send Track 替代",
      "投资人路演稿追踪",
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
  { path: "/share", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/docsend-alternative-secure-doc-sharing",
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
