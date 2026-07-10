import { GdprScanner } from "@/components/GdprScanner";
import { getLocale } from "@/lib/locale";
import { getGenerateCopy } from "@/lib/copy-app";

export default async function ScanPage() {
  const locale = await getLocale();
  const t = getGenerateCopy(locale);

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">{t.title}</h1>
        <p className="mt-2 text-muted">{t.subtitle}</p>
      </div>
      <GdprScanner locale={locale} />
    </div>
  );
}
