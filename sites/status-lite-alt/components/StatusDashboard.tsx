"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { StatusPage, Incident } from "@/lib/status-pages";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getPagesCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function StatusDashboard({ locale }: { locale: Locale }) {
  const t = getPagesCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [created, setCreated] = useState<StatusPage | null>(null);
  const [pages, setPages] = useState<StatusPage[]>([]);
  const [selectedPage, setSelectedPage] = useState<StatusPage | null>(null);
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [incidentTitle, setIncidentTitle] = useState("");
  const [incidentMessage, setIncidentMessage] = useState("");
  const [incidentLoading, setIncidentLoading] = useState(false);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/pages")
      .then((r) => r.json())
      .then((d) => setPages(d.pages ?? []))
      .catch(() => null);
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setCreated(null);

    try {
      const res = await fetch("/api/pages", {
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

      setCreated(data.page);
      setPages((list) => [data.page, ...list]);
      setName("");
      setDescription("");
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("PAGE_CREATE_FAILED", locale));
    } finally {
      setLoading(false);
    }
  }

  async function selectPage(page: StatusPage) {
    setSelectedPage(page);
    const res = await fetch(`/api/incidents?slug=${page.slug}`);
    const data = await res.json();
    setIncidents(data.incidents ?? []);
  }

  async function handlePostIncident(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedPage) return;
    setIncidentLoading(true);
    setError("");

    try {
      const res = await fetch("/api/incidents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: selectedPage.slug,
          title: incidentTitle,
          message: incidentMessage,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(getApiErrorMessage(data.code, locale));
      setIncidents(data.incidents ?? []);
      setIncidentTitle("");
      setIncidentMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("INCIDENT_CREATE_FAILED", locale));
    } finally {
      setIncidentLoading(false);
    }
  }

  async function handleResolve(incidentId: string) {
    if (!selectedPage) return;
    const res = await fetch("/api/incidents", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: selectedPage.slug, incidentId }),
    });
    const data = await res.json();
    if (res.ok) setIncidents(data.incidents ?? []);
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
                {t.freePages}{" "}
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
            <label className="block text-sm font-medium text-foreground mb-1">{t.pageName}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.pageNamePlaceholder}
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
            {loading ? t.creating : t.createPage}
          </button>
        </div>
      </form>

      {created && (
        <div className="rounded-xl border border-emerald-600/40 bg-emerald-950/20 p-6 mb-8">
          <h2 className="font-semibold text-lg text-emerald-300">{t.createdTitle}</h2>
          <p className="mt-2 text-sm text-muted">{t.createdHint}</p>
          <code className="mt-3 block rounded-lg bg-background border border-border px-4 py-3 text-sm text-brand-400 break-all">
            /s/{created.slug}
          </code>
          <Link
            href={`/s/${created.slug}`}
            className="mt-4 inline-block text-sm font-medium text-brand-500 hover:text-brand-400"
          >
            {t.openPage}
          </Link>
        </div>
      )}

      {pages.length > 0 && (
        <section className="mb-8">
          <h2 className="font-semibold text-lg mb-4">{t.yourPages}</h2>
          <div className="space-y-3">
            {pages.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => selectPage(p)}
                className={`w-full flex items-center justify-between rounded-xl border p-4 text-left transition-colors ${
                  selectedPage?.id === p.id
                    ? "border-brand-600/60 bg-brand-950/20"
                    : "border-border bg-surface hover:border-brand-600/40"
                }`}
              >
                <div>
                  <p className="font-medium text-foreground">{p.name}</p>
                  {p.description && <p className="text-sm text-muted mt-0.5">{p.description}</p>}
                </div>
                <span className="text-sm text-muted">
                  {p.subscriberCount} {t.subscribers}
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {selectedPage && (
        <section className="rounded-xl border border-border bg-surface p-6">
          <h2 className="font-semibold text-lg mb-4">{t.postIncident}</h2>
          <form onSubmit={handlePostIncident} className="space-y-4 mb-6">
            <input
              type="text"
              value={incidentTitle}
              onChange={(e) => setIncidentTitle(e.target.value)}
              placeholder={t.incidentTitlePlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
              required
            />
            <textarea
              value={incidentMessage}
              onChange={(e) => setIncidentMessage(e.target.value)}
              placeholder={t.incidentMessagePlaceholder}
              rows={3}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            />
            <button
              type="submit"
              disabled={incidentLoading}
              className="rounded-lg bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
            >
              {incidentLoading ? t.posting : t.postUpdate}
            </button>
          </form>

          <h3 className="font-medium mb-3">{t.activeIncidents}</h3>
          {incidents.filter((i) => i.status !== "resolved").length === 0 ? (
            <p className="text-sm text-muted">{t.noIncidents}</p>
          ) : (
            <div className="space-y-3">
              {incidents
                .filter((i) => i.status !== "resolved")
                .map((inc) => (
                  <div key={inc.id} className="rounded-lg border border-amber-600/30 bg-amber-950/20 p-4">
                    <p className="font-medium text-foreground">{inc.title}</p>
                    <p className="text-sm text-muted mt-1">{inc.message}</p>
                    <button
                      type="button"
                      onClick={() => handleResolve(inc.id)}
                      className="mt-3 text-sm text-brand-500 hover:text-brand-400"
                    >
                      {t.resolve}
                    </button>
                  </div>
                ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
