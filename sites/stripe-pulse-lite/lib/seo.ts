import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://stripe-pulse-lite.vercel.app",
    name: "Stripe Pulse Lite",
    title: "Stripe Pulse Lite — Baremetrics alternative for indie devs, $19.9/mo",
    description:
      "5 free syncs. Baremetrics $99/mo? $19.9/mo flat: MRR, churn, cohort retention. Connect Stripe in 2 minutes.",
    keywords: [
      "Stripe subscription analytics",
      "MRR dashboard",
      "Baremetrics alternative",
      "ChartMogul alternative",
      "cohort retention",
      "indie SaaS analytics",
      "churn tracking",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://stripe-pulse-lite.vercel.app",
    name: "Indie 订阅分析",
    title: "Indie 订阅分析 — Baremetrics 平替，独立开发者 $19.9/月",
    description:
      "免费体验 5 次同步。Baremetrics 要 $99/月？$19.9/月一口价：MRR、流失率、队列留存，2 分钟连接 Stripe。",
    keywords: [
      "Stripe 订阅分析",
      "MRR 仪表盘",
      "Baremetrics 替代品",
      "ChartMogul 替代品",
      "队列留存",
      "独立开发者 SaaS 分析",
      "流失率追踪",
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
    path: "/guide/baremetrics-alternative-indie-hackers",
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
      price: "19.9",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
    },
    description: cfg.description,
    url: cfg.url,
  };
}
