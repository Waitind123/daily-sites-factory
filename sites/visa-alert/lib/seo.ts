import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://visa-alert-one.vercel.app",
    name: "Visa Alert",
    title: "Visa Alert — Digital nomad visa policy change notifications, $29/mo",
    description:
      "Get instant alerts when digital nomad visa policies change — income thresholds, processing times, tax rules. 5 free watches, then $29/mo.",
    keywords: [
      "visa policy change alert",
      "digital nomad visa updates",
      "portugal d8 income change",
      "thailand dtv policy update",
      "nomad visa notification",
      "visa policy tracker",
      "nomad list alternative",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://visa-alert-one.vercel.app",
    name: "签证政策提醒",
    title: "签证政策提醒 — 数字游民签证政策变更通知，$29/月",
    description:
      "数字游民签证政策变更即时通知 — 收入门槛、审批时长、税务规则。免费体验 5 次，之后 $29/月。",
    keywords: [
      "签证政策变更提醒",
      "数字游民签证更新",
      "葡萄牙 D8 收入变更",
      "泰国 DTV 政策更新",
      "签证政策通知",
      "nomad list 替代",
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
  { path: "/alerts", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/visas", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/nomad-visa-policy-change-alerts",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
];

export function webApplicationJsonLd(locale: Locale = "en") {
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
