import { notFound } from "next/navigation";
import { PublicDocSite } from "@/components/PublicDocSite";
import { getDocSiteBySlug, recordView } from "@/lib/docs";
import { getLocale } from "@/lib/locale";

export default async function PublicDocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = getDocSiteBySlug(slug);
  if (!site) notFound();

  recordView(site.id);
  const locale = await getLocale();

  return <PublicDocSite site={site} locale={locale} />;
}
