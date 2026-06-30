import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://coworking-finder-lovat.vercel.app",
    name: "Coworking Finder",
    title: "Coworking Finder — global coworking directory, day-pass prices + WiFi data",
    description:
      "5 free space views. 120+ global coworking spaces with day-pass prices, WiFi speeds, video-call filters. $9.9/mo unlimited.",
    keywords: [
      "coworking space",
      "coworking finder",
      "digital nomad office",
      "coworking day pass",
      "remote work space",
      "coworking directory",
      "business travel office",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://coworking-finder-lovat.vercel.app",
    name: "联合办公 Finder",
    title: "联合办公 Finder — 全球 Coworking 空间目录，日票价格 + WiFi 实测",
    description:
      "免费体验 5 次查看完整空间详情。120+ 全球联合办公空间，日票价格透明，WiFi 实测数据，视频会议友好筛选。$9.9/月无限查看。",
    keywords: [
      "联合办公",
      "coworking space",
      "数字游民办公",
      "coworking day pass",
      "共享办公",
      "远程办公空间",
      "coworking finder",
      "出差办公",
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
  { path: "/spaces", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/find-coworking-space-digital-nomad",
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
