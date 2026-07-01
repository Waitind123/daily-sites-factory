"use client";

import type { Locale } from "@/lib/i18n-shared";
import { getPublicFolderCopy } from "@/lib/copy-app";

type Props = {
  locale: Locale;
  folderName: string;
  bookmarks: { title: string; url: string; favicon: string }[];
};

export function PublicFolderView({ locale, folderName, bookmarks }: Props) {
  const t = getPublicFolderCopy(locale);

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <p className="mb-2 text-sm text-zinc-500">{t.poweredBy}</p>
      <h1 className="text-2xl font-bold text-white">{folderName}</h1>
      <p className="mt-2 text-zinc-400">
        {bookmarks.length} {t.linkCount}
      </p>
      <ul className="mt-8 space-y-2">
        {bookmarks.map((b, i) => (
          <li
            key={i}
            className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/30 px-4 py-3"
          >
            <img src={b.favicon} alt="" className="h-5 w-5 rounded" width={20} height={20} />
            <a
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white hover:text-indigo-400"
            >
              {b.title}
            </a>
          </li>
        ))}
      </ul>
      {bookmarks.length === 0 && <p className="mt-4 text-zinc-500">{t.emptyFolder}</p>}
    </div>
  );
}
