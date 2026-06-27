import { SuccessClient } from "@/components/SuccessClient";
import { getLocale } from "@/lib/locale";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ demo?: string; session_id?: string }>;
}) {
  const locale = await getLocale();
  const params = await searchParams;

  return (
    <SuccessClient
      locale={locale}
      isDemo={params.demo === "true"}
      sessionId={params.session_id}
    />
  );
}
