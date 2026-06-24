import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://remote-jobs.vercel.app",
  name: "远程工作板",
  title: "远程工作板 — 全球远程职位聚合，企业发帖 ¥699/年",
  description:
    "免费体验 5 次查看完整职位详情。200+ 远程岗位每日更新，透明薪资，React/Go/PM 智能筛选。企业 ¥699/年无限发帖。",
  keywords: [
    "远程工作",
    "remote jobs",
    "远程职位",
    "在家办公",
    "数字游民工作",
    "远程招聘",
    "work from home jobs",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/jobs", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/post", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/guide/find-remote-job-china", priority: 0.85, changeFrequency: "monthly" as const },
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
      price: "699",
      priceCurrency: "CNY",
      priceValidUntil: "2027-12-31",
    },
    description: siteConfig.description,
    url: siteConfig.url,
  };
}
