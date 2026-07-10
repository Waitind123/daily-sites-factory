import { FunnelDashboard } from "@/components/FunnelDashboard";
import { getLocale } from "@/lib/locale";

export default async function FunnelsPage() {
  const locale = await getLocale();
  return <FunnelDashboard locale={locale} />;
}
