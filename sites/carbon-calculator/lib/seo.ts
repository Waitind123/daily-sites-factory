import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://carbon-calculator-wine.vercel.app",
  name: "远程碳足迹",
  title: "远程碳足迹 — 混合办公碳排放计算器，$9.9/月",
  description:
    "免费体验 5 次。计算远程 vs 通勤碳排放，三场景对比，支持 ESG 报告导出。独立开发者 & 中小团队 Scope 3 基线工具。",
  keywords: [
    "远程办公碳足迹",
    "碳排放计算器",
    "混合办公碳排",
    "Scope 3 排放",
    "ESG 报告",
    "居家办公碳排放",
    "carbon footprint calculator",
    "remote work emissions",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/calculate", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/remote-work-carbon-footprint",
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
