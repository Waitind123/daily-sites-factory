import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://price-tracker.vercel.app",
  name: "SaaS 价格追踪",
  title: "SaaS 价格追踪 — 竞品定价变动监控与历史分析 $9.9/月",
  description:
    "免费体验 5 次深度追踪。自动监控 Notion、Linear、Cursor 等竞品定价变动，90 天历史、趋势分析、邮件提醒。比 RivalPeek $49/月便宜 5 倍。",
  keywords: [
    "SaaS 价格追踪",
    "竞品定价监控",
    "competitor pricing tracker",
    "定价变动提醒",
    "SaaS 定价分析",
    "竞品价格历史",
    "indie hacker 定价",
    "pricing page monitor",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/track", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/saas-pricing-monitoring-indie",
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
