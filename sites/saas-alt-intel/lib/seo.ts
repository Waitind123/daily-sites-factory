import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://saas-alt-intel.vercel.app",
    name: "Alt Intel",
    title: "Alt Intel — SaaS price hike alerts & alternatives for indie founders $29/mo",
    description:
      "5 free intel reports. When competitors raise prices, get ranked alternatives + migration playbooks. HN payoncealternatives style — $29/mo for solo founders.",
    keywords: [
      "SaaS alternatives",
      "price hike alert",
      "payoncealternatives",
      "SaaS pricing monitor",
      "indie founder alternatives",
      "Kompyte alternative",
      "subscription fatigue",
      "SaaS replacement tool",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://saas-alt-intel.vercel.app",
    name: "SaaS 替代品情报",
    title: "SaaS 替代品情报 — 涨价预警与替代品推荐 $29/月",
    description:
      "免费体验 5 次情报报告。竞品涨价无预警？我们监控定价变动并推荐可迁移替代品。为独立开发者打造，$29/月。",
    keywords: [
      "SaaS 替代品",
      "涨价预警",
      "payoncealternatives",
      "SaaS 定价监控",
      "独立开发者替代品",
      "订阅制厌倦",
      "SaaS 迁移工具",
      "竞品涨价提醒",
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
  { path: "/intel", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/saas-price-hike-alternatives-indie",
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
