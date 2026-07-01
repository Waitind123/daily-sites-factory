"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import type { WikiSpace } from "@/lib/wiki";
import type { Locale } from "@/lib/i18n-shared";
import { getPublicWikiCopy } from "@/lib/copy-app";

export function PublicWikiSite({ space, locale }: { space: WikiSpace; locale: Locale }) {
  const t = getPublicWikiCopy(locale);
  const [activePage, setActivePage] = useState(space.pages[0]?.id ?? "");

  useEffect(() => {
    fetch("/api/wiki").catch(() => null);
  }, []);

  const current = space.pages.find((p) => p.id === activePage) ?? space.pages[0];

  return (
    <div className="min-h-screen">
      <div className="border-b border-border bg-surface px-4 py-3">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <div>
            <h1 className="font-bold text-lg">{space.name}</h1>
            {space.description && <p className="text-sm text-muted">{space.description}</p>}
          </div>
          <span className="text-xs text-brand-500 font-mono">{t.mcpBadge} ✓</span>
        </div>
      </div>

      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row min-h-[60vh]">
        <aside className="sm:w-56 border-b sm:border-b-0 sm:border-r border-border p-4">
          <p className="text-xs font-semibold text-muted uppercase mb-3">{t.pagesNav}</p>
          <nav className="space-y-1">
            {space.pages.length === 0 ? (
              <p className="text-sm text-muted">{t.noPages}</p>
            ) : (
              space.pages.map((page) => (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => setActivePage(page.id)}
                  className={`block w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                    current?.id === page.id
                      ? "bg-brand-600/20 text-brand-500 font-medium"
                      : "text-muted hover:text-foreground hover:bg-surface"
                  }`}
                >
                  {page.title}
                </button>
              ))
            )}
          </nav>
        </aside>

        <main className="flex-1 p-6 sm:p-8">
          {current ? (
            <article>
              <h2 className="text-2xl font-bold mb-4">{current.title}</h2>
              <div className="prose prose-invert max-w-none">
                <pre className="whitespace-pre-wrap text-sm text-muted leading-relaxed font-sans">
                  {current.content}
                </pre>
              </div>
            </article>
          ) : (
            <p className="text-muted">{t.noPages}</p>
          )}
        </main>
      </div>

      <footer className="border-t border-border py-4 text-center">
        <Link href="/" className="text-xs text-muted hover:text-brand-500">
          {t.poweredBy}
        </Link>
      </footer>
    </div>
  );
}
