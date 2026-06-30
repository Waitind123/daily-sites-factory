import { EventBrowser } from "@/components/EventBrowser";
import { getEventsCopy } from "@/lib/copy-app";
import { getLocale } from "@/lib/locale";

export default async function EventsPage() {
  const locale = await getLocale();
  const c = getEventsCopy(locale);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">{c.title}</h1>
        <p className="mt-2 text-muted">{c.subtitle}</p>
      </div>
      <EventBrowser locale={locale} />
    </div>
  );
}
