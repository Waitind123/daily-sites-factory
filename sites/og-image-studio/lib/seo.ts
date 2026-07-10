import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://og-image-studio-cyan.vercel.app",
    name: "OG Image Studio",
    title: "OG Image Generator — Bannerbear alternative, $29/mo",
    description:
      "5 free tries. Generate 1200×630 social share images, meta tags, and Next.js snippets. Built for indie hackers after Bannerbear's $49/mo hike.",
    keywords: [
      "OG image generator",
      "Open Graph image",
      "Bannerbear alternative",
      "social share image",
      "twitter card image",
      "indie hacker OG",
      "SaaS share image",
      "meta tags generator",
      "product launch image",
      "micro saas",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://og-image-studio-cyan.vercel.app",
    name: "OG 图生成器",
    title: "OG Image 生成器 — Bannerbear 平替，$29/月",
    description:
      "免费体验 5 次生成 OG 社交分享图。Bannerbear $49/月太贵？$29/月一键生成 1200×630 Open Graph 图片，导出 meta 标签和 Next.js 代码片段。",
    keywords: [
      "OG image generator",
      "Open Graph 图片",
      "Bannerbear 替代",
      "社交分享图",
      "twitter card image",
      "indie hacker OG",
      "SaaS 分享图",
      "meta tags generator",
      "产品发布图",
      "独立开发者工具",
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
  { path: "/studio", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/bannerbear-alternative-og-image",
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
    applicationCategory: "DesignApplication",
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
