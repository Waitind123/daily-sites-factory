import { DraftDashboard } from "@/components/DraftDashboard";
import { getLocale } from "@/lib/locale";

export default async function DraftPage() {
  const locale = await getLocale();
  return <DraftDashboard locale={locale} />;
}
