import { HeadshotStudio } from "@/components/HeadshotStudio";
import { getLocale } from "@/lib/locale";

export default async function StudioPage() {
  const locale = await getLocale();
  return <HeadshotStudio locale={locale} />;
}
