import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://indie-tools.vercel.app",
  name: "独立开发者工具箱",
  title: "独立开发者工具箱 — 精选 Indie 工具评测与选型 $9.9/月",
  description:
    "免费体验 5 次深度评测。为 indie hacker 精选支付、邮件、托管、分析等工具，含定价对比、替代方案与实战选型建议。$9.9/月无限查阅。",
  keywords: [
    "独立开发者工具",
    "indie hacker tools",
    "SaaS 工具对比",
    "Polar vs Stripe",
    "indie 工具箱",
    "bootstrap 工具",
    "micro saas stack",
    "开发者工具目录",
    "无代码工具",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/tools", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/indie-developer-tool-stack",
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
