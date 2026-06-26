import { CarbonCalculator } from "@/components/CarbonCalculator";
import { getLocale } from "@/lib/locale";
import { getCalcCopy } from "@/lib/copy-app";

export default async function CalculatePage() {
  const locale = await getLocale();
  const t = getCalcCopy(locale);

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">{t.title}</h1>
        <p className="mt-2 text-muted text-sm sm:text-base">{t.subtitle}</p>
      </div>
      <CarbonCalculator locale={locale} />
    </div>
  );
}
