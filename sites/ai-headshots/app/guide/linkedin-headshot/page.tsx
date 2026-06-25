import type { Metadata } from "next";
import { GuideArticle } from "@/components/GuideArticle";
import { getGuideCopy } from "@/lib/copy-guide";
import { getLocale } from "@/lib/locale";
import { buildSiteMetadata } from "@/lib/site-seo";
import { getSiteConfig } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const g = getGuideCopy(locale);
  const cfg = getSiteConfig(locale);
  return buildSiteMetadata({ ...cfg, keywords: [...cfg.keywords] }, {
    title: g.meta.title,
    description: g.meta.description,
  });
}

export default async function GuidePage() {
  const locale = await getLocale();
  return <GuideArticle locale={locale} />;
}
