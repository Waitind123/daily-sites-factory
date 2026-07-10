import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://bulk-landing-gen.vercel.app",
    name: "Bulk Landing Gen",
    title: "Bulk Landing Gen — Google Ads keyword pages in 60s $29/mo",
    description:
      "5 free batch runs. Paste Google Ads keywords, get customized landing pages per keyword with SEO meta. Export HTML for each ad group. Cheaper than Carrd + manual copy.",
    keywords: [
      "bulk landing page generator",
      "Google Ads landing pages",
      "keyword landing page",
      "per keyword landing page",
      "indie hacker ads",
      "dynares alternative",
      "landing page batch",
      "PPC landing page generator",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://bulk-landing-gen.vercel.app",
    name: "批量落地页生成",
    title: "批量落地页生成 — Google Ads 关键词落地页 60 秒批量生成 $29/月",
    description:
      "免费体验 5 次。粘贴 Google Ads 关键词列表，每个关键词自动生成定制落地页 + SEO meta，批量导出 HTML。比 Carrd 手动复制快 10 倍。",
    keywords: [
      "批量落地页生成",
      "Google Ads 落地页",
      "关键词落地页",
      "PPC 落地页生成",
      "独立开发者广告",
      "dynares 替代",
      "批量 HTML 导出",
      "广告关键词落地页",
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
    path: "/guide/google-ads-keyword-landing-pages",
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
