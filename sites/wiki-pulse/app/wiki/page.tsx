import { getLocale } from "@/lib/locale";
import { WikiDashboard } from "@/components/WikiDashboard";

export default async function WikiPage() {
  const locale = await getLocale();
  return <WikiDashboard locale={locale} />;
}
