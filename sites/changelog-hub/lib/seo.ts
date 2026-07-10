import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://changelog-hub-henna.vercel.app",
    name: "Indie Changelog",
    title: "Indie Changelog — Beamer alternative, $29/mo",
    description:
      "5 free tries. Generate changelog pages, embed widgets, status snippets, and RSS. Built for indie hackers after Beamer's $49/mo hike.",
    keywords: [
      "changelog",
      "Beamer alternative",
      "AnnounceKit alternative",
      "indie hacker changelog",
      "SaaS release notes",
      "status page",
      "product updates",
      "micro saas",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://changelog-hub-henna.vercel.app",
    name: "Indie Changelog 发布台",
    title: "Indie Changelog 发布台 — Beamer 平替，$29/月",
    description:
      "免费体验 5 次生成 Changelog。Beamer $49/月太贵？$29/月发布产品更新日志、嵌入 Widget、状态页和 RSS，专为 indie hacker 设计。",
    keywords: [
      "changelog",
      "产品更新日志",
      "Beamer 替代",
      "AnnounceKit 替代",
      "indie hacker changelog",
      "SaaS 更新通知",
      "状态页",
      "产品发布",
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
  { path: "/publish", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/beamer-alternative-indie-changelog",
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
