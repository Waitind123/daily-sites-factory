import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://pulse-suite.vercel.app",
    name: "Pulse Suite",
    title: "Pulse Suite — Uptime monitoring + status pages for indie devs, $9.9/mo",
    description:
      "5 free actions. Statuspage $29 + UptimeRobot $7? $9.9/mo flat: 1-minute checks, public status pages, incident posts — one dashboard.",
    keywords: [
      "uptime monitoring status page",
      "Statuspage alternative",
      "UptimeRobot alternative",
      "indie hacker monitoring",
      "status page monitoring combo",
      "all in one uptime tool",
      "SaaS status page",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://pulse-suite.vercel.app",
    name: "监控状态一体",
    title: "监控状态一体 — Uptime 监控 + 状态页，独立开发者 $9.9/月",
    description:
      "免费体验 5 次。Statuspage $29 + UptimeRobot $7？$9.9/月一口价：1 分钟检测、公开状态页、事件发布 — 一个控制台。",
    keywords: [
      "uptime 监控 状态页",
      "Statuspage 替代品",
      "UptimeRobot 替代品",
      "独立开发者监控",
      "监控状态页一体",
      "SaaS 状态页",
      "宕机检测",
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
    path: "/guide/uptime-status-page-alternative-indie-hackers",
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
