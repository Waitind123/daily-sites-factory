import { DayPassBoard } from "@/components/DayPassBoard";
import { getLocale } from "@/lib/locale";

export default async function PassesPage() {
  const locale = await getLocale();
  return <DayPassBoard locale={locale} />;
}
