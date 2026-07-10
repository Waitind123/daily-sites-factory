import { QuoteDashboard } from "@/components/QuoteDashboard";
import { getLocale } from "@/lib/locale";

export default async function QuotesPage() {
  const locale = await getLocale();
  return <QuoteDashboard locale={locale} />;
}
