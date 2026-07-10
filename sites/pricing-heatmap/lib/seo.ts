import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://pricing-heatmap-zeta.vercel.app",
    name: "Indie Pricing Heatmap",
    title: "Indie Pricing Heatmap — Hotjar alternative for /pricing pages, $29/mo",
    description:
      "5 free heatmap scans. Hotjar $39+/mo? $29/mo flat: attention heatmaps, drop-off analysis, layout fixes, and A/B playbook for indie SaaS pricing pages.",
    keywords: [
      "pricing page heatmap",
      "Hotjar alternative indie",
      "pricing page analytics",
      "session replay pricing page",
      "SaaS pricing conversion",
      "indie hacker heatmap",
      "pricing funnel drop-off",
      "Microsoft Clarity alternative",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://pricing-heatmap-zeta.vercel.app",
    name: "独立开发者定价页热力图",
    title: "定价页热力图 — Hotjar 替代品，独立开发者 $29/月",
    description:
      "免费体验 5 次扫描。Hotjar $39+/月？$29/月一口价：注意力热力图、流失分析、布局修复与 A/B 测试方案。",
    keywords: [
      "定价页热力图",
      "Hotjar 替代品",
      "定价页分析",
      "会话回放定价页",
      "SaaS 定价转化",
      "独立开发者热力图",
      "定价漏斗流失",
      "Clarity 替代品",
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
    path: "/guide/hotjar-alternative-pricing-page-heatmap",
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
