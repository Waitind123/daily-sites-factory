import { OgStudio } from "@/components/OgStudio";
import { getLocale } from "@/lib/locale";

export default async function StudioPage() {
  const locale = await getLocale();
  return <OgStudio locale={locale} />;
}
