import { ConvertDashboard } from "@/components/ConvertDashboard";
import { getLocale } from "@/lib/locale";

export default async function ConvertPage() {
  const locale = await getLocale();
  return <ConvertDashboard locale={locale} />;
}
