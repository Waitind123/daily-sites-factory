import { notFound } from "next/navigation";
import { PublicBetaListing } from "@/components/PublicBetaListing";
import { getLocale } from "@/lib/locale";
import { getListingBySlug } from "@/lib/listings";

export default async function PublicBetaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const listing = getListingBySlug(slug);

  if (!listing) {
    notFound();
  }

  return <PublicBetaListing listing={listing} locale={locale} />;
}
