import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://virtual-cowork-room.vercel.app",
    name: "Virtual Cowork",
    title: "Virtual Cowork — Quiet focus room for remote workers, $29/mo",
    description:
      "5 free cowork sessions. Flow Club $40/mo? $29/mo flat: pomodoro, ambient sounds, body doubling — beat remote-work loneliness.",
    keywords: [
      "virtual coworking",
      "Flow Club alternative",
      "remote work loneliness",
      "body doubling",
      "pomodoro timer",
      "ambient sounds",
      "focus room",
      "indie hacker",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://virtual-cowork-room.vercel.app",
    name: "远程共工室",
    title: "远程共工室 — 虚拟专注空间，告别远程孤独，$29/月",
    description:
      "免费体验 5 次共工会话。Flow Club $40/月太贵？$29/月一口价：番茄钟、白噪音、虚拟同伴陪伴，远程工作者不再独自办公。",
    keywords: [
      "远程共工室",
      "虚拟共工",
      "Flow Club 替代品",
      "远程办公孤独",
      "专注空间",
      "番茄钟",
      "白噪音",
      "body doubling",
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
  { path: "/room", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/remote-work-loneliness",
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
    applicationCategory: "ProductivityApplication",
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
