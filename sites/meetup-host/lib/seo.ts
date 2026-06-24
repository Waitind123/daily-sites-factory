import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://meetup-host.vercel.app",
  name: "Meetup 组织助手",
  title: "Meetup 组织助手 — 轻量 RSVP 候补与签到管理 $9.9/月",
  description:
    "免费体验 5 次活动管理。比 Meetup.com 便宜 10 倍的 indie 线下聚会工具：自动候补队列、容量控制、签到视图、提醒模板。$9.9/月无限活动。",
  keywords: [
    "meetup 组织工具",
    "活动 RSVP 管理",
    "候补名单",
    "线下聚会",
    "indie hacker meetup",
    "社区活动管理",
    "meetup alternative",
    "活动签到",
    "免费聚会 RSVP",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/events", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/organize-indie-meetup-china",
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
