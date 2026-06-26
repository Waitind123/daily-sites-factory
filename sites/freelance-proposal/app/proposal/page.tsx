import { getLocale } from "@/lib/locale";
import { ProposalStudio } from "@/components/ProposalStudio";

export default async function ProposalPage() {
  const locale = await getLocale();
  return <ProposalStudio locale={locale} />;
}
