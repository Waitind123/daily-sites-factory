import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://carbon-calculator-wine.vercel.app",
    name: "Carbon Calculator",
    title: "Carbon Calculator — Remote work emissions, $9.9/mo",
    description:
      "5 free calculations. Compare full office vs hybrid vs fully remote CO₂e. ESG baseline tool for indie devs and SMB teams.",
    keywords: [
      "carbon footprint calculator",
      "remote work emissions",
      "hybrid work carbon",
      "Scope 3 emissions",
      "ESG report",
      "home office carbon",
      "micro saas",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://carbon-calculator-wine.vercel.app",
    name: "远程碳足迹",
    title: "远程碳足迹 — 混合办公碳排放计算器，$9.9/月",
    description:
      "免费体验 5 次。计算远程 vs 通勤碳排放，三场景对比，支持 ESG 报告导出。独立开发者 & 中小团队 Scope 3 基线工具。",
    keywords: [
      "远程办公碳足迹",
      "碳排放计算器",
      "混合办公碳排",
      "Scope 3 排放",
      "ESG 报告",
      "居家办公碳排放",
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
  { path: "/calculate", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/remote-work-carbon-footprint",
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
