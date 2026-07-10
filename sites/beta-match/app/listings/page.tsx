import { ListingsDashboard } from "@/components/ListingsDashboard";
import { getLocale } from "@/lib/locale";

export default async function ListingsPage() {
  const locale = await getLocale();
  return <ListingsDashboard locale={locale} />;
}
