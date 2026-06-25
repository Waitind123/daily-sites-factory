import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://uptime-pulse.vercel.app",
  name: "Uptime Pulse",
  title: "Uptime Pulse — UptimeRobot 平替，独立开发者 $9.9/月",
  description:
    "免费体验 5 次 URL 检测。UptimeRobot 涨价 4 倍？$9.9/月一口价：1 分钟检测、Slack 告警、公开状态页、SSL 到期提醒。",
  keywords: [
    "uptime monitoring",
    "UptimeRobot alternative",
    "website monitor indie hacker",
    "status page",
    "site downtime alert",
    "SSL monitoring",
    "独立开发者监控",
    "网站 uptime 检测",
    "Slack downtime alert",
    "cheap uptime monitor",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

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
