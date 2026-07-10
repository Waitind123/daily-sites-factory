import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://ai-profit-pulse.vercel.app",
    name: "AI Profit Pulse",
    title: "AI Profit Pulse — per-customer profit tracking for indie AI SaaS, $29/mo",
    description:
      "5 free analyses. Stripe revenue up but OpenAI bills rising? See profit per customer: revenue vs AI cost. $29/mo flat.",
    keywords: [
      "AI SaaS profit tracking",
      "per-customer margin",
      "OpenAI cost per customer",
      "indie hacker AI analytics",
      "Stripe AI profit dashboard",
      "customer profitability",
      "AI API cost tracking",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://ai-profit-pulse.vercel.app",
    name: "AI 客户利润追踪",
    title: "AI 客户利润追踪 — 独立开发者按客户利润率分析，$29/月",
    description:
      "免费体验 5 次分析。Stripe 收入增长但 OpenAI 账单涨更快？按客户查看利润：收入对比 AI 成本。$29/月一口价。",
    keywords: [
      "AI SaaS 利润追踪",
      "按客户利润率",
      "OpenAI 按客户成本",
      "独立开发者 AI 分析",
      "Stripe AI 利润仪表盘",
      "客户盈利能力",
      "AI API 成本追踪",
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
  { path: "/dashboard", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/ai-saas-customer-profit-tracking",
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
