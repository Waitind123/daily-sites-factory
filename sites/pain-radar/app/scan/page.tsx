import { ScanDashboard } from "@/components/ScanDashboard";
import { getLocale } from "@/lib/locale";

export default async function ScanPage() {
  const locale = await getLocale();
  return <ScanDashboard locale={locale} />;
}
