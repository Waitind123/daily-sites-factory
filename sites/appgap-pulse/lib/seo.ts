import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://appgap-pulse.vercel.app",
    name: "AppGap Pulse",
    title: "AppGap Pulse — App Store 1-star review mining for indie hackers, $9.9/mo",
    description:
      "5 free scans. Cluster App Store negative reviews into startup ideas. Find market gaps from 1-star complaints before you build. $9.9/mo flat.",
    keywords: [
      "app store negative reviews",
      "startup ideas from reviews",
      "AppGaps alternative",
      "app store research tool",
      "indie hacker market research",
      "1 star review analysis",
      "product opportunity finder",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://appgap-pulse.vercel.app",
    name: "应用商店差评挖痛点",
    title: "应用商店差评挖痛点 — 从 1 星评论发现创业机会，$9.9/月",
    description:
      "免费体验 5 次扫描。将应用商店差评聚类为创业点子，在开发前发现市场空白。$9.9/月一口价。",
    keywords: [
      "应用商店差评分析",
      "差评挖创业点子",
      "App Store 市场调研",
      "独立开发者选品",
      "一星评论聚类",
      "市场空白发现",
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
    path: "/guide/app-store-negative-reviews-startup-ideas",
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

export const metadata = buildSiteMetadata({
  ...siteConfigByLocale.en,
  keywords: [...siteConfigByLocale.en.keywords],
});
