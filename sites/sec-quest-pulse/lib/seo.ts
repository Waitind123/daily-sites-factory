import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://sec-quest-pulse.vercel.app",
    name: "SecQuest Pulse",
    title: "SecQuest Pulse — Security questionnaire auto-fill for indie SaaS, $9.9/mo",
    description:
      "5 free questionnaire fills. Vanta $5k+/yr is overkill. Paste Excel security questionnaires, AI fills answers from your docs. $9.9/mo flat.",
    keywords: [
      "security questionnaire auto fill",
      "Vanta alternative",
      "Conveyor alternative",
      "vendor security questionnaire",
      "SOC 2 questionnaire",
      "enterprise security questionnaire",
      "B2B security compliance",
      "security questionnaire AI",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://sec-quest-pulse.vercel.app",
    name: "安全问卷自动填写",
    title: "安全问卷自动填写 — 独立开发者企业安全问卷 AI 填写，$9.9/月",
    description:
      "免费体验 5 次。Vanta $5k+/年太贵。粘贴 Excel 安全问卷，AI 从你的文档自动填写答案。$9.9/月一口价。",
    keywords: [
      "安全问卷自动填写",
      "Vanta 替代品",
      "Conveyor 替代品",
      "企业安全问卷",
      "SOC 2 问卷",
      "B2B 安全合规",
      "安全问卷 AI",
      "供应商安全问卷",
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
    path: "/guide/security-questionnaire-autofill-vanta-alternative",
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
