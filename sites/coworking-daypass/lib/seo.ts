import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://coworking-daypass.vercel.app",
  name: "日票通",
  title: "日票通 — 联合办公日票当日预订，WiFi 稳定有保障",
  description:
    "免费体验 5 次预订联合办公日票。出差数字游民当日可用工位，实时库存、WiFi 实测、视频会议友好筛选。$9.9/月无限预订。",
  keywords: [
    "联合办公日票",
    "coworking day pass",
    "日票预订",
    "数字游民办公",
    "出差办公",
    "共享办公日票",
    "coworking booking",
    "当日工位",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/passes", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/book-coworking-day-pass-same-day",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
];

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
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
