import { RankDashboard } from "@/components/RankDashboard";
import { getLocale } from "@/lib/locale";

export default async function DashboardPage() {
  const locale = await getLocale();
  return <RankDashboard locale={locale} />;
}
