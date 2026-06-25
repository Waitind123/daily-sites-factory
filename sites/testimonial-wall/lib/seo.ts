import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://testimonial-wall.vercel.app",
  name: "证言墙",
  title: "证言墙 — 独立开发者用户好评收集，Testimonial.to 平替",
  description:
    "免费体验 5 次生成证言墙。Testimonial.to 去品牌 $40/月太贵？$9.9/月收集用户好评、嵌入 Wall of Love，专为 indie hacker 设计。",
  keywords: [
    "用户证言",
    "testimonial wall",
    "Testimonial.to 替代",
    "indie hacker 社交证明",
    "wall of love",
    "用户好评收集",
    "Senja 替代",
    "landing page 证言",
    "独立开发者工具",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/build", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/testimonial-to-alternative-indie-hacker",
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
