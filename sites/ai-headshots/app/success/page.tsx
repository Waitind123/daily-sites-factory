import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SuccessClient } from "@/components/SuccessClient";
import { getLocale } from "@/lib/locale";
import {
  ALLOWED_RETURN_ORIGIN,
  CHECKOUT_HUB_URL,
  RETURN_ORIGIN_COOKIE,
} from "@/lib/polar-config";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ demo?: string; session_id?: string; currency?: string }>;
}) {
  const params = await searchParams;
  const cookieStore = await cookies();
  const returnOrigin = cookieStore
    .get(RETURN_ORIGIN_COOKIE)
    ?.value?.replace(/\/$/, "");
  const hub = CHECKOUT_HUB_URL.replace(/\/$/, "");

  if (
    returnOrigin &&
    returnOrigin !== hub &&
    ALLOWED_RETURN_ORIGIN.test(returnOrigin)
  ) {
    const q = new URLSearchParams();
    if (params.demo) q.set("demo", params.demo);
    if (params.session_id) q.set("session_id", params.session_id);
    if (params.currency) q.set("currency", params.currency);
    q.set("polar", "true");
    redirect(`/api/success-forward?${q.toString()}`);
  }

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
