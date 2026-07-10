import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://team-headshots-phi.vercel.app",
    name: "Team Headshots",
    title: "Team Headshots — Consistent LinkedIn portraits for your whole team, $29/mo",
    description:
      "5 free tries. Batch-generate unified corporate headshots for up to 10 team members. PhotoAI team alternative at $29/mo flat.",
    keywords: [
      "team headshots",
      "LinkedIn team photos",
      "batch AI headshots",
      "startup team portraits",
      "corporate headshots team",
      "HeadshotPro alternative",
      "PhotoAI team alternative",
      "employee headshots AI",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://team-headshots-phi.vercel.app",
    name: "团队 AI 头像",
    title: "团队 AI 头像 — 全团队统一领英证件照，$29/月",
    description:
      "免费体验 5 次。为最多 10 名成员批量生成统一商务证件照。PhotoAI 团队版平替，$29/月一口价。",
    keywords: [
      "团队证件照",
      "领英团队头像",
      "批量 AI 证件照",
      "创业团队头像",
      "员工证件照 AI",
      "HeadshotPro 替代品",
      "PhotoAI 团队版替代",
      "统一团队形象",
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
  { path: "/team", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/team-linkedin-headshots",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
];

export function softwareApplicationJsonLd(locale: Locale = "en") {
  const cfg = getSiteConfig(locale);
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: cfg.name,
    applicationCategory: "PhotographyApplication",
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
