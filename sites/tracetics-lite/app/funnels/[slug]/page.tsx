import { notFound } from "next/navigation";
import { PublicFunnel } from "@/components/PublicFunnel";
import { getFunnelBySlug } from "@/lib/funnels";
import { getLocale } from "@/lib/locale";

export default async function FunnelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const funnel = getFunnelBySlug(slug);
  if (!funnel) notFound();
  const locale = await getLocale();
  return <PublicFunnel funnel={funnel} locale={locale} />;
}
