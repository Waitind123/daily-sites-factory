import { ProfitDashboard } from "@/components/ProfitDashboard";
import { getLocale } from "@/lib/locale";

export default async function DashboardPage() {
  const locale = await getLocale();
  return <ProfitDashboard locale={locale} />;
}
