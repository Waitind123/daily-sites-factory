import { SuccessClient } from "@/components/SuccessClient";
import { getLocale } from "@/lib/locale";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ demo?: string; session_id?: string }>;
}) {
  const params = await searchParams;
  const locale = await getLocale();

  return (
    <SuccessClient
      isDemo={params.demo === "true"}
      sessionId={params.session_id}
      locale={locale}
    />
  );
}
