import { SuiteDashboard } from "@/components/SuiteDashboard";
import { getLocale } from "@/lib/locale";

export default async function DashboardPage() {
  const locale = await getLocale();
  return <SuiteDashboard locale={locale} />;
}
