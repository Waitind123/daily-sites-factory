import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://meetup-alt.vercel.app",
    name: "MeetupAlt",
    title: "MeetupAlt — community-owned Meetup.com alternative $9.9/mo",
    description:
      "Own your attendee data. Embeddable RSVP widget, custom event pages, CSV export. 5 free tries. $9.9/mo vs Meetup $25-45/mo organizer fee.",
    keywords: [
      "meetup alternative",
      "meetup.com replacement",
      "community event platform",
      "RSVP widget embed",
      "attendee data export",
      "indie organizer tool",
      "heylo alternative",
      "openmeet alternative",
      "event RSVP management",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://meetup-alt.vercel.app",
    name: "Meetup 替代品",
    title: "Meetup 替代品 — 社区自有数据的 Meetup.com 平替 $9.9/月",
    description:
      "参与者数据归你所有。可嵌入 RSVP 组件、自定义活动页、CSV 导出。免费体验 5 次。$9.9/月 vs Meetup 组织者 $25-45/月。",
    keywords: [
      "meetup 替代品",
      "meetup.com 替代",
      "社区活动平台",
      "RSVP 嵌入组件",
      "参与者数据导出",
      "indie 组织者工具",
      "线下聚会管理",
      "活动 RSVP 管理",
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
    path: "/guide/meetup-alternative-indie-organizers",
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
