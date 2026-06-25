"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { BookingPage } from "@/lib/bookings";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getDashboardCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function BookingDashboard({ locale }: { locale: Locale }) {
  const t = getDashboardCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [project, setProject] = useState("");
  const [timezone, setTimezone] = useState("UTC+8");
  const [loading, setLoading] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [active, setActive] = useState<BookingPage | null>(null);
  const [pages, setPages] = useState<BookingPage[]>([]);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/bookings")
      .then((r) => r.json())
      .then((d) => setPages(d.pages ?? []))
      .catch(() => null);
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, bio, project, timezone }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(getApiErrorMessage(data.code, locale));
      }

      setActive(data.page);
      setPages((list) => [data.page, ...list]);
      setName("");
      setBio("");
      setProject("");
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("BOOKING_PUBLISH_FAILED", locale));
    } finally {
      setLoading(false);
    }
  }

  async function handlePublish(pageId: string) {
    setPublishing(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "publish", pageId }),
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

      setActive(data.page);
      if (data.trial) setTrial(data.trial);
      setPages((list) => list.map((p) => (p.id === pageId ? data.page : p)));
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("BOOKING_PUBLISH_FAILED", locale));
    } finally {
      setPublishing(false);
    }
  }

  const published = active?.publishedAt ? active : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{t.title}</h1>
        <p className="mt-2 text-muted">{t.subtitle}</p>
        {trial && (
          <p className="mt-3 text-sm">
            {trial.isMember ? (
              <span className="text-brand-500 font-medium">{t.memberBadge}</span>
            ) : (
              <span className="text-muted">
                {t.freePublishes} {trial.remaining}/{trial.limit}
              </span>
            )}
          </p>
        )}
      </div>

      {showPaywall && (
        <div className="mb-6 rounded-xl border border-brand-600/50 bg-brand-100/10 p-6 text-center">
          <h2 className="text-lg font-semibold text-foreground">{t.paywallTitle}</h2>
          <p className="mt-2 text-sm text-muted">{t.paywallBody}</p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      {error && (
        <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleCreate} className="rounded-2xl border border-border bg-surface p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">{t.createTitle}</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t.displayName}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.displayNamePlaceholder}
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t.projectLabel}</label>
            <input
              type="text"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder={t.projectPlaceholder}
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t.bioLabel}</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder={t.bioPlaceholder}
              rows={2}
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t.timezoneLabel}</label>
            <input
              type="text"
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              placeholder={t.timezonePlaceholder}
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? t.creating : t.createPage}
          </button>
        </div>
      </form>

      {active && !published && (
        <div className="mb-8 rounded-xl border border-brand-600/30 bg-brand-100/5 p-6">
          <p className="font-medium text-foreground">{t.draftTitle}</p>
          <p className="mt-2 text-sm text-muted">{t.draftHint}</p>
          <div className="mt-4 rounded-lg border border-border bg-background p-4 text-sm">
            <p className="font-medium">{active.name}</p>
            {active.project && <p className="text-muted mt-1">{t.buildingLabel} {active.project}</p>}
            <p className="text-xs text-muted mt-2">{t.slotsPreview}: Mon 10–12, Wed 14–17, Fri 9–11 ({active.timezone})</p>
          </div>
          <button
            onClick={() => handlePublish(active.id)}
            disabled={publishing}
            className="mt-4 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {publishing ? t.publishing : t.publishNow}
          </button>
        </div>
      )}

      {published && (
        <div className="mb-8 rounded-2xl border border-brand-600/30 bg-surface p-6 shadow-xl">
          <p className="text-sm text-brand-500 font-medium">{t.liveBadge}</p>
          <p className="mt-2 text-lg font-bold text-foreground">{published.name}</p>
          <p className="mt-1 text-sm text-muted break-all">
            {t.publicLink}: /b/{published.slug}
          </p>
          <Link
            href={`/b/${published.slug}`}
            className="mt-4 inline-block rounded-xl border border-border px-5 py-2 text-sm font-medium hover:bg-background"
          >
            {t.previewPage}
          </Link>
        </div>
      )}

      {pages.length > 0 && !published && (
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4">{t.yourPages}</h2>
          <div className="space-y-3">
            {pages.map((p) => (
              <div
                key={p.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border bg-surface p-4"
              >
                <div>
                  <p className="font-medium text-foreground">{p.name}</p>
                  <p className="text-xs text-muted">
                    {p.publishedAt ? `${t.statusLive} · /b/${p.slug}` : t.statusDraft}
                  </p>
                </div>
                {!p.publishedAt && (
                  <button
                    onClick={() => {
                      setActive(p);
                      handlePublish(p.id);
                    }}
                    disabled={publishing}
                    className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-background disabled:opacity-50"
                  >
                    {publishing ? t.publishing : t.publishNow}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
