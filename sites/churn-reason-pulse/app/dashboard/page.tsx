import { ChurnReasonDashboard } from "@/components/ChurnReasonDashboard";
import { getLocale } from "@/lib/locale";

export default async function DashboardPage() {
  const locale = await getLocale();
  return <ChurnReasonDashboard locale={locale} />;
}
