import type { Metadata } from "next";

export type SiteSeoConfig = {
  url: string;
  name: string;
  title: string;
  description: string;
  keywords: string[];
  locale?: string;
  twitterHandle?: string;
};

export function buildSiteMetadata(
  config: SiteSeoConfig,
  overrides?: Partial<Metadata>
): Metadata {
  const { url, name, title, description, keywords, locale = "zh_CN" } = config;

  return {
    metadataBase: new URL(url),
    title: {
      default: title,
      template: `%s · ${name}`,
    },
    description,
    keywords: keywords.join(", "),
    authors: [{ name, url }],
    creator: name,
    publisher: name,
    applicationName: name,
    category: "technology",
    openGraph: {
      type: "website",
      locale,
      url,
      siteName: name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    ...overrides,
  };
}

/** JSON-LD WebApplication — 各站 lib/seo.ts 可 re-export */
export function buildWebApplicationJsonLd(config: {
  url: string;
  name: string;
  description: string;
  locale?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: config.name,
    description: config.description,
    url: config.url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: config.locale === "zh_CN" ? "zh-CN" : "en",
  };
}

export function buildSitemapEntries(
  baseUrl: string,
  paths: { path: string; priority?: number; changeFrequency?: "weekly" | "monthly" | "daily" }[]
) {
  return paths.map(({ path, priority = 0.7, changeFrequency = "weekly" }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
