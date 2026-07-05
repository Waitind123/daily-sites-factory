import { DocShareTool } from "@/components/DocShareTool";
import { getLocale } from "@/lib/locale";

export default async function SharePage() {
  const locale = await getLocale();
  return <DocShareTool locale={locale} />;
}
