import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://zapier-pulse.vercel.app",
    name: "Zapier Pulse",
    title: "Zapier Pulse — Zapier alternative for indie devs, $9.9/mo flat",
    description:
      "5 free webhook automations. Zapier too expensive? $9.9/mo flat: webhook → HTTP forwarding, cron triggers, run history.",
    keywords: [
      "Zapier alternative",
      "webhook automation",
      "indie hacker automation",
      "cheap Zapier replacement",
      "webhook to HTTP",
      "cron automation",
      "Make.com alternative",
      "n8n alternative indie",
      "workflow automation indie",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://zapier-pulse.vercel.app",
    name: "Zapier 极简替代品",
    title: "Zapier Pulse — Zapier 平替，独立开发者 $9.9/月",
    description:
      "免费体验 5 条 Webhook 自动化。Zapier 太贵？$9.9/月一口价：Webhook → HTTP 转发、Cron 定时、运行日志。",
    keywords: [
      "Zapier 替代品",
      "Webhook 自动化",
      "独立开发者自动化",
      "便宜 Zapier 替代",
      "Webhook 转发",
      "Cron 自动化",
      "Make.com 替代",
      "工作流自动化",
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
  { path: "/flows", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/zapier-alternative-indie-hackers",
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
    applicationCategory: "DeveloperApplication",
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
