"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { IncidentDraft, DraftChannel } from "@/lib/draft";
import { getChannelLabel } from "@/lib/draft";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getDashboardCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function DraftDashboard({ locale }: { locale: Locale }) {
  const t = getDashboardCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [alert, setAlert] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [draft, setDraft] = useState<IncidentDraft | null>(null);
  const [drafts, setDrafts] = useState<IncidentDraft[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [activeChannel, setActiveChannel] = useState<DraftChannel>("status");

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/draft")
      .then((r) => r.json())
      .then((d) => setDrafts(d.drafts ?? []))
      .catch(() => null);
  }, []);

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/draft", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          alert,
          serviceName: serviceName || undefined,
        }),
      });
      const data = await res.json();

      if (res.status === 403 && data.code === "TRIAL_EXHAUSTED") {
        setShowPaywall(true);
        return;
      }

      if (!res.ok) {
        setError(getApiErrorMessage(data.code, locale));
        return;
      }

      setDraft(data.draft);
      setActiveChannel("status");
      if (data.trial) setTrial(data.trial);
      setDrafts((prev) => [data.draft, ...prev]);
      setAlert("");
      setServiceName("");
    } catch {
      setError(getApiErrorMessage("GENERIC", locale));
    } finally {
      setLoading(false);
    }
  }

  async function copyText(text: string, key: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* ignore */
    }
  }

  const activePost = draft?.channels.find((p) => p.channel === activeChannel);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">{t.title}</h1>
        <p className="mt-2 text-muted">{t.subtitle}</p>
        {trial && (
          <p className="mt-3 text-sm">
            {trial.isMember ? (
              <span className="text-brand-500 font-medium">{t.memberBadge}</span>
            ) : (
              <span className="text-muted">
                {t.freeSyncs}{" "}
                <strong className="text-foreground">
                  {trial.remaining}/{trial.limit}
                </strong>
              </span>
            )}
          </p>
        )}
      </div>

      {showPaywall && (
        <div className="mb-8 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6">
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

      <div className="grid gap-8 lg:grid-cols-2">
        <form onSubmit={handleGenerate} className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">{t.createTitle}</h2>
          <label className="block text-sm font-medium text-foreground mb-1">{t.productName}</label>
          <input
            type="text"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            placeholder={t.productNamePlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          <label className="block text-sm font-medium text-foreground mt-4 mb-1">{t.stripeKey}</label>
          <textarea
            value={alert}
            onChange={(e) => setAlert(e.target.value)}
            placeholder={t.stripeKeyPlaceholder}
            rows={8}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500 resize-y"
            required
          />
          <p className="mt-1 text-xs text-muted">{t.stripeKeyHint}</p>
          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-brand-600 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
          >
            {loading ? t.creating : t.createDashboard}
          </button>
        </form>

        <div>
          {draft && activePost && (
            <div className="rounded-2xl border border-brand-600/30 bg-surface p-6">
              <h3 className="font-semibold text-foreground">{t.createdTitle}</h3>
              <p className="mt-1 text-sm text-muted">{t.createdHint}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {draft.channels.map((p) => (
                  <button
                    key={p.channel}
                    type="button"
                    onClick={() => setActiveChannel(p.channel)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      activeChannel === p.channel
                        ? "bg-brand-600 text-white"
                        : "border border-border hover:bg-background"
                    }`}
                  >
                    {getChannelLabel(p.channel, locale)}
                  </button>
                ))}
              </div>

              <pre className="mt-4 whitespace-pre-wrap rounded-xl bg-background border border-border p-4 text-sm text-foreground leading-relaxed max-h-64 overflow-y-auto">
                {activePost.content}
              </pre>

              <div className="mt-3 flex items-center justify-between text-xs text-muted">
                <span>
                  {activePost.charCount} {t.syncedAt}
                </span>
                <button
                  type="button"
                  onClick={() => copyText(activePost.content, activeChannel)}
                  className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium hover:bg-background"
                >
                  {copied === activeChannel ? t.copied : t.copyLink}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {drafts.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-foreground mb-4">{t.yourDashboards}</h2>
          <div className="space-y-3">
            {drafts.map((b) => (
              <div
                key={b.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border bg-surface p-4"
              >
                <div className="min-w-0">
                  <p className="font-medium text-foreground truncate">{b.serviceName}</p>
                  <p className="text-xs text-muted truncate mt-1">{b.alert.slice(0, 120)}…</p>
                  <p className="text-xs text-muted mt-1">
                    {b.channels.length} {t.notSynced}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setDraft(b);
                    setActiveChannel("status");
                  }}
                  className="rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700 shrink-0"
                >
                  {t.syncNow}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
