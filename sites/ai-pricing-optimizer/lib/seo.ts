import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://ai-pricing-optimizer.vercel.app",
    name: "PricePulse AI",
    title: "PricePulse AI — AI pricing page optimizer for indie hackers, $9.9/mo",
    description:
      "5 free AI optimizations. Wynter $500/test? $9.9/mo flat: AI copy rewrites, layout diagnosis, A/B playbook — ship pricing pages that convert.",
    keywords: [
      "AI pricing page optimizer",
      "pricing page copy",
      "Wynter alternative",
      "indie hacker pricing",
      "conversion optimization",
      "A/B test pricing",
      "SaaS pricing page",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://ai-pricing-optimizer.vercel.app",
    name: "AI 定价页优化",
    title: "AI 定价页优化 — 独立开发者 AI 文案改写与布局诊断，$9.9/月",
    description:
      "免费体验 5 次 AI 优化。Wynter 单次 $500？$9.9/月一口价：AI 文案改写、布局诊断、A/B 方案 — 打造高转化定价页。",
    keywords: [
      "AI 定价页优化",
      "定价页文案",
      "Wynter 替代品",
      "独立开发者定价",
      "转化优化",
      "A/B 测试",
      "SaaS 定价页",
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
  { path: "/analyze", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/ai-pricing-page-optimization-indie-hackers",
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
