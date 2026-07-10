import { VoteDashboard } from "@/components/VoteDashboard";
import { getLocale } from "@/lib/locale";

export default async function BoardsPage() {
  const locale = await getLocale();
  return <VoteDashboard locale={locale} />;
}
