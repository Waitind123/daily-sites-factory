import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://ai-headshots-navy.vercel.app",
  name: "AI 证件照",
  title: "AI 证件照 — 30 秒生成 LinkedIn 专业头像",
  description:
    "免费体验 5 次。上传自拍，AI 生成商务、休闲、创意专业证件照，适用于 LinkedIn、简历、工牌。$9.9/月起，无限生成。",
  keywords: [
    "AI 证件照",
    "AI headshot",
    "LinkedIn 头像",
    "专业头像生成",
    "AI professional headshot",
    "证件照 AI",
    "resume photo AI",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/studio", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/guide/linkedin-headshot", priority: 0.8, changeFrequency: "monthly" as const },
];

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "PhotographyApplication",
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
