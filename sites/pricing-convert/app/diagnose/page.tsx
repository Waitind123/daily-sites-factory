import { PricingAnalyzer } from "@/components/PricingAnalyzer";
import { getLocale } from "@/lib/locale";

export default async function AnalyzePage() {
  const locale = await getLocale();
  return <PricingAnalyzer locale={locale} />;
}
