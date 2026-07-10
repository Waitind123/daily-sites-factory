import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://docs-pulse.vercel.app",
    name: "Docs Pulse",
    title: "Docs Pulse — GitBook alternative for indie devs, $29/mo flat",
    description:
      "5 free doc sites. GitBook $65/mo + per seat? $29/mo flat: unlimited pages, custom domain, auto llms.txt, markdown editor.",
    keywords: [
      "API documentation",
      "GitBook alternative",
      "docs hosting indie",
      "llms.txt generator",
      "developer docs",
      "indie hacker documentation",
      "ReadMe alternative",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://docs-pulse.vercel.app",
    name: "API 文档托管",
    title: "API 文档托管 — GitBook 平替，独立开发者 $29/月",
    description:
      "免费体验 5 个文档站。GitBook $65/月 + 按人头？$29/月一口价：无限页面、自定义域名、自动 llms.txt、Markdown 编辑。",
    keywords: [
      "API 文档托管",
      "GitBook 替代品",
      "独立开发者文档",
      "llms.txt 生成",
      "开发者文档",
      "ReadMe 替代",
      "API documentation",
      "GitBook alternative",
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
  { path: "/docs", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/gitbook-alternative-indie-hackers",
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
