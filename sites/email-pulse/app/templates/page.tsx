import { EmailDashboard } from "@/components/EmailDashboard";
import { getLocale } from "@/lib/locale";

export default async function TemplatesPage() {
  const locale = await getLocale();
  return <EmailDashboard locale={locale} />;
}
