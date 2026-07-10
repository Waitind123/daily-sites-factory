import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://visa-guide-tau.vercel.app",
    name: "Nomad Visa Guide",
    title: "Nomad Visa Guide — 28+ digital nomad visa comparison database",
    description:
      "5 free detail views. Compare income thresholds, stay duration, tax rules across 28+ countries. $29/mo unlimited access.",
    keywords: [
      "digital nomad visa",
      "nomad visa comparison",
      "remote work visa",
      "Portugal D8 visa",
      "Thailand DTV",
      "Spain digital nomad visa",
      "visa income requirement",
      "schengen nomad visa",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://visa-guide-tau.vercel.app",
    name: "数字游民签证指南",
    title: "数字游民签证指南 — 28 国远程签证对比数据库",
    description:
      "免费体验 5 次签证详情查询。收入门槛、停留时长、税务政策、申根通行一站式对比。告别 Reddit 碎片化信息，$29/月无限查阅。",
    keywords: [
      "数字游民签证",
      "digital nomad visa",
      "远程工作签证",
      "葡萄牙 D8 签证",
      "泰国 DTV",
      "西班牙数字游民签证",
      "nomad visa comparison",
      "签证收入要求",
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
  { path: "/visas", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/digital-nomad-visa-china",
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
    applicationCategory: "ReferenceApplication",
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
