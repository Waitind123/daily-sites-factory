import { TicketDashboard } from "@/components/TicketDashboard";
import { getLocale } from "@/lib/locale";

export default async function InboxPage() {
  const locale = await getLocale();
  return <TicketDashboard locale={locale} />;
}
