import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://status-lite-alt.vercel.app",
    name: "Status Lite",
    title: "Status Lite — Statuspage.io & StatusEmbed alternative, $29/mo flat",
    description:
      "5 free status pages. Statuspage.io $299/mo or StatusEmbed $15/mo? $29/mo flat: incident management, email subscribers, embeddable widget.",
    keywords: [
      "status page",
      "Statuspage.io alternative",
      "StatusEmbed alternative",
      "incident management",
      "indie hacker status page",
      "public status page",
      "service status",
      "minimal status page",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://status-lite-alt.vercel.app",
    name: "极简状态页",
    title: "极简状态页 — Statuspage.io / StatusEmbed 平替，$29/月",
    description:
      "免费体验 5 个状态页。Statuspage.io $299/月或 StatusEmbed $15/月太贵？$29/月一口价：事件管理、邮件订阅、可嵌入组件。",
    keywords: [
      "状态页",
      "Statuspage.io 替代品",
      "StatusEmbed 替代品",
      "事件管理",
      "独立开发者状态页",
      "公开状态页",
      "极简状态页",
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
