import { BookmarkDashboard } from "@/components/BookmarkDashboard";
import { getLocale } from "@/lib/locale";

export default async function BookmarksPage() {
  const locale = await getLocale();
  return <BookmarkDashboard locale={locale} />;
}
