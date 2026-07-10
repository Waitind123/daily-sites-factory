import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://visa-tracker-lilac.vercel.app",
    name: "Visa Tracker",
    title: "Visa Tracker — Digital nomad visa policy & expiry alerts, $29/mo",
    description:
      "Track 35+ digital nomad visa policies with real-time change alerts and expiry reminders. 5 free tracks, then $29/mo.",
    keywords: [
      "digital nomad visa tracker",
      "visa expiry reminder",
      "nomad visa policy updates",
      "portugal d8 visa changes",
      "thailand dtv renewal",
      "visa overstay alert",
      "nomad list visa alternative",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://visa-tracker-lilac.vercel.app",
    name: "签证追踪器",
    title: "签证追踪器 — 数字游民签证政策与到期提醒，$29/月",
    description:
      "追踪 35+ 数字游民签证政策，实时变更告警与到期提醒。免费体验 5 次，之后 $29/月。",
    keywords: [
      "数字游民签证",
      "签证到期提醒",
      "签证政策更新",
      "葡萄牙 D8 签证",
      "泰国 DTV 续签",
      "签证逾期",
      "nomad list 签证",
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
  { path: "/visas", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/digital-nomad-visa-expiry-tracking",
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
