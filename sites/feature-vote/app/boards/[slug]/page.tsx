import { notFound } from "next/navigation";
import { PublicBoard } from "@/components/PublicBoard";
import { getBoardBySlug } from "@/lib/votes";

type Props = { params: Promise<{ slug: string }> };

export default async function BoardPage({ params }: Props) {
  const { slug } = await params;
  const board = getBoardBySlug(slug);
  if (!board) notFound();
  return <PublicBoard board={board} />;
}
