import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://ai-contract-review-three.vercel.app",
    name: "Contract Review Pulse",
    title: "Contract Review Pulse — AI contract risk scan for freelancers, $29/mo",
    description:
      "5 free contract reviews. Lawyer $300+/hr is overkill. Paste freelance contracts, get risk score, flagged clauses, and negotiation email. $29/mo flat.",
    keywords: [
      "AI contract review",
      "freelance contract review",
      "contract risk scanner",
      "DocuSign CLM alternative",
      "contract negotiation tool",
      "freelancer contract protection",
      "clause redline tool",
      "contract review AI",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://ai-contract-review-three.vercel.app",
    name: "合同审查助手",
    title: "合同审查助手 — 自由职业者 AI 合同风险扫描，$29/月",
    description:
      "免费体验 5 次。律师 $300+/小时太贵。粘贴自由职业合同，获得风险评分、问题条款和谈判邮件。$29/月一口价。",
    keywords: [
      "AI 合同审查",
      "自由职业合同审查",
      "合同风险扫描",
      "DocuSign CLM 替代品",
      "合同谈判工具",
      "自由职业者合同保护",
      "条款修改工具",
      "合同审查 AI",
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
  { path: "/dashboard", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/freelance-contract-review-ai-alternative",
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
