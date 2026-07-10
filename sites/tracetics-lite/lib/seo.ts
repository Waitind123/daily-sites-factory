import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://tracetics-lite.vercel.app",
    name: "Tracetics Lite",
    title: "Tracetics Lite — Plausible + Mixpanel funnel analytics, $9.9/mo",
    description:
      "Plausible has no funnels. Mixpanel costs $500/mo? 5 free funnel analyses, then $9.9/mo flat: drop-off tracking, step conversion, one-line SDK.",
    keywords: [
      "funnel analytics",
      "Mixpanel alternative",
      "Plausible funnel alternative",
      "Tracetics",
      "conversion funnel",
      "drop-off analysis",
      "indie hacker analytics",
      "SaaS funnel tracking",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://tracetics-lite.vercel.app",
    name: "Tracetics Lite",
    title: "Tracetics Lite — Plausible 没有漏斗？独立开发者 $9.9/月",
    description:
      "Plausible 做不了漏斗，Mixpanel $500/月太贵。免费体验 5 个漏斗分析，之后 $9.9/月：流失定位、步骤转化率、一行 SDK。",
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
    path: "/guide/plausible-funnel-alternative-indie-hackers",
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
