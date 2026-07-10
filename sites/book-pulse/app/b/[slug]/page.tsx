import { PublicBookingClient } from "@/components/PublicBookingClient";
import { getBookingPageBySlug } from "@/lib/bookings";
import { getLocale } from "@/lib/locale";

export default async function PublicBookingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const page = getBookingPageBySlug(slug) ?? null;

  return <PublicBookingClient page={page} locale={locale} />;
}
