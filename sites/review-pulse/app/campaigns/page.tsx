import { ReviewDashboard } from "@/components/ReviewDashboard";
import { getLocale } from "@/lib/locale";

export default async function CampaignsPage() {
  const locale = await getLocale();
  return <ReviewDashboard locale={locale} />;
}
