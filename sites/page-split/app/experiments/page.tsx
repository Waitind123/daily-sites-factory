import { ExperimentDashboard } from "@/components/ExperimentDashboard";
import { getLocale } from "@/lib/locale";

export default async function ExperimentsPage() {
  const locale = await getLocale();
  return <ExperimentDashboard locale={locale} />;
}
