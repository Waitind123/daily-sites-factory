import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://feature-vote.vercel.app",
  name: "Feature Vote",
  title: "Feature Vote — Canny 平替，独立开发者 $9.9/月",
  description:
    "免费体验 5 个功能投票板。Canny $79/月太贵？$9.9/月一口价：公开投票、路线图、嵌入组件，无限投票用户。",
  keywords: [
    "feature voting",
    "Canny alternative",
    "feature request board",
    "public roadmap",
    "user feedback tool",
    "indie SaaS feedback",
    "product roadmap tool",
    "功能投票",
    "Canny 替代品",
    "独立开发者反馈",
    "公开路线图",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/boards", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/canny-alternative-indie-hackers",
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
