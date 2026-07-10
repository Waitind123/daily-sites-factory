import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://waitlist-pulse.vercel.app",
    name: "Waitlist Pulse",
    title: "Waitlist Pulse — Prefinery alternative for indie devs, $29/mo flat",
    description:
      "5 free product waitlists. Prefinery costs $99/mo? $29/mo flat: email capture, referral boost, public signup count, embed widget.",
    keywords: [
      "product waitlist",
      "Prefinery alternative",
      "launch waitlist",
      "pre-launch signup",
      "indie hacker waitlist",
      "viral waitlist",
      "email waitlist tool",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://waitlist-pulse.vercel.app",
    name: "产品等候名单",
    title: "产品等候名单 — Prefinery 平替，独立开发者 $29/月",
    description:
      "免费体验 5 个产品等候名单。Prefinery $99/月太贵？$29/月一口价：邮箱收集、推荐裂变、公开计数、可嵌入组件。",
    keywords: [
      "产品等候名单",
      "Prefinery 替代品",
      "上线前收集邮箱",
      "独立开发者等候名单",
      "推荐裂变",
      "product waitlist",
      "Prefinery alternative",
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
  { path: "/lists", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/prefinery-alternative-indie-hackers",
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
