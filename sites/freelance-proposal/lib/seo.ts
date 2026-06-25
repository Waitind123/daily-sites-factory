import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://freelance-proposal.vercel.app",
  name: "报价单通",
  title: "报价单通 — 自由职业极简报价单，HoneyBook 平替",
  description:
    "免费体验 5 次生成专业报价单。HoneyBook 涨价后的极简替代：报价 + 合同条款 + 发票，$9.9/月无限使用。",
  keywords: [
    "自由职业报价单",
    "HoneyBook 替代",
    "freelance proposal",
    "报价单生成器",
    "自由职业发票",
    "Bonsai 替代",
    "独立开发者报价",
    "freelancer invoice",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/create", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/honeybook-alternative-freelancer",
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
