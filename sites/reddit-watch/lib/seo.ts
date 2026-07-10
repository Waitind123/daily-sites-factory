import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://reddit-watch-rho.vercel.app",
    name: "Reddit Watch",
    title: "Reddit Watch — 24/7 keyword monitoring for indie hackers, $29/mo",
    description:
      "5 free scans. SubWatch alternative with 24/7 keyword alerts, intent scoring 1–10, and switching/alternative signal filtering. Monitor r/SaaS & r/indiehackers for $29/mo.",
    keywords: [
      "SubWatch alternative",
      "Reddit keyword monitoring",
      "Reddit lead alerts indie hackers",
      "switching from alternative to Reddit",
      "Mentionly alternative",
      "StackLead alternative",
      "Reddit monitoring tool $29",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://reddit-watch-rho.vercel.app",
    name: "Reddit 线索监控",
    title: "Reddit 线索监控 — 全天候关键词提醒，$29/月",
    description:
      "免费体验 5 次扫描。SubWatch 平替：全天候关键词提醒、意向分 1–10、切换/替代信号过滤。监控 r/SaaS 与 r/indiehackers，$29/月一口价。",
    keywords: [
      "SubWatch 替代品",
      "Reddit 关键词监控",
      "Reddit 线索提醒独立开发者",
      "正在切换寻找替代 Reddit",
      "Mentionly 替代品",
      "StackLead 替代品",
      "Reddit 监控工具 $29",
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
  { path: "/monitor", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/subwatch-alternative-reddit-monitoring",
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
