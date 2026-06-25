import { InvoiceDashboard } from "@/components/InvoiceDashboard";
import { getLocale } from "@/lib/locale";

export default async function InvoicesPage() {
  const locale = await getLocale();
  return <InvoiceDashboard locale={locale} />;
}
