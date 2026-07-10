import { CoworkingBoard } from "@/components/CoworkingBoard";
import { getLocale } from "@/lib/locale";

export default async function SpacesPage() {
  const locale = await getLocale();
  return <CoworkingBoard locale={locale} />;
}
