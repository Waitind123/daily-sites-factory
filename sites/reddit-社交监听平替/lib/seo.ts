import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://reddit-radar.vercel.app",
    name: "Reddit Radar",
    title: "Reddit Radar — Reddit social listening for indie hackers, $9.9/mo",
    description:
      "5 free scans. Monitor Reddit for high-intent buying signals — alternative to, switching from, pricing pain. No Brand24 noise. Intent scoring for founders. $9.9/mo flat.",
    keywords: [
      "Reddit social listening",
      "Brand24 alternative Reddit",
      "Mention alternative indie",
      "Reddit intent monitoring",
      "alternative to switching from",
      "F5Bot alternative",
      "Reddit lead generation SaaS",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://reddit-radar.vercel.app",
    name: "Reddit 社交监听平替",
    title: "Reddit 社交监听平替 — Brand24/Mention Reddit 专注版，$9.9/月",
    description:
      "免费体验 5 次扫描。专注 Reddit 高意向购买信号 — 寻找替代、正在切换、价格不满。过滤 Brand24 噪音，意向评分，$9.9/月一口价。",
    keywords: [
      "Reddit 社交监听",
      "Brand24 替代品 Reddit",
      "Mention 替代品独立开发者",
      "Reddit 意向监控",
      "寻找替代正在切换",
      "F5Bot 替代品",
      "Reddit 获客 SaaS",
    ],
    locale: "zh_CN",
  },
} as const;

export const siteConfig = siteConfigByLocale.zh;

export const metadata = buildSiteMetadata({
  ...siteConfigByLocale.en,
  keywords: [...siteConfigByLocale.en.keywords],
});

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
  { path: "/monitor", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/reddit-social-listening-indie",
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
