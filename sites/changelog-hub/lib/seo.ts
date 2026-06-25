import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://changelog-hub.vercel.app",
  name: "Indie Changelog",
  title: "Indie Changelog 发布台 — Beamer 平替，$9.9/月",
  description:
    "免费体验 5 次生成 Changelog。Beamer $49/月太贵？$9.9/月发布产品更新日志、嵌入 Widget、状态页和 RSS，专为 indie hacker 设计。",
  keywords: [
    "changelog",
    "产品更新日志",
    "Beamer 替代",
    "AnnounceKit 替代",
    "indie hacker changelog",
    "SaaS 更新通知",
    "状态页",
    "status page",
    "产品发布",
    "独立开发者工具",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/publish", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/beamer-alternative-indie-changelog",
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
