import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://pricing-convert.vercel.app",
    name: "Pricing Convert",
    title: "Pricing Convert — pricing page conversion diagnosis for indie SaaS, $9.9/mo",
    description:
      "5 free diagnoses. Hotjar $39+/mo? $9.9/mo flat: heatmap zones, drop-off analysis, layout fixes, and A/B playbook for /pricing pages.",
    keywords: [
      "pricing page conversion",
      "pricing page diagnosis",
      "Hotjar alternative indie",
      "VWO alternative",
      "pricing funnel analysis",
      "SaaS pricing conversion",
      "indie hacker pricing page",
      "A/B test pricing page",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://pricing-convert.vercel.app",
    name: "定价页转化诊断",
    title: "定价页转化诊断 — 独立开发者定价页流失分析，$9.9/月",
    description:
      "免费体验 5 次诊断。Hotjar $39+/月？$9.9/月一口价：热力图区域、流失分析、布局修复与 A/B 测试方案。",
    keywords: [
      "定价页转化",
      "定价页诊断",
      "Hotjar 替代品",
      "VWO 替代品",
      "定价漏斗分析",
      "SaaS 定价转化",
      "独立开发者定价页",
      "定价页 A/B 测试",
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
  { path: "/diagnose", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/pricing-page-conversion-diagnosis-indie-hackers",
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
