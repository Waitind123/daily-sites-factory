import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://guilt-free-habits.vercel.app",
    name: "Guilt-Free Habits",
    title: "Guilt-Free Habits — Weekly goals, no streak anxiety, $29/mo",
    description:
      "5 free check-ins. Streaks reset to zero? $29/mo flat: weekly 4/7 goals, no guilt on missed days — based on Lally 2010 habit research.",
    keywords: [
      "guilt free habit tracker",
      "Streaks alternative",
      "Habitica alternative",
      "weekly habit goals",
      "streak anxiety",
      "habit tracker no guilt",
      "indie hacker",
      "micro saas",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://guilt-free-habits.vercel.app",
    name: "无罪恶感习惯",
    title: "无罪恶感习惯 — 周目标制打卡，告别连续天数焦虑，$29/月",
    description:
      "免费体验 5 次打卡。连续天数断链归零？$29/月一口价：每周 4/7 天达标即可，错过一天不重置进度，基于 Lally 2010 习惯研究。",
    keywords: [
      "无罪恶感习惯打卡",
      "习惯追踪",
      "Streaks 替代品",
      "Habitica 替代品",
      "周目标习惯",
      "连续天数焦虑",
      "习惯养成",
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
  {
    path: "/guide/streak-anxiety-habit-tracker-alternative",
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
