import { DunningDashboard } from "@/components/DunningDashboard";
import { getLocale } from "@/lib/locale";

export default async function DashboardPage() {
  const locale = await getLocale();
  return <DunningDashboard locale={locale} />;
}
