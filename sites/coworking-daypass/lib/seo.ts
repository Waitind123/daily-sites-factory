import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://coworking-daypass.vercel.app",
    name: "DayPass Hub",
    title: "DayPass Hub — Book coworking day passes same-day, $29/mo",
    description:
      "5 free bookings. Live inventory, verified WiFi, video-call-ready spaces for traveling nomads. Croissant/Deskpass alternative.",
    keywords: [
      "coworking day pass",
      "day pass booking",
      "digital nomad coworking",
      "Croissant alternative",
      "Deskpass alternative",
      "same day coworking",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://coworking-daypass.vercel.app",
    name: "日票通",
    title: "日票通 — 联合办公日票当日预订，WiFi 稳定有保障",
    description:
      "免费体验 5 次预订联合办公日票。出差数字游民当日可用工位，实时库存、WiFi 实测、视频会议友好筛选。$29/月无限预订。",
    keywords: [
      "联合办公日票",
      "coworking day pass",
      "日票预订",
      "数字游民办公",
      "出差办公",
      "共享办公日票",
      "coworking booking",
      "当日工位",
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
  { path: "/passes", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/book-coworking-day-pass-same-day",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
];

export function softwareApplicationJsonLd(locale: Locale = "zh") {
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
    inLanguage: locale === "zh" ? "zh-CN" : "en",
  };
}
