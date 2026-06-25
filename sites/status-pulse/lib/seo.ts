import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://status-pulse-chi.vercel.app",
    name: "Status Pulse",
    title: "Status Pulse — Statuspage.io alternative for indie devs, $9.9/mo flat",
    description:
      "5 free status pages. Statuspage.io costs $29+/mo? $9.9/mo flat: incident management, email subscribers, embeddable widget.",
    keywords: [
      "status page",
      "Statuspage.io alternative",
      "incident management",
      "indie hacker status page",
      "public status page",
      "uptime status",
      "service status",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://status-pulse-chi.vercel.app",
    name: "状态页发布",
    title: "状态页发布 — Statuspage.io 平替，独立开发者 $9.9/月",
    description:
      "免费体验 5 个状态页。Statuspage.io $29+/月太贵？$9.9/月一口价：事件管理、邮件订阅、可嵌入组件。",
    keywords: [
      "状态页",
      "Statuspage.io 替代品",
      "事件管理",
      "独立开发者状态页",
      "公开状态页",
      "服务状态",
      "status page",
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
  { path: "/pages", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/statuspage-alternative-indie-hackers",
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
