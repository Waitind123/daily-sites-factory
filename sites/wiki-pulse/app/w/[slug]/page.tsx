import { notFound } from "next/navigation";
import { PublicWikiSite } from "@/components/PublicWikiSite";
import { getWikiSpaceBySlug, recordView } from "@/lib/wiki";
import { getLocale } from "@/lib/locale";

export default async function PublicWikiPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const space = getWikiSpaceBySlug(slug);
  if (!space) notFound();

  recordView(space.id);
  const locale = await getLocale();

  return <PublicWikiSite space={space} locale={locale} />;
}
