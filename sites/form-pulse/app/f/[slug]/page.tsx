import { notFound } from "next/navigation";
import { PublicForm } from "@/components/PublicForm";
import { getLocale } from "@/lib/locale";
import { getFormBySlug } from "@/lib/forms";

export default async function PublicFormPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const form = getFormBySlug(slug);

  if (!form) {
    notFound();
  }

  return <PublicForm form={form} locale={locale} />;
}
