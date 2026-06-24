import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://nomad-cities.vercel.app",
  name: "数字游民城市榜",
  title: "数字游民城市榜 — 2026 远程工作最佳城市排名",
  description:
    "免费体验 5 次。生活成本、网速、安全、签证友好度数据驱动排名。200+ 城市，帮数字游民选下一站。会员解锁完整数据。",
  keywords: [
    "数字游民",
    "数字游民城市",
    "remote work city",
    "nomad list 中文",
    "远程工作 城市",
    "清迈 数字游民",
    "里斯本 远程工作",
    "digital nomad cities",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/guide/best-digital-nomad-cities", priority: 0.8, changeFrequency: "monthly" as const },
];

export function webApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: siteConfig.description,
    url: siteConfig.url,
  };
}
