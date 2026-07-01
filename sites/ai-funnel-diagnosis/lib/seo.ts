import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://ai-funnel-diagnosis.vercel.app",
    name: "AI Funnel Diagnosis",
    title: "AI Funnel Diagnosis — Mixpanel alternative with AI fix suggestions, $9.9/mo",
    description:
      "5 free AI funnel diagnoses. Paste funnel data, get drop-off analysis + prioritized fix plan. Mixpanel costs $500/mo? $9.9/mo flat for indie hackers.",
    keywords: [
      "AI funnel diagnosis",
      "Mixpanel alternative",
      "conversion funnel analysis",
      "drop-off fix suggestions",
      "indie hacker analytics",
      "funnel leak detection",
      "SaaS conversion optimization",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://ai-funnel-diagnosis.vercel.app",
    name: "AI 漏斗诊断",
    title: "AI 漏斗诊断 — Mixpanel 平替 + AI 修复建议，$9.9/月",
    description:
      "免费体验 5 次 AI 漏斗诊断。粘贴漏斗数据，获得流失分析 + 优先级修复方案。Mixpanel $500/月太贵？独立开发者 $9.9/月一口价。",
    keywords: [
      "AI 漏斗诊断",
      "Mixpanel 替代品",
      "转化漏斗分析",
      "流失修复建议",
      "独立开发者分析",
      "漏斗漏洞检测",
      "SaaS 转化优化",
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
    path: "/guide/ai-funnel-diagnosis-mixpanel-alternative",
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
