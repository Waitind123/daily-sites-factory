import { WaitlistDashboard } from "@/components/WaitlistDashboard";
import { getLocale } from "@/lib/locale";

export default async function ListsPage() {
  const locale = await getLocale();
  return <WaitlistDashboard locale={locale} />;
}
