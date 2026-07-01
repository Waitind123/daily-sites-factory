"use client";

import { useState, useEffect } from "react";
import type { StatusPage, Incident, ComponentStatus } from "@/lib/status-pages";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getPublicStatusCopy } from "@/lib/copy-app";

const statusEmoji: Record<ComponentStatus, string> = {
  operational: "🟢",
  degraded: "🟡",
  down: "🔴",
};

export function PublicStatusPage({ page, locale }: { page: StatusPage; locale: Locale }) {
  const t = getPublicStatusCopy(locale);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(page.subscriberCount);
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [overall, setOverall] = useState<ComponentStatus>("operational");

  useEffect(() => {
    fetch(`/api/incidents?slug=${page.slug}`)
      .then((r) => r.json())
      .then((d) => {
        setIncidents(d.incidents ?? []);
        if (d.overall) setOverall(d.overall);
        if (d.page) setSubscriberCount(d.page.subscriberCount);
      })
      .catch(() => null);
  }, [page.slug]);

  const overallLabel =
    overall === "operational" ? t.allOperational : overall === "degraded" ? t.degraded : t.down;

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSubscribed(false);

    try {
      const res = await fetch("/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: page.slug, email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(getApiErrorMessage(data.code, locale));
      setSubscribed(true);
      setSubscriberCount(data.page?.subscriberCount ?? subscriberCount + 1);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("SUBSCRIBE_FAILED", locale));
    } finally {
      setLoading(false);
    }
  }

  function statusLabel(s: ComponentStatus) {
    if (s === "operational") return t.operational;
    if (s === "degraded") return t.degradedStatus;
    return t.downStatus;
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-12 sm:px-6 sm:py-20">
      <div className="text-center mb-10">
        <div className="text-4xl mb-4">{statusEmoji[overall]}</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{page.name}</h1>
        {page.description && <p className="mt-3 text-muted">{page.description}</p>}
        <p className="mt-4 text-xl font-bold text-foreground">{overallLabel}</p>
        <p className="mt-2 text-xs text-muted">{t.poweredBy}</p>
      </div>

      <section className="rounded-2xl border border-border bg-surface p-6 shadow-xl mb-6">
        <h2 className="font-semibold text-lg mb-4">{t.components}</h2>
        <div className="space-y-3">
          {page.components.map((c) => (
            <div key={c.id} className="flex items-center justify-between">
              <span className="text-foreground">{c.name}</span>
              <span className="text-sm text-muted">
                {statusEmoji[c.status]} {statusLabel(c.status)}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-surface p-6 shadow-xl mb-6">
        <h2 className="font-semibold text-lg mb-4">{t.incidents}</h2>
        {incidents.length === 0 ? (
          <p className="text-sm text-muted">{t.noIncidents}</p>
        ) : (
          <div className="space-y-4">
            {incidents.slice(0, 5).map((inc) => (
              <div key={inc.id} className="border-b border-border pb-3 last:border-0">
                <p className="font-medium text-foreground">
                  {inc.status === "resolved" ? `✓ ${t.resolved}` : `● ${t.investigating}`} · {inc.title}
                </p>
                <p className="text-sm text-muted mt-1">{inc.message}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <form onSubmit={handleSubscribe} className="rounded-2xl border border-border bg-surface p-6 shadow-xl">
        <h2 className="font-semibold text-lg mb-2 text-center">{t.subscribeTitle}</h2>
        <p className="text-center text-sm text-muted mb-4">📧 {subscriberCount}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-50 whitespace-nowrap"
          >
            {loading ? t.submitting : t.subscribeCta}
          </button>
        </div>
        {error && <p className="mt-3 text-sm text-red-400 text-center">{error}</p>}
        {subscribed && (
          <p className="mt-4 text-sm text-emerald-400 text-center">{t.subscribed}</p>
        )}
      </form>
    </div>
  );
}
