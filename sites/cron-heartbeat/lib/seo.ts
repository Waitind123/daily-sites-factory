import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://cron-heartbeat.vercel.app",
  name: "Cron Heartbeat",
  title: "Cron Heartbeat — Healthchecks.io 平替，独立开发者 $9.9/月",
  description:
    "免费体验 5 个 cron 任务监控。Healthchecks.io 太贵？$9.9/月一口价：心跳 ping、漏跑检测、Slack 告警、任务日志。",
  keywords: [
    "cron job monitoring",
    "Healthchecks.io alternative",
    "heartbeat monitoring",
    "scheduled task alert",
    "cron ping URL",
    "missed cron job",
    "Vercel cron monitor",
    "独立开发者 cron 监控",
    "定时任务心跳",
    "background job alert",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

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

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.name,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "9.9",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
    },
    description: siteConfig.description,
    url: siteConfig.url,
  };
}
