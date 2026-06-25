import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://link-pulse.vercel.app",
    name: "Link Pulse",
    title: "Link Pulse — Bitly alternative for indie devs, $9.9/mo flat",
    description:
      "5 free short links. Bitly $35/mo? $9.9/mo flat: branded links, click analytics, UTM tracking. Ship campaigns in 30 seconds.",
    keywords: [
      "URL shortener",
      "link analytics",
      "Bitly alternative",
      "UTM tracking",
      "indie hacker marketing",
      "click stats",
      "branded short links",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://link-pulse.vercel.app",
    name: "短链点击统计",
    title: "短链点击统计 — Bitly 平替，独立开发者 $9.9/月",
    description:
      "免费体验 5 条短链。Bitly 要 $35/月？$9.9/月一口价：品牌短链、点击分析、UTM 追踪，30 秒上线营销活动。",
    keywords: [
      "短链生成",
      "链接点击统计",
      "Bitly 替代品",
      "UTM 追踪",
      "独立开发者营销",
      "点击分析",
      "品牌短链",
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
  { path: "/dashboard", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/bitly-alternative-indie-hackers",
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
