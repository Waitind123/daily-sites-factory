import { LeadDashboard } from "@/components/LeadDashboard";
import { getLocale } from "@/lib/locale";

export default async function MonitorPage() {
  const locale = await getLocale();
  return <LeadDashboard locale={locale} />;
}
