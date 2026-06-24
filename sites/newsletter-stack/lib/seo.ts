import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://newsletter-stack.vercel.app",
  name: "Newsletter 工具对比",
  title: "Newsletter 工具对比 — Substack vs Beehiiv vs ConvertKit 深度评测 $9.9/月",
  description:
    "免费体验 5 次深度对比。Substack、Beehiiv、ConvertKit、Mailchimp 定价、功能、迁移成本一目了然。Indie Hacker 选邮件工具不再踩坑。",
  keywords: [
    "Newsletter 工具对比",
    "Substack vs Beehiiv",
    "邮件营销工具评测",
    "newsletter platform comparison",
    "ConvertKit 替代",
    "独立开发者 newsletter",
    "邮件工具选型",
    "indie hacker newsletter",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/compare", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/newsletter-tool-comparison-indie",
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
