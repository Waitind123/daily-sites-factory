import { ToolBrowser } from "@/components/ToolBrowser";
import { getToolsCopy } from "@/lib/copy-app";
import { getLocale } from "@/lib/locale";

export default async function ToolsPage() {
  const locale = await getLocale();
  const c = getToolsCopy(locale);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">{c.title}</h1>
        <p className="text-muted mt-2">{c.subtitle}</p>
      </div>
      <ToolBrowser locale={locale} />
    </div>
  );
}
