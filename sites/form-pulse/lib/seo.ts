import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://form-pulse-amber.vercel.app",
    name: "Form Pulse",
    title: "Form Pulse — Typeform alternative for indie devs, $29/mo flat",
    description:
      "5 free forms. Typeform free = 10 responses/mo? $29/mo flat: unlimited responses, drop-off analytics, one-question-at-a-time UX, embed widget.",
    keywords: [
      "form builder",
      "Typeform alternative",
      "survey tool indie",
      "drop-off analytics",
      "embeddable form",
      "indie hacker forms",
      "unlimited form responses",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://form-pulse-amber.vercel.app",
    name: "极简表单构建器",
    title: "极简表单构建器 — Typeform 平替，独立开发者 $29/月",
    description:
      "免费体验 5 个表单。Typeform 免费版仅 10 条/月？$29/月一口价：无限回复、放弃率分析、逐题展示、可嵌入组件。",
    keywords: [
      "表单构建器",
      "Typeform 替代品",
      "独立开发者问卷",
      "放弃率分析",
      "嵌入表单",
      "无限表单回复",
      "form builder",
      "Typeform alternative",
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
  { path: "/forms", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/typeform-alternative-indie-hackers",
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
