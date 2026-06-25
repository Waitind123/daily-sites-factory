import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://churn-pulse-pi.vercel.app",
    name: "Churn Pulse",
    title: "Churn Pulse — Baremetrics alternative for indie devs, $9.9/mo customer health",
    description:
      "5 free scans. Baremetrics $50+/mo? $9.9/mo flat: customer health scores, churn alerts, Stripe subscriptions only. Connect in 2 minutes.",
    keywords: [
      "customer health score",
      "churn prediction",
      "Baremetrics alternative",
      "Stripe churn alerts",
      "indie SaaS customer success",
      "churn risk monitoring",
      "subscription health",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://churn-pulse-pi.vercel.app",
    name: "客户健康分",
    title: "客户健康分 — Baremetrics 平替，独立开发者 $9.9/月流失预警",
    description:
      "免费体验 5 次扫描。Baremetrics 要 $50+/月？$9.9/月一口价：客户健康分、流失告警、仅 Stripe 订阅数据，2 分钟接入。",
    keywords: [
      "客户健康分",
      "流失预测",
      "Baremetrics 替代品",
      "Stripe 流失告警",
      "独立开发者客户成功",
      "流失风险监控",
      "订阅健康度",
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
    path: "/guide/baremetrics-churn-alternative-indie-hackers",
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
