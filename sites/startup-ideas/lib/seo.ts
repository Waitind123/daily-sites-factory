import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://startup-ideas-five.vercel.app",
  name: "创业点子库",
  title: "创业点子库 — 每日创业灵感 + 深度市场分析 $9.9/月",
  description:
    "免费体验 5 次深度分析。每日精选可落地的创业点子，含市场规模、竞品定价、获客渠道与 MVP 路线图。$9.9/月无限阅读。",
  keywords: [
    "创业点子",
    "startup ideas",
    "独立开发",
    "indie hacker",
    "创业灵感",
    "SaaS 点子",
    "副业项目",
    "市场分析",
    "micro saas",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/ideas", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/find-profitable-startup-idea",
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
