import { WallStudio } from "@/components/WallStudio";
import { getLocale } from "@/lib/locale";

export default async function WallPage() {
  const locale = await getLocale();
  return <WallStudio locale={locale} />;
}
