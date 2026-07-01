import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://wiki-pulse-coral.vercel.app",
    name: "Wiki Pulse",
    title: "Wiki Pulse — Notion/Obsidian team wiki alternative, $9.9/mo flat",
    description:
      "5 free wiki spaces. Notion $15+/seat? Obsidian solo only? $9.9/mo flat: AI search, MCP for Cursor/Claude, team collaboration, markdown export.",
    keywords: [
      "team wiki",
      "Notion alternative",
      "Obsidian team collaboration",
      "knowledge base indie",
      "MCP wiki integration",
      "team knowledge base",
      "indie hacker wiki",
      "OpenKnowledge alternative",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://wiki-pulse-coral.vercel.app",
    name: "团队知识库",
    title: "团队知识库 — Notion/Obsidian 平替，独立团队 $9.9/月",
    description:
      "免费体验 5 个知识库空间。Notion $15+/人？Obsidian 只能单人？$9.9/月一口价：AI 搜索、Cursor/Claude MCP、团队协作、Markdown 导出。",
    keywords: [
      "团队知识库",
      "Notion 替代品",
      "Obsidian 团队协作",
      "独立团队知识库",
      "MCP 知识库集成",
      "team wiki",
      "Notion alternative",
      "knowledge base",
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
  { path: "/wiki", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/notion-obsidian-team-wiki-alternative",
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
