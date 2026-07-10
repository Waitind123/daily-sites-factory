import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://page-split-pi.vercel.app",
    name: "Page Split",
    title: "Page Split — VWO alternative for indie hackers, $9.9/mo flat",
    description:
      "5 free landing page A/B tests. VWO costs $198/mo? $9.9/mo flat: 50/50 split, conversion tracking, auto winner detection.",
    keywords: [
      "A/B testing",
      "landing page test",
      "VWO alternative",
      "conversion rate optimization",
      "split testing",
      "indie hacker tools",
      "page split test",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://page-split-pi.vercel.app",
    name: "落地页 A/B 测试",
    title: "Page Split — VWO 平替，独立开发者 $9.9/月",
    description:
      "免费体验 5 个落地页 A/B 测试。VWO $198/月太贵？$9.9/月一口价：50/50 分流、转化追踪、自动判定赢家。",
    keywords: [
      "A/B 测试",
      "落地页测试",
      "VWO 替代品",
      "转化率优化",
      "分流测试",
      "独立开发者工具",
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
  { path: "/experiments", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/vwo-alternative-indie-hackers",
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
