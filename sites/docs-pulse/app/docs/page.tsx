import { getLocale } from "@/lib/locale";
import { DocsDashboard } from "@/components/DocsDashboard";

export default async function DocsPage() {
  const locale = await getLocale();
  return <DocsDashboard locale={locale} />;
}
