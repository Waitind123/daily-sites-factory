import { TimezonePlanner } from "@/components/TimezonePlanner";
import { getLocale } from "@/lib/locale";
import { getPlannerCopy } from "@/lib/copy-app";

export default async function PlannerPage() {
  const locale = await getLocale();
  const c = getPlannerCopy(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">{c.title}</h1>
        <p className="mt-2 text-muted text-sm sm:text-base">{c.subtitle}</p>
      </div>
      <TimezonePlanner locale={locale} />
    </div>
  );
}
