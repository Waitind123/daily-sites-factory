import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://reddit-leads-beta.vercel.app",
    name: "Reddit Leads",
    title: "Reddit Leads — High-intent Reddit lead monitoring for indie hackers, $9.9/mo",
    description:
      "5 free scans. Monitor r/SaaS, r/Entrepreneur & r/indiehackers for switching, alternative & pricing signals. SubWatch alternative with intent scoring. $9.9/mo flat.",
    keywords: [
      "Reddit lead generation",
      "SubWatch alternative",
      "Reddit monitoring indie hackers",
      "high intent Reddit leads",
      "switching from alternative to",
      "StackLead alternative",
      "Reddit outbound SaaS",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://reddit-leads-beta.vercel.app",
    name: "Reddit 线索挖掘",
    title: "Reddit 线索挖掘 — 独立开发者高意向 Reddit 监控，$9.9/月",
    description:
      "免费体验 5 次扫描。监控 r/SaaS、r/Entrepreneur 与 r/indiehackers 的切换、替代与价格信号。SubWatch 平替，意向评分，$9.9/月一口价。",
    keywords: [
      "Reddit 线索挖掘",
      "SubWatch 替代品",
      "Reddit 监控独立开发者",
      "高意向 Reddit 线索",
      "正在切换寻找替代",
      "StackLead 替代品",
      "Reddit 外展 SaaS",
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
    path: "/guide/reddit-lead-generation-indie-hackers",
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
