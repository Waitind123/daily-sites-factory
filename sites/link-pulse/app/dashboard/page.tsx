import { LinksDashboard } from "@/components/LinksDashboard";
import { getLocale } from "@/lib/locale";

export default async function DashboardPage() {
  const locale = await getLocale();
  return <LinksDashboard locale={locale} />;
}
