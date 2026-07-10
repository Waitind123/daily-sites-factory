"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Waitlist } from "@/lib/waitlists";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getListsCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function WaitlistDashboard({ locale }: { locale: Locale }) {
  const t = getListsCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [created, setCreated] = useState<Waitlist | null>(null);
  const [waitlists, setWaitlists] = useState<Waitlist[]>([]);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/lists")
      .then((r) => r.json())
      .then((d) => setWaitlists(d.waitlists ?? []))
      .catch(() => null);
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setCreated(null);

    try {
      const res = await fetch("/api/lists", {
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

      setCreated(data.waitlist);
      setWaitlists((list) => [data.waitlist, ...list]);
      setName("");
      setDescription("");
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("LIST_CREATE_FAILED", locale));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{t.title}</h1>
        <p className="mt-2 text-muted">{t.subtitle}</p>
        {trial && (
          <p className="mt-3 text-sm">
            {trial.isMember ? (
              <span className="text-emerald-400 font-medium">{t.memberBadge}</span>
            ) : (
              <span className="text-muted">
                {t.freeLists}{" "}
                <strong className="text-foreground">
                  {trial.remaining}/{trial.limit}
                </strong>
              </span>
            )}
          </p>
        )}
      </div>

      {showPaywall && (
        <div className="rounded-xl border border-amber-600/40 bg-amber-950/30 p-6 mb-8">
          <h2 className="font-semibold text-lg text-amber-200">{t.paywallTitle}</h2>
          <p className="mt-2 text-sm text-muted">{t.paywallBody}</p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-lg bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      <form onSubmit={handleCreate} className="rounded-xl border border-border bg-surface p-6 mb-8">
        <h2 className="font-semibold text-lg mb-4">{t.formTitle}</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.listName}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.listNamePlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.description}</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t.descriptionPlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            />
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? t.creating : t.createList}
          </button>
        </div>
      </form>

      {created && (
        <div className="rounded-xl border border-emerald-600/40 bg-emerald-950/20 p-6 mb-8">
          <h2 className="font-semibold text-lg text-emerald-300">{t.createdTitle}</h2>
          <p className="mt-2 text-sm text-muted">{t.createdHint}</p>
          <code className="mt-3 block rounded-lg bg-background border border-border px-4 py-3 text-sm text-brand-400 break-all">
            /w/{created.slug}
          </code>
          <Link
            href={`/w/${created.slug}`}
            className="mt-4 inline-block text-sm font-medium text-brand-500 hover:text-brand-400"
          >
            {t.openList}
          </Link>
        </div>
      )}

      {waitlists.length > 0 && (
        <section>
          <h2 className="font-semibold text-lg mb-4">{t.yourLists}</h2>
          <div className="space-y-3">
            {waitlists.map((w) => (
              <Link
                key={w.id}
                href={`/w/${w.slug}`}
                className="flex items-center justify-between rounded-xl border border-border bg-surface p-4 hover:border-brand-600/40 transition-colors"
              >
                <div>
                  <p className="font-medium text-foreground">{w.name}</p>
                  {w.description && <p className="text-sm text-muted mt-0.5">{w.description}</p>}
                </div>
                <span className="text-sm text-muted">
                  {w.signupCount} {t.signups}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
