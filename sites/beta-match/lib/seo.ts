import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://beta-match-tau.vercel.app",
    name: "Beta Match",
    title: "Beta Match — Find your first 10 beta testers, $29/mo flat",
    description:
      "5 free beta listings. Connect indie founders with early adopters. Post recruitment pages, get qualified tester applications. HN#47618992 inspired.",
    keywords: [
      "beta testers",
      "early adopters",
      "SaaS beta recruitment",
      "find first 10 users",
      "indie hacker beta testing",
      "early adopter marketplace",
      "beta user recruitment",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://beta-match-tau.vercel.app",
    name: "早期用户市场",
    title: "早期用户市场 — 找到前 10 个内测用户，$29/月",
    description:
      "免费体验 5 条内测招募帖。连接独立开发者与早期尝鲜者。发布招募页，获取合格测试者申请。",
    keywords: [
      "内测用户",
      "早期用户",
      "SaaS 内测招募",
      "找前 10 个用户",
      "独立开发者内测",
      "早期用户撮合",
      "beta testers",
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
  { path: "/listings", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/find-first-10-beta-users-saas",
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
