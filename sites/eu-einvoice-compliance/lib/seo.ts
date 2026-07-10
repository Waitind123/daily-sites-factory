import type { Metadata } from "next";
import { buildSiteMetadata } from "./site-seo";
import type { Locale } from "./i18n-shared";

export { buildSiteMetadata } from "./site-seo";

const siteConfigByLocale = {
  en: {
    url: "https://eu-einvoice-compliance.vercel.app",
    name: "EU E-Invoice Compliance",
    title: "EU E-Invoice Compliance — UBL 2.1 KSeF-ready invoices, $9.9/mo",
    description:
      "Poland e-invoice mandatory April 2026. Generate EN16931 UBL XML, validate VAT fields, multi-currency export. 5 free invoices, then $9.9/mo flat.",
    keywords: [
      "EU e-invoice",
      "UBL 2.1 invoice generator",
      "Poland KSeF compliance",
      "EN16931 invoice",
      "Peppol billing",
      "VAT invoice XML",
      "freelancer e-invoice Europe",
    ],
    locale: "en_US",
  },
  zh: {
    url: "https://eu-einvoice-compliance.vercel.app",
    name: "欧盟电子发票合规",
    title: "欧盟电子发票合规 — UBL 2.1 KSeF 就绪发票，$9.9/月",
    description:
      "波兰 2026 年 4 月起强制电子发票。生成 EN16931 UBL XML、校验增值税字段、多币种导出。免费体验 5 张，之后 $9.9/月一口价。",
    keywords: [
      "欧盟电子发票",
      "UBL 2.1 发票生成",
      "波兰 KSeF 合规",
      "EN16931 发票",
      "Peppol 账单",
      "增值税发票 XML",
      "欧洲自由职业电子发票",
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
  { path: "/invoices", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/join", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/guide/poland-e-invoice-ubl-compliance-2026",
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
