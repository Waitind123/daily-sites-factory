import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://price-tracker-seven-tan.vercel.app",
    name: "SaaS Price Tracker",
    title: "SaaS Price Tracker — competitor pricing monitor & history $9.9/mo",
    description:
      "5 free deep-dives. Auto-track Notion, Linear, Cursor pricing changes — 90-day history, trend analysis, email alerts. 5x cheaper than RivalPeek.",
    keywords: [
      "SaaS price tracker",
      "competitor pricing monitor",
      "pricing change alerts",
      "SaaS pricing analysis",
      "competitor price history",
      "indie hacker pricing",
      "pricing page monitor",
      "SaaS pricing intelligence",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://price-tracker-seven-tan.vercel.app",
    name: "SaaS 价格追踪",
    title: "SaaS 价格追踪 — 竞品定价变动监控与历史分析 $9.9/月",
    description:
      "免费体验 5 次深度追踪。自动监控 Notion、Linear、Cursor 等竞品定价变动，90 天历史、趋势分析、邮件提醒。比 RivalPeek $49/月便宜 5 倍。",
    keywords: [
      "SaaS 价格追踪",
      "竞品定价监控",
      "定价变动提醒",
      "SaaS 定价分析",
      "竞品价格历史",
      "indie hacker 定价",
      "pricing page monitor",
      "competitor pricing tracker",
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
  { path: "/track", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/saas-pricing-monitoring-indie",
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
