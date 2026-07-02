import { FlowDashboard } from "@/components/FlowDashboard";
import { getLocale } from "@/lib/locale";

export default async function FlowsPage() {
  const locale = await getLocale();
  return <FlowDashboard locale={locale} />;
}
