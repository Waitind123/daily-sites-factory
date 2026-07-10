import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://nomad-cities.vercel.app",
    name: "Nomad Cities",
    title: "Nomad Cities — Digital nomad city rankings, $29/mo",
    description:
      "5 free city unlocks. Compare 200+ remote-work cities by cost, internet, safety & visa. Data-driven rankings for digital nomads.",
    keywords: [
      "digital nomad cities",
      "nomad list alternative",
      "remote work city",
      "Chiang Mai digital nomad",
      "Lisbon remote work",
      "cost of living nomad",
      "best cities for remote workers",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://nomad-cities.vercel.app",
    name: "游民城市榜",
    title: "游民城市榜 — 数字游民城市排名，¥199/月",
    description:
      "免费解锁 5 个城市。按生活成本、网速、安全、签证对比 200+ 远程工作城市。数据驱动的数字游民排名。",
    keywords: [
      "数字游民",
      "数字游民城市",
      "remote work city",
      "nomad list 中文",
      "远程工作 城市",
      "清迈 数字游民",
      "里斯本 远程工作",
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
  { path: "/rankings", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/best-digital-nomad-cities",
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
      price: "99",
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
