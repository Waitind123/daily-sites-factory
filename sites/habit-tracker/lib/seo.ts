import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://habit-tracker.vercel.app",
    name: "Habit Tracker",
    title: "Habit Tracker — Minimal daily check-in, $9.9/mo",
    description:
      "5 free check-ins. Habitica too gamified? $9.9/mo flat: one-tap check-in, streak tracking, weekly reports — no RPG quests.",
    keywords: [
      "habit tracker",
      "Habitica alternative",
      "daily check-in",
      "streak tracker",
      "habit building",
      "micro saas",
      "indie hacker",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://habit-tracker.vercel.app",
    name: "习惯打卡",
    title: "习惯打卡 — 极简习惯追踪，$9.9/月",
    description:
      "免费体验 5 次打卡。Habitica 太游戏化？$9.9/月一口价：一键打卡、连续天数、周报表，没有 RPG 任务。",
    keywords: [
      "习惯打卡",
      "习惯追踪",
      "Habitica 替代品",
      "每日打卡",
      "习惯养成",
      "连续打卡",
      "自律工具",
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
  { path: "/track", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/guide/build-daily-habit", priority: 0.85, changeFrequency: "monthly" as const },
];

export function softwareApplicationJsonLd(locale: Locale = "en") {
  const cfg = getSiteConfig(locale);
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: cfg.name,
    applicationCategory: "HealthApplication",
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
