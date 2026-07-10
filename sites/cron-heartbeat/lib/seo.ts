import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://cron-heartbeat.vercel.app",
    name: "Cron Heartbeat",
    title: "Cron Heartbeat — Healthchecks.io alternative for indie devs, $9.9/mo flat",
    description:
      "5 free cron job monitors. Healthchecks.io too complex? $9.9/mo flat: heartbeat ping, missed-run alerts, Slack notifications.",
    keywords: [
      "cron job monitoring",
      "Healthchecks.io alternative",
      "heartbeat monitoring",
      "scheduled task alert",
      "cron ping URL",
      "missed cron job",
      "Vercel cron monitor",
      "background job alert",
      "cheap cron monitor",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://cron-heartbeat.vercel.app",
    name: "Cron 心跳监控",
    title: "Cron Heartbeat — Healthchecks.io 平替，独立开发者 $9.9/月",
    description:
      "免费体验 5 个 cron 任务监控。Healthchecks.io 太贵？$9.9/月一口价：心跳 ping、漏跑检测、Slack 告警、任务日志。",
    keywords: [
      "cron 任务监控",
      "Healthchecks.io 替代",
      "心跳监控",
      "定时任务告警",
      "cron ping URL",
      "漏跑检测",
      "独立开发者 cron 监控",
      "后台任务告警",
      "Vercel cron 监控",
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
  { path: "/jobs", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/healthchecks-alternative-indie-hackers",
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
