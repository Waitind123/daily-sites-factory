import { BookingDashboard } from "@/components/BookingDashboard";
import { getLocale } from "@/lib/locale";

export default async function DashboardPage() {
  const locale = await getLocale();
  return <BookingDashboard locale={locale} />;
}
