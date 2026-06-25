import { FormDashboard } from "@/components/FormDashboard";
import { getLocale } from "@/lib/locale";

export default async function FormsPage() {
  const locale = await getLocale();
  return <FormDashboard locale={locale} />;
}
