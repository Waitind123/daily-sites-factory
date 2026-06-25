import { TeamStudio } from "@/components/TeamStudio";
import { getLocale } from "@/lib/locale";

export default async function TeamPage() {
  const locale = await getLocale();
  return <TeamStudio locale={locale} />;
}
