import { DiagnoseDashboard } from "@/components/DiagnoseDashboard";
import { getLocale } from "@/lib/locale";
import { buildSiteMetadata } from "@/lib/site-seo";
import { getSiteConfig } from "@/lib/seo";
import { getDiagnoseCopy } from "@/lib/copy-app";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDiagnoseCopy(locale);
  const cfg = getSiteConfig(locale);
  return buildSiteMetadata({ ...cfg, keywords: [...cfg.keywords] }, {
    title: t.title,
    description: t.subtitle,
  });
}

export default async function DiagnosePage() {
  const locale = await getLocale();
  return <DiagnoseDashboard locale={locale} />;
}
