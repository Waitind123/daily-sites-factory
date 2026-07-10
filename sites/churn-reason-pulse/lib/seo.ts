import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://churn-reason-pulse.vercel.app",
    name: "Churn Reason Pulse",
    title: "Churn Reason Pulse — SaaS cancellation tracking for indie hackers, $29/mo",
    description:
      "5 free cancellation logs. ChartMogul shows churn % but not why. $29/mo flat: log reasons, categorize by price/feature/competitor, spot patterns.",
    keywords: [
      "churn reason tracking",
      "cancellation survey SaaS",
      "ChartMogul alternative",
      "exit survey indie SaaS",
      "churn analysis",
      "why customers cancel",
      "SaaS churn dashboard",
      "Baremetrics alternative",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://churn-reason-pulse.vercel.app",
    name: "流失原因追踪",
    title: "流失原因追踪 — 独立开发者 SaaS 取消原因采集，$29/月",
    description:
      "免费体验 5 次记录。ChartMogul 只显示流失率不记原因。$29/月一口价：记录原因、按价格/功能/竞品分类、发现规律。",
    keywords: [
      "流失原因追踪",
      "取消调研 SaaS",
      "ChartMogul 替代品",
      "退出调研",
      "流失分析",
      "客户为什么取消",
      "SaaS 流失看板",
      "Baremetrics 替代品",
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
    path: "/guide/saas-churn-reason-tracking-chartmogul-alternative",
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
