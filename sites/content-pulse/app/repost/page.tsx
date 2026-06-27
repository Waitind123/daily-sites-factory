import { RepostDashboard } from "@/components/RepostDashboard";
import { getLocale } from "@/lib/locale";

export default async function RepostPage() {
  const locale = await getLocale();
  return <RepostDashboard locale={locale} />;
}
