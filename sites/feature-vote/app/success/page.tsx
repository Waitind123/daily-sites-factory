import { SuccessClient } from "@/components/SuccessClient";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ demo?: string; session_id?: string }>;
}) {
  const params = await searchParams;

  return (
    <SuccessClient
      isDemo={params.demo === "true"}
      sessionId={params.session_id}
    />
  );
}
