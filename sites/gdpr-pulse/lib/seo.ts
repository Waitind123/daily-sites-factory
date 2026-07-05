import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://gdpr-pulse.vercel.app",
    name: "GDPR Pulse",
    title: "GDPR Pulse — Compliance Self-Check for Indie SaaS, $9.9/mo",
    description:
      "5 free scans. Vanta too expensive? $9.9/mo flat: GDPR gap scanner, privacy policy generator, cookie consent checklist for indie founders selling to EU.",
    keywords: [
      "GDPR compliance tool",
      "indie SaaS GDPR",
      "privacy policy generator",
      "Vanta alternative",
      "cookie consent checker",
      "DPA generator",
      "GDPR self assessment",
      "micro saas",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://gdpr-pulse.vercel.app",
    name: "GDPR 合规自检",
    title: "GDPR 合规自检 — 独立开发者 SaaS 合规工具，$9.9/月",
    description:
      "免费体验 5 次。Vanta 太贵？$9.9/月一口价：GDPR 缺口扫描、隐私政策生成、Cookie 同意清单，面向服务欧盟客户的独立开发者。",
    keywords: [
      "GDPR 合规工具",
      "独立开发者 GDPR",
      "隐私政策生成器",
      "Vanta 替代品",
      "Cookie 同意检查",
      "DPA 生成",
      "GDPR 自检",
      "微 SaaS",
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
  { path: "/scan", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/gdpr-compliance-self-check-indie",
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
