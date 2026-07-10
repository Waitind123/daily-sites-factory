import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://status-embed-lite.vercel.app",
    name: "Status Embed Lite",
    title: "Status Embed Lite — Statuspage embed widget alternative, $29/mo",
    description:
      "5 free embed widgets. Statuspage costs $299+/mo? $29/mo flat: one-line embed, auto incident detection, email subscribers.",
    keywords: [
      "status embed widget",
      "Statuspage alternative",
      "embeddable status badge",
      "status page iframe",
      "indie hacker status widget",
      "auto incident detection",
      "uptime status embed",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://status-embed-lite.vercel.app",
    name: "极简状态页",
    title: "极简状态页 — Statuspage 嵌入组件平替，$29/月",
    description:
      "免费体验 5 个嵌入组件。Statuspage $299+/月太贵？$29/月一口价：一行嵌入、自动事件检测、邮件订阅。",
    keywords: [
      "状态嵌入组件",
      "Statuspage 替代品",
      "可嵌入状态角标",
      "状态页 iframe",
      "独立开发者状态组件",
      "自动事件检测",
      "uptime 状态嵌入",
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
    path: "/guide/status-embed-widget-alternative",
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
