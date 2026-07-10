"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Board } from "@/lib/votes";
import type { Locale } from "@/lib/i18n-shared";
import {
  getApiErrorMessage,
  getBoardsCopy,
  getSampleIdeas,
  getStatusLabel,
} from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function VoteDashboard({ locale }: { locale: Locale }) {
  const t = getBoardsCopy(locale);
  const sampleIdeas = getSampleIdeas(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [created, setCreated] = useState<Board | null>(null);
  const [boards, setBoards] = useState<Board[]>([]);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/boards")
      .then((r) => r.json())
      .then((d) => setBoards(d.boards ?? []))
      .catch(() => null);
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setCreated(null);

    try {
      const res = await fetch("/api/boards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description }),
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

      setCreated(data.board);
      setBoards((b) => [data.board, ...b]);
      setName("");
      setDescription("");
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("BOARD_CREATE_FAILED", locale));
    } finally {
      setLoading(false);
    }
  }

  const showTrialLow =
    trial && !trial.isMember && trial.remaining > 0 && trial.remaining <= 2;

  const showStickyBar = trial && !trial.isMember;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      {showTrialLow && (
        <div className="mb-6 rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="font-semibold text-foreground">
              {t.trialLowTitle.replace("{remaining}", String(trial.remaining))}
            </p>
            <p className="mt-1 text-sm text-muted">{t.trialLowBody}</p>
          </div>
          <Link
            href="/join?utm_source=feature-vote&utm_medium=trial_low&utm_campaign=sticky"
            className="shrink-0 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 text-center"
          >
            {t.trialLowCta}
          </Link>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{t.title}</h1>
          <p className="mt-1 text-muted text-sm">{t.subtitle}</p>
        </div>
        {trial && (
          <div className="rounded-lg border border-border bg-surface px-4 py-2 text-sm">
            {trial.isMember ? (
              <span className="text-brand-500 font-medium">{t.memberBadge}</span>
            ) : (
              <span className="text-muted">
                {t.freeBoards}{" "}
                <strong className="text-foreground">
                  {trial.remaining}/{trial.limit}
                </strong>
              </span>
            )}
          </div>
        )}
      </div>

      {showPaywall && (
        <div className="mb-6 rounded-xl border border-brand-600/50 bg-brand-600/10 p-5">
          <p className="font-semibold text-foreground">{t.paywallTitle}</p>
          <p className="mt-1 text-sm text-muted">{t.paywallBody}</p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      <form onSubmit={handleCreate} className="rounded-xl border border-border bg-surface p-6 mb-8">
        <h2 className="font-semibold text-lg mb-4">{t.formTitle}</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.boardName}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.boardNamePlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.description}</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t.descriptionPlaceholder}
              rows={2}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            />
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? t.creating : t.createBoard}
          </button>
        </div>
      </form>

      {created && (
        <div className="mb-8 rounded-xl border border-emerald-600/50 bg-emerald-600/10 p-5">
          <p className="font-semibold text-foreground">{t.createdTitle}</p>
          <p className="mt-2 text-sm text-muted">{t.createdHint}</p>
          <code className="mt-2 block rounded-lg bg-background border border-border p-3 text-sm text-brand-500 break-all">
            {typeof window !== "undefined"
              ? `${window.location.origin}/boards/${created.slug}`
              : `/boards/${created.slug}`}
          </code>
          <Link
            href={`/boards/${created.slug}`}
            className="mt-3 inline-block text-sm text-brand-500 hover:underline"
          >
            {t.openBoard}
          </Link>
        </div>
      )}

      {boards.length > 0 && (
        <div className="mb-8">
          <h2 className="font-semibold text-lg mb-4">{t.yourBoards}</h2>
          <div className="space-y-3">
            {boards.map((b) => (
              <Link
                key={b.id}
                href={`/boards/${b.slug}`}
                className="block rounded-xl border border-border bg-surface p-4 hover:border-brand-600/50 transition-colors"
              >
                <p className="font-medium text-foreground">{b.name}</p>
                {b.description && <p className="text-sm text-muted mt-1">{b.description}</p>}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-xl border border-border bg-surface-muted/30 p-6">
        <h3 className="font-semibold text-foreground mb-4">{t.exampleTitle}</h3>
        <div className="space-y-3">
          {sampleIdeas.map((idea) => (
            <div
              key={idea.title}
              className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3"
            >
              <span className="text-sm text-foreground">{idea.title}</span>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-muted">{getStatusLabel(idea.status, locale)}</span>
                <span className="font-semibold text-brand-500">▲ {idea.votes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showStickyBar && (
        <div className="fixed bottom-0 inset-x-0 z-40 border-t border-border bg-surface/95 backdrop-blur px-4 py-3 sm:hidden">
          <div className="flex items-center justify-between gap-3 max-w-4xl mx-auto">
            <p className="text-xs text-muted">
              {t.stickyRemaining.replace("{remaining}", String(trial.remaining))}
            </p>
            <Link
              href="/join"
              className="shrink-0 rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-700"
            >
              {t.stickyCta}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
