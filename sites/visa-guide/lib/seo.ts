import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";

export { buildSiteMetadata } from "./site-seo";

export const siteConfig = {
  url: "https://visa-guide-tau.vercel.app",
  name: "数字游民签证指南",
  title: "数字游民签证指南 — 28 国远程签证对比数据库",
  description:
    "免费体验 5 次签证详情查询。收入门槛、停留时长、税务政策、申根通行一站式对比。告别 Reddit 碎片化信息，$9.9/月无限查阅。",
  keywords: [
    "数字游民签证",
    "digital nomad visa",
    "远程工作签证",
    "葡萄牙 D8 签证",
    "泰国 DTV",
    "西班牙数字游民签证",
    "nomad visa comparison",
    "签证收入要求",
  ],
};

export const SITE_URL = siteConfig.url;

export const metadata: Metadata = buildSiteMetadata(siteConfig);

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/visas", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/digital-nomad-visa-china",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
];

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.name,
    applicationCategory: "ReferenceApplication",
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
