import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://newsletter-stack.vercel.app",
    name: "Newsletter Stack",
    title: "Newsletter Stack — Substack vs Beehiiv vs Kit comparison, $9.9/mo",
    description:
      "5 free deep comparisons. Substack, Beehiiv, Kit, Mailchimp pricing, features & migration costs — pick the right newsletter tool without overpaying.",
    keywords: [
      "newsletter tool comparison",
      "Substack vs Beehiiv",
      "ConvertKit alternative",
      "indie hacker newsletter",
      "email marketing tools",
      "newsletter platform pricing",
      "Kit vs Beehiiv",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://newsletter-stack.vercel.app",
    name: "Newsletter 工具对比",
    title: "Newsletter 工具对比 — Substack vs Beehiiv vs ConvertKit 深度评测 $9.9/月",
    description:
      "免费体验 5 次深度对比。Substack、Beehiiv、ConvertKit、Mailchimp 定价、功能、迁移成本一目了然。Indie Hacker 选邮件工具不再踩坑。",
    keywords: [
      "Newsletter 工具对比",
      "Substack vs Beehiiv",
      "邮件营销工具评测",
      "ConvertKit 替代",
      "独立开发者 newsletter",
      "邮件工具选型",
    ],
    locale: "zh_CN",
  },
} as const;

export const siteConfig = siteConfigByLocale.en;

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
  { path: "/compare", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/newsletter-tool-comparison-indie",
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
