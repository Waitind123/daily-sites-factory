import { CitiesDashboard } from "@/components/CitiesDashboard";
import { getLocale } from "@/lib/locale";

export default async function RankingsPage() {
  const locale = await getLocale();
  return <CitiesDashboard locale={locale} />;
}
