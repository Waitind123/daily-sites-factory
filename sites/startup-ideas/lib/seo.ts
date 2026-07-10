import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://startup-ideas-five.vercel.app",
    name: "Startup Ideas",
    title: "Startup Ideas — Daily inspiration + deep market analysis $29/mo",
    description:
      "5 free deep analyses. Curated micro-SaaS ideas with market size, competitor pricing, acquisition channels & MVP roadmap. $29/mo unlimited.",
    keywords: [
      "startup ideas",
      "indie hacker",
      "micro saas",
      "business ideas",
      "market analysis",
      "side project",
      "profitable startup",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://startup-ideas-five.vercel.app",
    name: "创业点子库",
    title: "创业点子库 — 每日创业灵感 + 深度市场分析 $29/月",
    description:
      "免费体验 5 次深度分析。每日精选可落地的创业点子，含市场规模、竞品定价、获客渠道与 MVP 路线图。$29/月无限阅读。",
    keywords: [
      "创业点子",
      "startup ideas",
      "独立开发",
      "indie hacker",
      "创业灵感",
      "SaaS 点子",
      "副业项目",
      "市场分析",
      "micro saas",
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
  { path: "/ideas", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/find-profitable-startup-idea",
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
