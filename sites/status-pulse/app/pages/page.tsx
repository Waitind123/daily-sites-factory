import { StatusDashboard } from "@/components/StatusDashboard";
import { getLocale } from "@/lib/locale";

export default async function PagesPage() {
  const locale = await getLocale();
  return <StatusDashboard locale={locale} />;
}
