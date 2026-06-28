import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://meetup-host.vercel.app",
    name: "Meetup Host",
    title: "Meetup Host — lightweight RSVP, waitlist & check-in $9.9/mo",
    description:
      "5 free event manages. Cheaper than Meetup.com for indie organizers: auto waitlist, capacity control, check-in view & reminder templates. $9.9/mo unlimited.",
    keywords: [
      "meetup organizer tool",
      "event RSVP management",
      "waitlist queue",
      "indie hacker meetup",
      "meetup alternative",
      "community event management",
      "event check-in",
      "free meetup RSVP",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://meetup-host.vercel.app",
    name: "线下 Meetup 组织",
    title: "线下 Meetup 组织 — 轻量 RSVP 候补与签到管理 $9.9/月",
    description:
      "免费体验 5 次活动管理。比 Meetup.com 便宜 10 倍的 indie 线下聚会工具：自动候补队列、容量控制、签到视图、提醒模板。$9.9/月无限活动。",
    keywords: [
      "meetup 组织工具",
      "活动 RSVP 管理",
      "候补名单",
      "线下聚会",
      "indie hacker meetup",
      "社区活动管理",
      "meetup alternative",
      "活动签到",
      "免费聚会 RSVP",
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
  { path: "/events", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/organize-indie-meetup-china",
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
