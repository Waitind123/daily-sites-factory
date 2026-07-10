import { JobBoard } from "@/components/JobBoard";
import { getLocale } from "@/lib/locale";

export default async function JobsPage() {
  const locale = await getLocale();
  return <JobBoard locale={locale} />;
}
