import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://ai-headshots-navy.vercel.app",
    name: "AI Headshots",
    title: "AI Headshots — LinkedIn professional portraits in 30 seconds, $29/mo",
    description:
      "5 free tries. Upload a selfie, AI generates corporate, casual, creative headshots for LinkedIn & resume. $29/mo unlimited.",
    keywords: [
      "AI headshot",
      "LinkedIn headshot",
      "professional headshot AI",
      "AI portrait generator",
      "corporate headshot",
      "resume photo AI",
      "PhotoAI alternative",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://ai-headshots-navy.vercel.app",
    name: "AI 证件照",
    title: "AI 证件照 — 30 秒生成领英专业头像，$29/月",
    description:
      "免费体验 5 次。上传自拍，AI 生成商务、休闲、创意专业证件照，适用于领英、简历、工牌。$29/月起不限量。",
    keywords: [
      "AI 证件照",
      "领英头像",
      "专业头像生成",
      "AI 商务照",
      "证件照 AI",
      "简历照片",
      "PhotoAI 替代品",
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
  { path: "/studio", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/linkedin-headshot",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
];

export function softwareApplicationJsonLd(locale: Locale = "en") {
  const cfg = getSiteConfig(locale);
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: cfg.name,
    applicationCategory: "PhotographyApplication",
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
