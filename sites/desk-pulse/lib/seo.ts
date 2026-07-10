import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://desk-pulse.vercel.app",
    name: "Desk Pulse",
    title: "Desk Pulse — Zendesk alternative for indie devs, $29/mo flat",
    description:
      "5 free ticket actions. Zendesk $98/agent? $29/mo flat: shared inbox, AI reply suggestions, knowledge base, no per-seat fees.",
    keywords: [
      "help desk",
      "Zendesk alternative",
      "customer support indie",
      "AI reply suggestions",
      "knowledge base",
      "shared inbox",
      "indie hacker support",
      "ticketing system",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://desk-pulse.vercel.app",
    name: "极简客服工单",
    title: "极简客服工单 — Zendesk 平替，独立开发者 $29/月",
    description:
      "免费体验 5 次。Zendesk $98/坐席？$29/月一口价：共享收件箱、AI 回复建议、知识库、不按坐席收费。",
    keywords: [
      "客服工单",
      "Zendesk 替代品",
      "独立开发者客服",
      "AI 回复建议",
      "知识库",
      "共享收件箱",
      "help desk",
      "Zendesk alternative",
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
  { path: "/inbox", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/zendesk-alternative-indie-hackers",
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
