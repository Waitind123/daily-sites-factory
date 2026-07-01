import { notFound } from "next/navigation";
import { PublicStatusPage } from "@/components/PublicStatusPage";
import { getLocale } from "@/lib/locale";
import { getPageBySlug } from "@/lib/status-pages";

export default async function PublicStatusPageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <PublicStatusPage page={page} locale={locale} />;
}
