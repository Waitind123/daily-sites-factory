import { VisaBrowser } from "@/components/VisaBrowser";
import { getVisasCopy } from "@/lib/copy-app";
import { getLocale } from "@/lib/locale";

export default async function VisasPage() {
  const locale = await getLocale();
  const c = getVisasCopy(locale);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">{c.title}</h1>
        <p className="mt-2 text-muted">{c.subtitle}</p>
      </div>
      <VisaBrowser locale={locale} />
    </div>
  );
}
