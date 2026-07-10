import { notFound } from "next/navigation";
import { PublicBoard } from "@/components/PublicBoard";
import { getLocale } from "@/lib/locale";
import { getBoardBySlug } from "@/lib/votes";

type Props = { params: Promise<{ slug: string }> };

export default async function BoardPage({ params }: Props) {
  const { slug } = await params;
  const board = getBoardBySlug(slug);
  if (!board) notFound();
  const locale = await getLocale();
  return <PublicBoard board={board} locale={locale} />;
}
