import { SuccessClient } from "@/components/SuccessClient";
import { getLocale } from "@/lib/locale";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ demo?: string; session_id?: string; currency?: string }>;
}) {
  const params = await searchParams;
  const locale = await getLocale();

  return (
    <SuccessClient
      locale={locale}
      isDemo={params.demo === "true"}
      sessionId={params.session_id}
      currency={params.currency}
    />
  );
}
