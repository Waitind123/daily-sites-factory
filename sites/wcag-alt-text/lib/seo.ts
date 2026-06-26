import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://wcag-alt-text.vercel.app",
    name: "AltText Pro",
    title: "AltText Pro — WCAG Alt-Text Generator for Agencies, $9.9/mo",
    description:
      "5 free generations. AltText.ai too expensive? $9.9/mo flat: batch WCAG 2.2 AA alt text, ADA compliance scoring, CSV export for web agencies.",
    keywords: [
      "WCAG alt text generator",
      "ADA compliance",
      "alt text tool",
      "AltText.ai alternative",
      "accessibility agency",
      "image alt text",
      "web accessibility",
      "micro saas",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://wcag-alt-text.vercel.app",
    name: "无障碍 Alt 文本",
    title: "无障碍 Alt 文本 — 网页代理商 WCAG 生成器，$9.9/月",
    description:
      "免费体验 5 次。AltText.ai 太贵？$9.9/月一口价：批量 WCAG 2.2 AA alt 文本、ADA 合规评分、CSV 导出，专为网页代理商设计。",
    keywords: [
      "WCAG alt 文本生成器",
      "ADA 合规",
      "alt 文本工具",
      "AltText.ai 替代品",
      "无障碍代理商",
      "图片 alt 文本",
      "网页无障碍",
      "微 SaaS",
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
  { path: "/generate", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/wcag-alt-text-compliance",
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
    applicationCategory: "DeveloperApplication",
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
