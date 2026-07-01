import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://pay-once-pulse.vercel.app",
    name: "PayOnce Pulse",
    title: "PayOnce Pulse — one-time purchase SaaS alternatives directory $9.9/mo",
    description:
      "5 free deep lookups. Curated pay-once & self-hostable alternatives to subscription SaaS — Canny, Typeform, Mixpanel, Trello & more. $9.9/mo unlimited.",
    keywords: [
      "pay once SaaS",
      "one time purchase software",
      "subscription fatigue",
      "payoncealternatives",
      "self hosted SaaS",
      "Canny alternative",
      "Typeform alternative one time",
      "indie hacker tools",
      "buy once software 2026",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://pay-once-pulse.vercel.app",
    name: "一次性买断工具目录",
    title: "一次性买断工具目录 — 订阅制 SaaS 买断替代品 $9.9/月",
    description:
      "免费体验 5 次深度查询。精选一次性买断与可自托管的 SaaS 替代品 — 替代 Canny、Typeform、Mixpanel、Trello 等订阅工具。$9.9/月无限查阅。",
    keywords: [
      "一次性买断软件",
      "SaaS 替代品",
      "订阅疲劳",
      "买断制工具",
      "自托管 SaaS",
      "Canny 替代品",
      "Typeform 买断",
      "独立开发者工具",
      "pay once alternatives",
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
  { path: "/tools", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/pay-once-saas-alternatives-2026",
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
