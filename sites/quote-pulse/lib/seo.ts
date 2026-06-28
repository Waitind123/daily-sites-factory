import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://quote-pulse.vercel.app",
    name: "Quote Pulse",
    title: "Quote Pulse — HoneyBook alternative for freelancers, $9.9/mo flat",
    description:
      "5 free quote actions. HoneyBook $36/mo? $9.9/mo flat: proposals, contracts, invoices — no 89% price hike.",
    keywords: [
      "freelance quote",
      "HoneyBook alternative",
      "freelancer invoice",
      "proposal generator",
      "contract template",
      "freelance contract",
      "indie freelancer tools",
      "client management",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://quote-pulse.vercel.app",
    name: "极简报价单",
    title: "极简报价单 — HoneyBook 平替，自由职业者 $9.9/月",
    description:
      "免费体验 5 次。HoneyBook $36/月？$9.9/月一口价：报价、合同、发票 — 不怕 89% 涨价。",
    keywords: [
      "自由职业报价",
      "HoneyBook 替代品",
      "自由职业发票",
      "提案生成器",
      "合同模板",
      "自由职业合同",
      "独立开发者工具",
      "客户管理",
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
  { path: "/quotes", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/honeybook-alternative-freelancers",
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
