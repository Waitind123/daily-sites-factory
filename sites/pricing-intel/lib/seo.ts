import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://pricing-intel-vert.vercel.app",
    name: "Pricing Intel",
    title: "Pricing Intel — SaaS competitor pricing intelligence for indie founders $29/mo",
    description:
      "5 free intel reports. Kompyte/Klue cost $10K+/yr — get pricing page monitoring, strategy playbooks & change alerts for $29/mo. Built for solo founders.",
    keywords: [
      "competitive pricing intelligence",
      "SaaS pricing monitor",
      "competitor pricing strategy",
      "pricing page changes",
      "indie founder pricing intel",
      "Kompyte alternative",
      "Klue alternative",
      "pricing intelligence tool",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://pricing-intel-vert.vercel.app",
    name: "竞品定价情报",
    title: "竞品定价情报 — solo founder 的 SaaS 定价监控与策略分析 $29/月",
    description:
      "免费体验 5 次情报报告。Kompyte/Klue 年费 $10K+，我们 $29/月提供定价页监控、策略建议与变动提醒。为独立开发者打造。",
    keywords: [
      "竞品定价情报",
      "SaaS 定价监控",
      "定价策略分析",
      "定价页变动",
      "indie 定价情报",
      "Kompyte 替代品",
      "Klue 替代品",
      "定价情报工具",
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
    path: "/guide/competitive-pricing-intelligence-indie",
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
