import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://library-cowork.vercel.app",
    name: "Library Cowork",
    title: "Virtual Library Cowork — Quiet focus for remote workers, $29/mo",
    description:
      "5 free library sessions. Study Hall $20/mo? $29/mo flat: silent library vibe, pomodoro, page-turn ambient — beat remote-work loneliness.",
    keywords: [
      "virtual library coworking",
      "Study Hall alternative",
      "remote work loneliness",
      "body doubling",
      "library ambient focus",
      "pomodoro timer",
      "quiet coworking",
      "indie hacker",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://library-cowork.vercel.app",
    name: "虚拟图书馆共工",
    title: "虚拟图书馆共工 — 安静阅览室专注，告别远程孤独，$29/月",
    description:
      "免费体验 5 次阅览室会话。Study Hall $20/月太贵？$29/月一口价：图书馆氛围、翻书白噪音、番茄钟，远程工作者不再独自发呆。",
    keywords: [
      "虚拟图书馆共工",
      "Study Hall 替代品",
      "远程办公孤独",
      "图书馆氛围专注",
      "番茄钟",
      "翻书白噪音",
      "body doubling",
      "独立开发者",
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
  { path: "/room", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/virtual-library-cowork-focus",
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
    applicationCategory: "ProductivityApplication",
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
