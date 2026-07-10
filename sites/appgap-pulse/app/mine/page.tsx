import { MineDashboard } from "@/components/MineDashboard";
import { getLocale } from "@/lib/locale";

export default async function MinePage() {
  const locale = await getLocale();
  return <MineDashboard locale={locale} />;
}
