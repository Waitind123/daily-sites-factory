import { PassDashboard } from "@/components/PassDashboard";
import { getCities, searchSpaces, localizeSpace } from "@/lib/data";
import { getLocale } from "@/lib/locale";

export default async function PassesPage() {
  const locale = await getLocale();
  const cities = getCities(locale);
  const initialSpaces = searchSpaces(locale).map((s) => localizeSpace(s, locale));

  return <PassDashboard locale={locale} initialSpaces={initialSpaces} cities={cities} />;
}
