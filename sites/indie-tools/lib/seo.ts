import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://indie-tools-rho.vercel.app",
    name: "Indie Tools",
    title: "Indie Tools — curated indie hacker tool reviews & stack picks $9.9/mo",
    description:
      "5 free deep reviews. Hand-picked payment, email, hosting & analytics tools with pricing comparisons, alternatives & setup guides. $9.9/mo unlimited.",
    keywords: [
      "indie hacker tools",
      "indie developer tool stack",
      "SaaS tool comparison",
      "Polar vs Stripe",
      "bootstrap tools",
      "micro saas stack",
      "developer tool directory",
      "indie tools 2026",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://indie-tools-rho.vercel.app",
    name: "独立开发者工具箱",
    title: "独立开发者工具箱 — 精选 Indie 工具评测与选型 $9.9/月",
    description:
      "免费体验 5 次深度评测。为 indie hacker 精选支付、邮件、托管、分析等工具，含定价对比、替代方案与实战选型建议。$9.9/月无限查阅。",
    keywords: [
      "独立开发者工具",
      "indie hacker tools",
      "SaaS 工具对比",
      "Polar vs Stripe",
      "indie 工具箱",
      "bootstrap 工具",
      "micro saas stack",
      "开发者工具目录",
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
    path: "/guide/indie-developer-tool-stack",
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
    applicationCategory: "DeveloperApplication",
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
