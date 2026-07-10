import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://intercom-pulse.vercel.app",
    name: "Intercom Pulse",
    title: "Intercom Pulse — Intercom alternative for indie devs, $29/mo flat",
    description:
      "5 free conversation actions. Intercom $29/seat + Fin fees? $29/mo flat: live chat widget, AI agent, help center, shared inbox.",
    keywords: [
      "Intercom alternative",
      "customer chat",
      "live chat widget",
      "AI support agent",
      "help center",
      "shared inbox",
      "indie hacker support",
      "Fin AI alternative",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://intercom-pulse.vercel.app",
    name: "Intercom 平替",
    title: "Intercom 平替 — 独立开发者客户聊天，$29/月一口价",
    description:
      "免费体验 5 次。Intercom $29/坐席 + Fin 费？$29/月一口价：在线聊天组件、AI 客服、帮助中心、共享收件箱。",
    keywords: [
      "Intercom 替代品",
      "客户聊天",
      "在线聊天组件",
      "AI 客服",
      "帮助中心",
      "共享收件箱",
      "Intercom alternative",
      "indie hacker chat",
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
  { path: "/inbox", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/intercom-alternative-indie-hackers",
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
