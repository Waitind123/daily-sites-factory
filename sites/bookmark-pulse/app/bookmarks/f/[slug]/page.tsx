import { notFound } from "next/navigation";
import { PublicFolderView } from "@/components/PublicFolderView";
import { listPublicFolderBookmarks } from "@/lib/bookmarks";
import { getLocale } from "@/lib/locale";

export default async function PublicFolderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const data = listPublicFolderBookmarks(slug);
  if (!data) notFound();

  return (
    <PublicFolderView
      locale={locale}
      folderName={data.folder.name}
      bookmarks={data.bookmarks}
    />
  );
}
