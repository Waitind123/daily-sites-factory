import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://habit-tracker.vercel.app",
  name: "习惯打卡",
  title: "习惯打卡 — 极简习惯追踪，$29.9/月",
  description:
    "免费体验 5 次打卡。极简习惯追踪，连续天数可视化，每日提醒。无免费档，$29.9/月无限习惯与数据导出。",
  keywords: [
    "习惯打卡",
    "习惯追踪",
    "habit tracker",
    "每日打卡",
    "习惯养成",
    "连续打卡",
    "自律工具",
    "micro saas",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/track", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/guide/build-daily-habit", priority: 0.85, changeFrequency: "monthly" as const },
];

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.name,
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "29.9",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
    },
    description: siteConfig.description,
    url: siteConfig.url,
  };
}
