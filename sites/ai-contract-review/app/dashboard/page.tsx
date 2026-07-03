import { ContractReviewDashboard } from "@/components/ContractReviewDashboard";
import { getLocale } from "@/lib/locale";

export default async function DashboardPage() {
  const locale = await getLocale();
  return <ContractReviewDashboard locale={locale} />;
}
