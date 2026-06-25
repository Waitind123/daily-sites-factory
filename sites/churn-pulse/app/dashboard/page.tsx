import { HealthDashboard } from "@/components/HealthDashboard";
import { getLocale } from "@/lib/locale";

export default async function DashboardPage() {
  const locale = await getLocale();
  return <HealthDashboard locale={locale} />;
}
