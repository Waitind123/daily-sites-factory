import { HabitTracker } from "@/components/HabitTracker";
import { getLocale } from "@/lib/locale";
import { getHomeCopy } from "@/lib/copy";
import { getTrackCopy } from "@/lib/copy-app";

export default async function TrackPage() {
  const locale = await getLocale();
  const t = getTrackCopy(locale);
  const home = getHomeCopy(locale);

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">{t.title}</h1>
        <p className="mt-2 text-muted text-sm">{t.subtitle}</p>
      </div>
      <HabitTracker locale={locale} defaultHabits={home.defaultHabits} />
    </div>
  );
}
