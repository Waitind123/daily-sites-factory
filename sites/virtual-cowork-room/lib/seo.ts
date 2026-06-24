import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://virtual-cowork-room.vercel.app",
  name: "远程共工室",
  title: "远程共工室 — 虚拟专注空间，告别远程孤独",
  description:
    "免费体验 5 次共工会话。安静虚拟共工环境、番茄钟、白噪音、虚拟同伴陪伴。远程工作者不再独自办公，$9.9/月无限使用。",
  keywords: [
    "远程共工室",
    "虚拟共工",
    "virtual coworking",
    "远程办公孤独",
    "专注空间",
    "番茄钟",
    "白噪音",
    "body doubling",
    "远程工作者",
    "indie hacker",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/room", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/remote-work-loneliness",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
];

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.name,
    applicationCategory: "ProductivityApplication",
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
