import { CronDashboard } from "@/components/CronDashboard";
import { getLocale } from "@/lib/locale";

export default async function JobsPage() {
  const locale = await getLocale();
  return <CronDashboard locale={locale} />;
}
