import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://freelance-local-kit.vercel.app",
    name: "Local Freelance Kit",
    title: "Local Freelance Kit — HN#47298161 inspired, $9.9/mo all-in-one",
    description:
      "5 free documents. Replace HoneyBook + Bonsai stack with invoices, proposals, contracts, expenses & projects. Local JSON export. $9.9/mo flat.",
    keywords: [
      "freelance tools",
      "local first invoicing",
      "HoneyBook alternative",
      "freelance SaaS stack",
      "proposal generator",
      "contract template",
      "expense tracker freelancer",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://freelance-local-kit.vercel.app",
    name: "自由职业本地套件",
    title: "自由职业本地套件 — HN 五合一平替，$9.9/月",
    description:
      "免费体验 5 份文档。用发票、报价、合同、报销、项目替代 HoneyBook + Bonsai 工具栈。本地 JSON 导出，$9.9/月一口价。",
    keywords: [
      "自由职业工具",
      "本地优先发票",
      "HoneyBook 替代品",
      "自由职业 SaaS",
      "报价生成器",
      "合同模板",
      "自由职业报销",
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
  { path: "/workspace", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/local-first-freelance-saas-alternative",
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
