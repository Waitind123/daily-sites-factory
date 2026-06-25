import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://book-pulse-lovat.vercel.app",
    name: "Book Pulse",
    title: "Book Pulse — Calendly alternative for indie hackers, $9.9/mo scheduling",
    description:
      "5 free publishes. Calendly $12+/mo? $9.9/mo flat: indie booking pages, time zone sync, project showcase. No cookie banner. Bilingual EN/ZH.",
    keywords: [
      "Calendly alternative",
      "indie hacker scheduling",
      "booking page",
      "coffee chat scheduler",
      "time zone booking",
      "embed scheduling widget",
      "SavvyCal alternative",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://book-pulse-lovat.vercel.app",
    name: "Book Pulse",
    title: "Book Pulse — Calendly 平替，独立开发者 $9.9/月预约页",
    description:
      "免费发布 5 次。Calendly 要 $12+/月？$9.9/月一口价：独立开发者预约页、时区同步、项目展示。无 Cookie 弹窗，中英双语。",
    keywords: [
      "Calendly 替代品",
      "独立开发者预约",
      "预约页",
      "咖啡聊预约",
      "时区预约",
      "嵌入预约小部件",
      "SavvyCal 平替",
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
    path: "/guide/calendly-alternative-indie-hackers",
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
