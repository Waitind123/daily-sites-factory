import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://alt-stack.vercel.app",
    name: "Alt Stack",
    title: "Alt Stack — open-source SaaS alternatives & self-host guides $9.9/mo",
    description:
      "5 free deep dives. Curated directory of 50+ open-source alternatives to Slack, Jira, Zapier, Auth0 with Docker configs & savings calculator. $9.9/mo unlimited.",
    keywords: [
      "open source SaaS alternatives",
      "self-hosted tools",
      "Slack alternative self-hosted",
      "Jira open source alternative",
      "Zapier self-hosted n8n",
      "AltStack alternative",
      "Docker Compose SaaS",
      "digital sovereignty tools",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://alt-stack.vercel.app",
    name: "Alt Stack",
    title: "Alt Stack — 开源 SaaS 替代品目录与自托管指南 $9.9/月",
    description:
      "免费体验 5 次深度查阅。50+ 精选开源替代品替代 Slack、Jira、Zapier、Auth0，含 Docker 配置与节省计算器。$9.9/月无限查阅。",
    keywords: [
      "开源 SaaS 替代品",
      "自托管工具",
      "Slack 开源替代",
      "Jira 开源替代",
      "Zapier 自托管 n8n",
      "AltStack 替代",
      "Docker Compose 部署",
      "数字主权工具",
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
    path: "/guide/open-source-saas-alternatives",
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
