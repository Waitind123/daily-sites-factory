import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://visa-live.vercel.app",
    name: "Visa Live",
    title: "Visa Live — Real-time digital nomad visa policy tracking, $9.9/mo",
    description:
      "Real-time policy updates, expiry reminders, and change alerts for 35+ digital nomad visa programs. 5 free tracks, then $9.9/mo.",
    keywords: [
      "visa policy real-time tracking",
      "digital nomad visa expiry",
      "portugal d8 income change",
      "thailand dtv policy update",
      "nomad visa tracker",
      "visa expiry reminder",
      "nomad list alternative",
      "relocateme visa 2026",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://visa-live.vercel.app",
    name: "签证政策实时追踪",
    title: "签证政策实时追踪 — 数字游民签证到期提醒+政策变更，$9.9/月",
    description:
      "35+ 数字游民签证实时政策更新、到期提醒与变更告警。免费体验 5 次，之后 $9.9/月。",
    keywords: [
      "签证政策实时追踪",
      "数字游民签证到期",
      "葡萄牙 D8 收入变更",
      "泰国 DTV 政策更新",
      "签证到期提醒",
      "nomad list 替代",
      "relocateme 签证 2026",
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
  { path: "/alerts", priority: 0.9, changeFrequency: "daily" as const },
  { path: "/visas", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/digital-nomad-visa-realtime-tracking",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
];

export function webApplicationJsonLd(locale: Locale = "en") {
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
