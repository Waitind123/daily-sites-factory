import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://stripe-pulse-two.vercel.app",
    name: "Stripe Pulse",
    title: "Stripe Pulse — ChartMogul alternative for indie devs, $29/mo flat",
    description:
      "5 free syncs. ChartMogul $79/mo? $29/mo flat: MRR, ARR, churn, customer movements. Connect Stripe in 2 minutes.",
    keywords: [
      "Stripe metrics",
      "MRR dashboard",
      "ChartMogul alternative",
      "Baremetrics alternative",
      "indie SaaS analytics",
      "Stripe revenue dashboard",
      "churn tracking",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://stripe-pulse-two.vercel.app",
    name: "Stripe 收入仪表盘",
    title: "Stripe 收入仪表盘 — ChartMogul 平替，独立开发者 $29/月",
    description:
      "免费体验 5 次同步。ChartMogul 要 $79/月？$29/月一口价：MRR、ARR、流失率、客户变动，2 分钟连接 Stripe。",
    keywords: [
      "Stripe 指标",
      "MRR 仪表盘",
      "ChartMogul 替代品",
      "Baremetrics 替代品",
      "独立开发者 SaaS 分析",
      "Stripe 收入仪表盘",
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
    path: "/guide/chartmogul-alternative-indie-hackers",
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
