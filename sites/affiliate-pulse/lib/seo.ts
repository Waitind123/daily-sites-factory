import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://affiliate-pulse.vercel.app",
    name: "Affiliate Pulse",
    title: "Affiliate Pulse — Rewardful alternative for indie SaaS, $9.9/mo flat",
    description:
      "5 free affiliate programs. Rewardful $49+9%? $9.9/mo flat: Stripe-native tracking, commission calculator, zero revenue share.",
    keywords: [
      "affiliate tracking",
      "Rewardful alternative",
      "Stripe affiliate program",
      "commission tracking",
      "indie hacker affiliate",
      "SaaS referral program",
      "affiliate marketing tool",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://affiliate-pulse.vercel.app",
    name: "联盟追踪平替",
    title: "联盟追踪平替 — Rewardful 替代品，独立开发者 $9.9/月",
    description:
      "免费体验 5 个联盟计划。Rewardful 要 $49+9%？$9.9/月一口价：Stripe 原生追踪、佣金计算、零收入分成。",
    keywords: [
      "联盟追踪",
      "Rewardful 替代品",
      "Stripe 联盟计划",
      "佣金追踪",
      "独立开发者联盟",
      "SaaS 推荐计划",
      "联盟营销工具",
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
    path: "/guide/rewardful-alternative-indie-hackers",
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
