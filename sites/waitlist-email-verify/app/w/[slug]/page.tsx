import { notFound } from "next/navigation";
import { PublicWaitlist } from "@/components/PublicWaitlist";
import { getLocale } from "@/lib/locale";
import { getWaitlistBySlug } from "@/lib/waitlists";

export default async function PublicWaitlistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const waitlist = getWaitlistBySlug(slug);

  if (!waitlist) {
    notFound();
  }

  return <PublicWaitlist waitlist={waitlist} locale={locale} />;
}
