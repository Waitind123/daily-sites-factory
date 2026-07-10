import { ChangelogStudio } from "@/components/ChangelogStudio";
import { getLocale } from "@/lib/locale";

export default async function PublishPage() {
  const locale = await getLocale();
  return <ChangelogStudio locale={locale} />;
}
