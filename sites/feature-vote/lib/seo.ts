import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://feature-vote-ten.vercel.app",
    name: "Feature Vote",
    title: "Feature Vote — Canny alternative for indie devs, $9.9/mo flat",
    description:
      "5 free feature voting boards. Canny costs $79/mo? $9.9/mo flat: public voting, roadmap, embed widget, unlimited voters.",
    keywords: [
      "feature voting",
      "Canny alternative",
      "feature request board",
      "public roadmap",
      "user feedback tool",
      "indie SaaS feedback",
      "product roadmap tool",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://feature-vote-ten.vercel.app",
    name: "功能投票板",
    title: "功能投票板 — Canny 平替，独立开发者 $9.9/月",
    description:
      "免费体验 5 个功能投票板。Canny $79/月太贵？$9.9/月一口价：公开投票、路线图、嵌入组件，无限投票用户。",
    keywords: [
      "功能投票",
      "Canny 替代品",
      "独立开发者反馈",
      "公开路线图",
      "feature voting",
      "Canny alternative",
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
  { path: "/boards", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/canny-alternative-indie-hackers",
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
