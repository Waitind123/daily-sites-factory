import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://review-pulse.vercel.app",
    name: "Review Pulse",
    title: "Review Pulse — SMS Google review requests for local business, $19/mo",
    description:
      "5 free SMS sends. Podium $399/mo? $19/mo flat: automated Google review requests via SMS with direct review links. 3–5× higher conversion than email.",
    keywords: [
      "Google review request",
      "SMS review software",
      "Podium alternative",
      "local business reviews",
      "automated review requests",
      "Google review SMS",
      "review management",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://review-pulse.vercel.app",
    name: "Google 评价自动索取",
    title: "Google 评价自动索取 — 本地商家短信评价工具，$19/月",
    description:
      "免费体验 5 次短信发送。Podium 要 $399/月？$19/月一口价：服务后自动发送带 Google 直达链接的短信评价请求，转化率比邮件高 3–5 倍。",
    keywords: [
      "Google 评价索取",
      "短信评价软件",
      "Podium 替代品",
      "本地商家评价",
      "自动评价请求",
      "Google 评价短信",
      "评价管理",
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
  { path: "/campaigns", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/sms-google-review-request-local-business",
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
      price: "19",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
    },
    description: cfg.description,
    url: cfg.url,
  };
}
