import { notFound } from "next/navigation";
import { PublicExperiment } from "@/components/PublicExperiment";
import { getLocale } from "@/lib/locale";
import { getExperimentBySlug } from "@/lib/experiments";

type Props = { params: Promise<{ slug: string }> };

export default async function ExperimentPage({ params }: Props) {
  const { slug } = await params;
  const experiment = getExperimentBySlug(slug);
  if (!experiment) notFound();
  const locale = await getLocale();
  return <PublicExperiment experiment={experiment} locale={locale} />;
}
