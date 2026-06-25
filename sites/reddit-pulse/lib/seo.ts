import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://reddit-pulse-six.vercel.app",
    name: "Reddit Pulse",
    title: "Reddit Pulse — GummySearch alternative for indie hackers, $9.9/mo",
    description:
      "5 free pain point searches. GummySearch shut down? $9.9/mo flat: mine Reddit for 'I wish' and 'looking for alternative' signals.",
    keywords: [
      "reddit pain points",
      "GummySearch alternative",
      "SaaS idea validation",
      "reddit audience research",
      "indie hacker research",
      "product validation tool",
      "reddit mining tool",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://reddit-pulse-six.vercel.app",
    name: "Reddit 痛点挖掘",
    title: "Reddit Pulse — GummySearch 平替，独立开发者 $9.9/月",
    description:
      "免费体验 5 次痛点搜索。GummySearch 已关停？$9.9/月一口价：挖掘 Reddit「我希望」和「寻找替代」信号。",
    keywords: [
      "Reddit 痛点挖掘",
      "GummySearch 替代品",
      "SaaS 想法验证",
      "Reddit 受众研究",
      "独立开发者调研",
      "产品验证工具",
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
  { path: "/mine", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/gummysearch-alternative-indie-hackers",
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
