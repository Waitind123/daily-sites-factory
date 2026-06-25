import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://invoice-desk-three.vercel.app",
    name: "Invoice Desk",
    title: "Invoice Desk — HoneyBook alternative for freelancers, $9.9/mo flat",
    description:
      "5 free invoices. HoneyBook $66/mo? $9.9/mo flat: professional invoices, auto receipts, outstanding tracker. Ship billing in 60 seconds.",
    keywords: [
      "invoice software",
      "freelance invoicing",
      "HoneyBook alternative",
      "Bonsai alternative",
      "receipt generator",
      "solo freelancer billing",
      "invoice receipt management",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://invoice-desk-three.vercel.app",
    name: "发票收据管理",
    title: "发票收据管理 — HoneyBook 平替，自由职业者 $9.9/月",
    description:
      "免费体验 5 张发票。HoneyBook 要 $66/月？$9.9/月一口价：专业发票、自动收据、待收追踪，60 秒完成开账。",
    keywords: [
      "发票软件",
      "自由职业开票",
      "HoneyBook 替代品",
      "Bonsai 替代品",
      "收据生成",
      "独立开发者账单",
      "发票收据管理",
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
  { path: "/invoices", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/honeybook-invoice-alternative-freelancer",
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
