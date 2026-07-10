import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://landing-generator-opal.vercel.app",
    name: "Landing Generator",
    title: "Landing Generator — AI landing page HTML in 30s $29/mo",
    description:
      "5 free tries. Describe your product, get deployable HTML in 30 seconds. 4 styles, SEO meta, export to Vercel. Cheaper and faster than Carrd or Webflow.",
    keywords: [
      "landing page generator",
      "AI landing page",
      "indie hacker landing page",
      "HTML export",
      "levelsio landing page",
      "SaaS landing page",
      "landing page builder",
      "indie landing page tool",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://landing-generator-opal.vercel.app",
    name: "Landing Page 生成器",
    title: "Landing Page 生成器 — AI 一键生成落地页 HTML $29/月",
    description:
      "免费体验 5 次。输入产品描述，30 秒生成 levelsio 风格落地页，导出 HTML 或一键托管。比 Carrd $19/年 更灵活，比 Webflow 快 10 倍。",
    keywords: [
      "Landing Page 生成器",
      "落地页生成",
      "AI landing page generator",
      "indie hacker landing page",
      "一键生成落地页",
      "HTML 导出",
      "levelsio 风格",
      "SaaS landing page",
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
    path: "/guide/indie-landing-page-generator",
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
