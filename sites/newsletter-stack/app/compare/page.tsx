import { CompareBrowser } from "@/components/CompareBrowser";
import { getCompareCopy } from "@/lib/copy-app";
import { getLocale } from "@/lib/locale";

export default async function ComparePage() {
  const locale = await getLocale();
  const c = getCompareCopy(locale);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">{c.title}</h1>
        <p className="mt-2 text-muted">{c.subtitle}</p>
      </div>
      <CompareBrowser locale={locale} />
    </div>
  );
}
