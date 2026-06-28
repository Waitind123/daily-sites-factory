import { getLocale } from "@/lib/locale";
import { SpyDashboard } from "@/components/SpyDashboard";

export default async function SpyPage() {
  const locale = await getLocale();
  return <SpyDashboard locale={locale} />;
}
