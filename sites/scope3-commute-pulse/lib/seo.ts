import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://scope3-commute-pulse.vercel.app",
    name: "Scope3 Commute Pulse",
    title: "Scope3 Commute Pulse — CSRD employee commuting, $29/mo",
    description:
      "5 free team baselines. Collect employee commute data, calculate Scope 3 Cat.7 emissions, export CSRD-ready reports. Watershed alternative for SMEs.",
    keywords: [
      "Scope 3 employee commuting",
      "CSRD employee emissions",
      "Category 7 commuting",
      "employee commute survey",
      "Watershed alternative",
      "GHG Protocol commuting",
      "ESG reporting SME",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://scope3-commute-pulse.vercel.app",
    name: "Scope 3 员工通勤",
    title: "Scope 3 员工通勤 — CSRD 通勤排放基线，$29/月",
    description:
      "免费体验 5 次团队基线。收集员工通勤数据，计算 Scope 3 第 7 类排放，导出 CSRD 合规报告。中小企业 Watershed 平替。",
    keywords: [
      "Scope 3 员工通勤",
      "CSRD 员工排放",
      "第 7 类通勤排放",
      "员工通勤调研",
      "Watershed 替代品",
      "GHG Protocol 通勤",
      "ESG 报告中小企业",
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
  { path: "/survey", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/csrd-scope3-employee-commuting",
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
