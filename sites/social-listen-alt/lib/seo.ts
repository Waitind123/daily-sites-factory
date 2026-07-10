import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://social-listen-alt.vercel.app",
    name: "Listen Pulse",
    title: "Listen Pulse — Brand24 & Mention alternative for indie hackers, $9.9/mo",
    description:
      "5 free scans. Monitor Reddit & X for high-intent signals — alternative to, switching from, pricing pain. No Brand24 noise. Intent scoring for founders. $9.9/mo flat.",
    keywords: [
      "Brand24 alternative",
      "Mention alternative",
      "social listening indie hackers",
      "Reddit X intent monitoring",
      "alternative to switching from",
      "ReplyRadar alternative",
      "high intent social listening",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://social-listen-alt.vercel.app",
    name: "社交监听替代品",
    title: "社交监听替代品 — Brand24/Mention 平替，独立开发者 $9.9/月",
    description:
      "免费体验 5 次扫描。监控 Reddit 与 X 的高意向信号 — 寻找替代、正在切换、价格不满。过滤 Brand24 噪音，意向评分，$9.9/月一口价。",
    keywords: [
      "Brand24 替代品",
      "Mention 替代品",
      "社交监听独立开发者",
      "Reddit X 意向监控",
      "寻找替代正在切换",
      "ReplyRadar 替代品",
      "高意向社交监听",
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
  { path: "/monitor", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/brand24-mention-alternative-indie",
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
