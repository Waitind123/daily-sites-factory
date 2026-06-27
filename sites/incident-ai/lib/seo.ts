import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://incident-ai.vercel.app",
    name: "Incident AI",
    title: "Incident AI — AI incident communication for indie devs, $9.9/mo",
    description:
      "5 free drafts. Statuspage $29/mo? $9.9/mo flat: paste alert → status update, customer email, Slack note, postmortem. Ship calm during outages.",
    keywords: [
      "AI incident communication",
      "status page alternative",
      "Statuspage.io alternative",
      "incident update generator",
      "indie hacker status page",
      "outage communication tool",
      "postmortem generator",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://incident-ai.vercel.app",
    name: "AI 事件摘要",
    title: "AI 事件摘要 — Statuspage 平替，独立开发者 $9.9/月",
    description:
      "免费体验 5 次。Statuspage 要 $29/月？$9.9/月一口价：粘贴告警 → 状态页更新、客户邮件、Slack 通知、复盘报告。宕机时从容沟通。",
    keywords: [
      "AI 事件摘要",
      "状态页替代品",
      "Statuspage 平替",
      "宕机通知生成",
      "独立开发者状态页",
      "事件沟通工具",
      "复盘报告生成",
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
  { path: "/draft", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/ai-incident-communication-indie-hackers",
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
