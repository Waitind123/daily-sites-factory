import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://uptime-pulse-three.vercel.app",
    name: "Uptime Pulse",
    title: "Uptime Pulse — UptimeRobot alternative for indie devs, $9.9/mo flat",
    description:
      "5 free URL checks. UptimeRobot 4× price hike? $9.9/mo flat: 1-min checks, Slack alerts, public status page, SSL monitoring.",
    keywords: [
      "uptime monitoring",
      "UptimeRobot alternative",
      "website monitor indie hacker",
      "status page",
      "site downtime alert",
      "SSL monitoring",
      "Slack downtime alert",
      "cheap uptime monitor",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://uptime-pulse-three.vercel.app",
    name: "Uptime 监控",
    title: "Uptime Pulse — UptimeRobot 平替，独立开发者 $9.9/月",
    description:
      "免费体验 5 次 URL 检测。UptimeRobot 涨价 4 倍？$9.9/月一口价：1 分钟检测、Slack 告警、公开状态页、SSL 到期提醒。",
    keywords: [
      "uptime 监控",
      "UptimeRobot 替代",
      "网站监控 独立开发者",
      "状态页",
      "宕机告警",
      "SSL 监控",
      "独立开发者监控",
      "网站 uptime 检测",
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
  { path: "/monitors", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/uptimerobot-alternative-indie-hackers",
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
    applicationCategory: "DeveloperApplication",
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
