import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://testimonial-wall-sepia.vercel.app",
    name: "Testimonial Wall",
    title: "Testimonial Wall — Testimonial.to alternative, $9.9/mo",
    description:
      "5 free tries. Collect user praise, embed Wall of Love. Built for indie hackers after Testimonial.to's $40/mo white-label hike.",
    keywords: [
      "testimonial wall",
      "Testimonial.to alternative",
      "wall of love",
      "indie hacker social proof",
      "Senja alternative",
      "landing page testimonials",
      "micro saas",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://testimonial-wall-sepia.vercel.app",
    name: "独立开发者证言墙",
    title: "独立开发者证言墙 — Testimonial.to 平替，$9.9/月",
    description:
      "免费体验 5 次。收集用户好评，嵌入 Wall of Love。Testimonial.to 涨价后的极简替代，专为 indie hacker 打造。",
    keywords: [
      "用户证言",
      "testimonial wall",
      "Testimonial.to 替代",
      "indie hacker 社交证明",
      "wall of love",
      "用户好评收集",
      "Senja 替代",
      "落地页证言",
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
  { path: "/wall", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/testimonial-to-alternative-indie-hacker",
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
