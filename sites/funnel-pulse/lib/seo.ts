import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://funnel-pulse-lyart.vercel.app",
    name: "Funnel Pulse",
    title: "Funnel Pulse — Mixpanel alternative for indie hackers, $9.9/mo flat",
    description:
      "5 free funnel analyses. Mixpanel costs $500/mo? $9.9/mo flat: drop-off tracking, step conversion rates, one-line SDK.",
    keywords: [
      "funnel analytics",
      "Mixpanel alternative",
      "conversion funnel",
      "drop-off analysis",
      "indie hacker analytics",
      "SaaS funnel tracking",
      "user journey analytics",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://funnel-pulse-lyart.vercel.app",
    name: "漏斗分析",
    title: "Funnel Pulse — Mixpanel 平替，独立开发者 $9.9/月",
    description:
      "免费体验 5 个漏斗分析。Mixpanel $500/月太贵？$9.9/月一口价：流失定位、步骤转化率、一行 SDK 接入。",
    keywords: [
      "漏斗分析",
      "Mixpanel 替代品",
      "转化漏斗",
      "流失分析",
      "独立开发者分析",
      "SaaS 漏斗追踪",
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
  { path: "/funnels", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/mixpanel-alternative-indie-hackers",
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
