import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://uptime-alt.vercel.app",
    name: "UptimeAlt",
    title: "UptimeAlt — UptimeRobot price hike alternative, $29/mo",
    description:
      "UptimeRobot 4× price hike? 5 free actions. $29/mo flat: 1-minute checks, public status pages, incident posts — monitor + status in one dashboard.",
    keywords: [
      "UptimeRobot alternative",
      "UptimeRobot price hike",
      "uptime monitoring status page",
      "Statuspage alternative",
      "indie hacker monitoring",
      "status page monitoring combo",
      "SaaS uptime tool",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://uptime-alt.vercel.app",
    name: "Uptime 涨价替代品",
    title: "Uptime 涨价替代品 — UptimeRobot 4 倍涨价后的监控 + 状态页，$29/月",
    description:
      "UptimeRobot 涨价 4 倍？免费体验 5 次。$29/月一口价：1 分钟检测、公开状态页、事件发布 — 监控与状态页一个控制台。",
    keywords: [
      "UptimeRobot 替代品",
      "UptimeRobot 涨价",
      "uptime 监控 状态页",
      "Statuspage 替代品",
      "独立开发者监控",
      "监控状态页一体",
      "SaaS 宕机检测",
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
    path: "/guide/uptimerobot-price-hike-alternative-2026",
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
