import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://freelance-proposal-one.vercel.app",
    name: "Freelance Proposal",
    title: "Freelance Proposal — HoneyBook alternative, $29/mo",
    description:
      "5 free tries. Generate quote + contract + invoice in 30 seconds. Built for solo freelancers after HoneyBook's 89% price hike.",
    keywords: [
      "freelance proposal",
      "HoneyBook alternative",
      "freelancer invoice",
      "proposal generator",
      "Bonsai alternative",
      "freelance contract",
      "micro saas",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://freelance-proposal-one.vercel.app",
    name: "自由职业报价单",
    title: "自由职业报价单 — HoneyBook 平替，$29/月",
    description:
      "免费体验 5 次。30 秒生成报价 + 合同 + 发票。HoneyBook 涨价后的极简替代，专为 solo freelancer 打造。",
    keywords: [
      "自由职业报价单",
      "HoneyBook 替代",
      "freelance proposal",
      "报价单生成器",
      "自由职业发票",
      "Bonsai 替代",
      "独立开发者报价",
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
  { path: "/proposal", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/honeybook-alternative-freelancer",
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
