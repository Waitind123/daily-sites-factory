"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Bookmark, Folder } from "@/lib/bookmarks";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getBookmarksCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function BookmarkDashboard({ locale }: { locale: Locale }) {
  const t = getBookmarksCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [folderId, setFolderId] = useState<string>("");
  const [folderName, setFolderName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [folders, setFolders] = useState<Folder[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/bookmarks")
      .then((r) => r.json())
      .then((d) => {
        setBookmarks(d.bookmarks ?? []);
        setFolders(d.folders ?? []);
      })
      .catch(() => null);
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/bookmarks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          title: title || undefined,
          folderId: folderId || null,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.code === "TRIAL_EXHAUSTED") {
          setShowPaywall(true);
          setTrial((prev) => (prev ? { ...prev, remaining: 0, canUse: false } : prev));
          return;
        }
        throw new Error(getApiErrorMessage(data.code, locale));
      }

      setBookmarks((list) => [data.bookmark, ...list]);
      setUrl("");
      setTitle("");
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : getApiErrorMessage("BOOKMARK_SAVE_FAILED", locale)
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleCreateFolder(e: React.FormEvent) {
    e.preventDefault();
    if (!folderName.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/bookmarks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "createFolder",
          folderName,
          isPublic: true,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(getApiErrorMessage(data.code, locale));
      setFolders((list) => [data.folder, ...list]);
      setFolderId(data.folder.id);
      setFolderName("");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : getApiErrorMessage("FOLDER_CREATE_FAILED", locale)
      );
    } finally {
      setLoading(false);
    }
  }

  const filtered = bookmarks.filter(
    (b) =>
      !search ||
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.url.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">{t.title}</h1>
        <p className="mt-2 text-zinc-400">{t.subtitle}</p>
        {trial?.isMember ? (
          <p className="mt-3 text-sm text-indigo-400">{t.memberBadge}</p>
        ) : trial ? (
          <p className="mt-3 text-sm text-zinc-500">
            {t.freeSaves}: {trial.remaining}/{trial.limit}
          </p>
        ) : null}
      </div>

      {showPaywall && (
        <div className="mb-8 rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-6">
          <h2 className="text-lg font-semibold text-white">{t.paywallTitle}</h2>
          <p className="mt-2 text-zinc-400">{t.paywallBody}</p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      <div className="mb-6">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-indigo-500 focus:outline-none"
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <form onSubmit={handleSave} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="mb-4 text-lg font-semibold text-white">{t.formTitle}</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-zinc-400">{t.urlLabel}</label>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={t.urlPlaceholder}
                required
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder-zinc-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-zinc-400">{t.titleLabel}</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={t.titlePlaceholder}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder-zinc-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-zinc-400">{t.folderLabel}</label>
              <select
                value={folderId}
                onChange={(e) => setFolderId(e.target.value)}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-indigo-500 focus:outline-none"
              >
                <option value="">{t.noFolder}</option>
                {folders.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.name}
                  </option>
                ))}
              </select>
            </div>
            {error && <p className="text-sm text-red-400">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-indigo-600 py-2.5 font-medium text-white hover:bg-indigo-500 disabled:opacity-50"
            >
              {loading ? t.saving : t.saveBookmark}
            </button>
          </div>
        </form>

        <form
          onSubmit={handleCreateFolder}
          className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
        >
          <h2 className="mb-4 text-lg font-semibold text-white">{t.folderFormTitle}</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-zinc-400">{t.folderNameLabel}</label>
              <input
                type="text"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                placeholder={t.folderNamePlaceholder}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder-zinc-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <p className="text-xs text-zinc-500">{t.publicFolderHint}</p>
            <button
              type="submit"
              disabled={loading || !folderName.trim()}
              className="w-full rounded-lg border border-zinc-600 py-2.5 font-medium text-white hover:border-indigo-500 disabled:opacity-50"
            >
              {t.createFolder}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-lg font-semibold text-white">{t.yourBookmarks}</h2>
        {filtered.length === 0 ? (
          <p className="text-zinc-500">{t.emptyState}</p>
        ) : (
          <ul className="space-y-2">
            {filtered.map((b) => (
              <li
                key={b.id}
                className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/30 px-4 py-3"
              >
                <img src={b.favicon} alt="" className="h-5 w-5 rounded" width={20} height={20} />
                <div className="min-w-0 flex-1">
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block truncate font-medium text-white hover:text-indigo-400"
                  >
                    {b.title}
                  </a>
                  <p className="truncate text-xs text-zinc-500">{b.url}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {folders.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-4 text-lg font-semibold text-white">{t.publicFolders}</h2>
          <ul className="space-y-2">
            {folders
              .filter((f) => f.isPublic)
              .map((f) => (
                <li key={f.id}>
                  <Link
                    href={`/bookmarks/f/${f.slug}`}
                    className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/30 px-4 py-3 hover:border-indigo-500/50"
                  >
                    <span className="font-medium text-white">{f.name}</span>
                    <span className="text-sm text-indigo-400">{t.viewFolder} →</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
