import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://email-pulse.vercel.app",
    name: "Email Pulse",
    title: "Email Pulse — HTML email builder for indie devs, $29/mo flat",
    description:
      "5 free templates. Build product update emails, preview live, copy HTML for Resend/Postmark. Mailchimp alternative at $29/mo flat.",
    keywords: [
      "HTML email builder",
      "Mailchimp alternative",
      "product update email",
      "indie hacker email",
      "Resend HTML template",
      "transactional email builder",
      "email template generator",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://email-pulse.vercel.app",
    name: "HTML 邮件构建器",
    title: "HTML 邮件构建器 — Mailchimp 平替，独立开发者 $29/月",
    description:
      "免费体验 5 个模板。搭建产品更新邮件、实时预览、复制 HTML 用于 Resend/Postmark。$29/月一口价。",
    keywords: [
      "HTML 邮件构建器",
      "Mailchimp 替代品",
      "产品更新邮件",
      "独立开发者邮件",
      "Resend 邮件模板",
      "事务邮件构建器",
      "email builder",
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
  { path: "/templates", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/mailchimp-alternative-indie-hackers",
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
