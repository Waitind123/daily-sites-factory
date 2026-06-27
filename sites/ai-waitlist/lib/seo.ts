import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://ai-waitlist-orpin.vercel.app",
    name: "AI Waitlist",
    title: "AI Waitlist — AI-powered waitlist validation for indie devs, $9.9/mo",
    description:
      "5 free AI waitlist analyses. Prefinery $99/mo? $9.9/mo flat: lead scoring, signup quality grades, launch recommendations, referral boost.",
    keywords: [
      "AI waitlist",
      "waitlist validation",
      "Prefinery alternative",
      "lead scoring waitlist",
      "pre-launch signup quality",
      "indie hacker waitlist",
      "product waitlist AI",
      "waitlist analytics",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://ai-waitlist-orpin.vercel.app",
    name: "AI 等候名单验证",
    title: "AI 等候名单验证 — AI 驱动报名质量评分，独立开发者 $9.9/月",
    description:
      "免费体验 5 次 AI 分析。Prefinery $99/月太贵？$9.9/月一口价：线索评分、报名质量分级、上线建议、推荐裂变。",
    keywords: [
      "AI 等候名单",
      "等候名单验证",
      "Prefinery 替代品",
      "报名质量评分",
      "独立开发者等候名单",
      "AI 线索评分",
      "产品等候名单",
      "waitlist validation",
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
  { path: "/lists", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/ai-waitlist-validation-indie-hackers",
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
