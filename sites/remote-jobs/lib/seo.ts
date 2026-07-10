import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://remote-jobs-azure.vercel.app",
    name: "Remote Jobs",
    title: "Remote Jobs — Curated remote board for indie hackers, $29/mo",
    description:
      "5 free job detail views. We Work Remotely $149/yr? $29/mo flat: 200+ remote roles, transparent salaries, stack filters, unlimited company posts.",
    keywords: [
      "remote jobs",
      "remote work board",
      "We Work Remotely alternative",
      "indie hacker jobs",
      "remote developer jobs",
      "work from home",
      "remote job board",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://remote-jobs-azure.vercel.app",
    name: "远程工作板",
    title: "远程工作板 — 独立开发者远程职位聚合，$29/月",
    description:
      "免费体验 5 次查看职位详情。We Work Remotely $149/年太贵？$29/月一口价：200+ 远程岗位、透明薪资、技术栈筛选、企业无限发帖。",
    keywords: [
      "远程工作",
      "remote jobs",
      "远程职位",
      "在家办公",
      "数字游民工作",
      "远程招聘",
      "work from home jobs",
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
  { path: "/jobs", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/post", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/guide/find-remote-job-china", priority: 0.85, changeFrequency: "monthly" as const },
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
