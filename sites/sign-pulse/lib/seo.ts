import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://sign-pulse.vercel.app",
    name: "Sign Pulse",
    title: "Sign Pulse — PandaDoc alternative for small teams, $9.9/mo flat",
    description:
      "5 free document actions. PandaDoc $19–49/user? $9.9/mo flat: proposals, e-signatures, contracts — no per-seat tax.",
    keywords: [
      "PandaDoc alternative",
      "e-signature",
      "document signing",
      "proposal generator",
      "contract management",
      "electronic signature",
      "small team docs",
      "indie SaaS",
      "DocuSign alternative",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://sign-pulse.vercel.app",
    name: "极简签署台",
    title: "极简签署台 — PandaDoc 平替，小团队 $9.9/月",
    description:
      "免费体验 5 次。PandaDoc $19–49/席位？$9.9/月一口价：提案、电子签名、合同管理 — 不按人头收费。",
    keywords: [
      "PandaDoc 替代品",
      "电子签名",
      "文档签署",
      "提案生成器",
      "合同管理",
      "电子签章",
      "小团队文档",
      "独立开发者工具",
      "DocuSign 替代品",
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
    path: "/guide/pandadoc-alternative-small-teams",
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
