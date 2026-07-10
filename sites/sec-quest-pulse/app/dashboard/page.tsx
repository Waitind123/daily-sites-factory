import { SecQuestDashboard } from "@/components/SecQuestDashboard";
import { getLocale } from "@/lib/locale";

export default async function DashboardPage() {
  const locale = await getLocale();
  return <SecQuestDashboard locale={locale} />;
}
