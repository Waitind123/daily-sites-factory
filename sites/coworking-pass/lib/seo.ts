import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://coworking-pass-five.vercel.app",
    name: "Coworking Pass",
    title: "Coworking Pass — Day pass booking for digital nomads, $29/mo",
    description:
      "5 free day-pass bookings. Croissant $49/mo? $29/mo flat: compare coworking day passes, WiFi data, instant booking across 40+ cities.",
    keywords: [
      "coworking day pass",
      "Croissant alternative",
      "Deskpass alternative",
      "digital nomad coworking",
      "day pass booking",
      "coworking space finder",
      "nomad desk booking",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://coworking-pass-five.vercel.app",
    name: "联合办公日票",
    title: "联合办公日票 — 数字游民日票预订，$29/月",
    description:
      "免费体验 5 次日票预订。Croissant $49/月太贵？$29/月一口价：40+ 城市日票比价、WiFi 数据、即时预订。",
    keywords: [
      "联合办公日票",
      "Croissant 替代品",
      "数字游民 coworking",
      "日票预订",
      "coworking day pass",
      "Deskpass 替代",
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
    path: "/guide/coworking-day-pass-alternative-digital-nomads",
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
    applicationCategory: "TravelApplication",
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
