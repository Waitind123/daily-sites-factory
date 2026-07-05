import { CoworkRoom } from "@/components/CoworkRoom";
import { getRoomCopy } from "@/lib/copy-app";
import { getLocale } from "@/lib/locale";

export default async function RoomPage() {
  const locale = await getLocale();
  const c = getRoomCopy(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">{c.title}</h1>
        <p className="mt-2 text-muted">{c.subtitle}</p>
      </div>
      <CoworkRoom locale={locale} />
    </div>
  );
}
