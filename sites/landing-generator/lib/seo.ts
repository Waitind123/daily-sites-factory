import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://landing-generator.vercel.app",
  name: "Landing 生成器",
  title: "Landing Page 生成器 — AI 一键生成落地页 HTML $9.9/月",
  description:
    "免费体验 5 次。输入产品描述，30 秒生成 levelsio 风格落地页，导出 HTML 或一键托管。比 Carrd $19/年 更灵活，比 Webflow 快 10 倍。",
  keywords: [
    "Landing Page 生成器",
    "落地页生成",
    "AI landing page generator",
    "indie hacker landing page",
    "一键生成落地页",
    "HTML 导出",
    "levelsio 风格",
    "SaaS landing page",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/studio", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/indie-landing-page-generator",
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
