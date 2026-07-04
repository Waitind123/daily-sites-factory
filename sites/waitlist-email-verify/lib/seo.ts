import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://waitlist-email-verify.vercel.app",
    name: "Waitlist Verify",
    title: "Waitlist Verify — Email validation + AI conversion scoring, $9.9/mo",
    description:
      "5 free email audits. Waitle validates emails but no AI insights? $9.9/mo: MX checks, typo fix, disposable filter, double opt-in, conversion analysis.",
    keywords: [
      "waitlist email validation",
      "Waitle alternative",
      "Lineup alternative",
      "disposable email filter",
      "waitlist typo detection",
      "double opt-in waitlist",
      "indie hacker waitlist",
      "email verification waitlist",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://waitlist-email-verify.vercel.app",
    name: "等候名单邮件验证",
    title: "等候名单邮件验证 — 邮箱验证 + AI 转化分析，独立开发者 $9.9/月",
    description:
      "免费体验 5 次邮箱审计。Waitle 能验证邮箱但缺 AI 洞察？$9.9/月：MX 检测、拼写纠错、一次性邮箱过滤、双重确认、转化分析。",
    keywords: [
      "等候名单邮件验证",
      "Waitle 替代品",
      "邮箱验证等候名单",
      "一次性邮箱过滤",
      "拼写纠错",
      "双重确认",
      "独立开发者等候名单",
      "waitlist email validation",
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
    path: "/guide/waitlist-email-validation-indie-hackers",
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
