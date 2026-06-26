import { MonitorDashboard } from "@/components/MonitorDashboard";
import { getLocale } from "@/lib/locale";

export default async function MonitorsPage() {
  const locale = await getLocale();
  return <MonitorDashboard locale={locale} />;
}
