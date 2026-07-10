import { AlertDashboard } from "@/components/AlertDashboard";
import { getAlertsCopy } from "@/lib/copy-alerts";
import { getLocale } from "@/lib/locale";

export default async function AlertsPage() {
  const locale = await getLocale();
  const c = getAlertsCopy(locale);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">{c.title}</h1>
        <p className="mt-2 text-muted">{c.subtitle}</p>
      </div>
      <AlertDashboard locale={locale} />
    </div>
  );
}
