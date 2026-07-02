import { AffiliateDashboard } from "@/components/AffiliateDashboard";
import { getLocale } from "@/lib/locale";

export default async function DashboardPage() {
  const locale = await getLocale();
  return <AffiliateDashboard locale={locale} />;
}
