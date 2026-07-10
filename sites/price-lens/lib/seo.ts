import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://price-lens-theta.vercel.app",
    name: "PriceLens",
    title: "PriceLens — Pricing page conversion audit for indie hackers, $29/mo",
    description:
      "5 free pricing page audits. Hotjar $39/mo? $29/mo flat: heatmap zones, drop-off analysis, A/B test suggestions for your /pricing page.",
    keywords: [
      "pricing page optimization",
      "conversion rate optimization",
      "pricing page audit",
      "Hotjar alternative",
      "heatmap analysis",
      "indie hacker tools",
      "SaaS pricing conversion",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://price-lens-theta.vercel.app",
    name: "定价页转化诊断",
    title: "PriceLens — 定价页转化诊断，独立开发者 $29/月",
    description:
      "免费体验 5 次定价页诊断。Hotjar $39/月太贵？$29/月一口价：热力图分区、流失分析、A/B 测试建议。",
    keywords: [
      "定价页优化",
      "转化率优化",
      "定价页诊断",
      "Hotjar 替代品",
      "热力图分析",
      "独立开发者工具",
      "SaaS 定价转化",
    ],
    locale: "zh_CN",
  },
} as const;

export const siteConfig = siteConfigByLocale.zh;

export const SITE_URL = siteConfig.url;

export function getSiteConfig(locale: Locale) {
  return siteConfigByLocale[locale];
}

export async function buildLocaleMetadata(locale: Locale): Promise<Metadata> {
  const cfg = getSiteConfig(locale);
  return buildSiteMetadata({ ...cfg, keywords: [...cfg.keywords] });
}

export const publicPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/analyze", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/pricing-page-conversion-audit",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
];

export function softwareApplicationJsonLd(locale: Locale = "en") {
  const cfg = getSiteConfig(locale);
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: cfg.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "9.9",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
    },
    description: cfg.description,
    url: cfg.url,
  };
}
