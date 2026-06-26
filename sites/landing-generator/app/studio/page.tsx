import { LandingStudio } from "@/components/LandingStudio";
import { getStudioCopy } from "@/lib/copy-app";
import { getLocale } from "@/lib/locale";

export default async function StudioPage() {
  const locale = await getLocale();
  const c = getStudioCopy(locale);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">{c.pageTitle}</h1>
        <p className="mt-2 text-muted">{c.pageSubtitle}</p>
      </div>
      <LandingStudio locale={locale} />
    </div>
  );
}
