import { MetricsDashboard } from "@/components/MetricsDashboard";
import { getLocale } from "@/lib/locale";

export default async function DashboardPage() {
  const locale = await getLocale();
  return <MetricsDashboard locale={locale} />;
}
