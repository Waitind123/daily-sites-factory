import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://dunning-pulse.vercel.app",
    name: "Dunning Pulse",
    title: "Dunning Pulse — Stripe failed payment recovery for indie SaaS, $29/mo",
    description:
      "5 free recovery campaigns. Churnkey $199/mo? $29/mo flat: reason-specific dunning emails, card-update links, MRR recovery tracking.",
    keywords: [
      "dunning",
      "failed payment recovery",
      "Stripe dunning",
      "Churnkey alternative",
      "payment recovery SaaS",
      "indie hacker dunning",
      "subscription recovery",
      "MRR recovery",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://dunning-pulse.vercel.app",
    name: "失败支付恢复",
    title: "失败支付恢复 — Stripe 催款工具，独立开发者 $29/月",
    description:
      "免费体验 5 个恢复活动。Churnkey 要 $199/月？$29/月一口价：按原因定制催款邮件、更新卡片链接、MRR 恢复追踪。",
    keywords: [
      "催款",
      "失败支付恢复",
      "Stripe 催款",
      "Churnkey 替代品",
      "支付恢复 SaaS",
      "独立开发者催款",
      "订阅恢复",
      "MRR 恢复",
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
  { path: "/dashboard", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/stripe-failed-payment-recovery-dunning",
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
