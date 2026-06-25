import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://og-image-studio-cyan.vercel.app",
  name: "OG Image Studio",
  title: "OG Image 生成器 — Bannerbear 平替，$9.9/月",
  description:
    "免费体验 5 次生成 OG 社交分享图。Bannerbear $49/月太贵？$9.9/月一键生成 1200×630 Open Graph 图片，导出 meta 标签和 Next.js 代码片段。",
  keywords: [
    "OG image generator",
    "Open Graph 图片",
    "Bannerbear 替代",
    "社交分享图",
    "twitter card image",
    "indie hacker OG",
    "SaaS 分享图",
    "meta tags generator",
    "产品发布图",
    "独立开发者工具",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/studio", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/bannerbear-alternative-og-image",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
];

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.name,
    applicationCategory: "DesignApplication",
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
