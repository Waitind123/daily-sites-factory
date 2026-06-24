import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://timezone-planner-delta.vercel.app",
  name: "跨时区会议",
  title: "跨时区会议规划 — 远程团队时区重叠可视化，$9.9/月",
  description:
    "免费体验 5 次。可视化全球团队工作时段重叠，自动推荐最公平会议时间，含痛苦指数和轮换建议。告别 Slack 里「什么时候方便？」",
  keywords: [
    "跨时区会议",
    "时区会议规划",
    "远程团队会议",
    "timezone meeting planner",
    "全球团队调度",
    "时区重叠",
    "远程办公会议",
    "distributed team scheduling",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/planner", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/remote-team-timezone-meeting",
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
