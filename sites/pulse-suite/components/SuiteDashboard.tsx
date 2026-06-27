"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { CheckResult } from "@/lib/monitor";
import type { StatusPage, Incident } from "@/lib/status-pages";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getDashboardCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type Tab = "monitor" | "status";

export function SuiteDashboard({ locale }: { locale: Locale }) {
  const t = getDashboardCopy(locale);
  const [tab, setTab] = useState<Tab>("monitor");
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");

  // Monitor state
  const [url, setUrl] = useState("https://");
  const [checkLoading, setCheckLoading] = useState(false);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [history, setHistory] = useState<CheckResult[]>([]);

  // Status page state
  const [pageName, setPageName] = useState("");
  const [pageDesc, setPageDesc] = useState("");
  const [pageLoading, setPageLoading] = useState(false);
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

  async function handleCheck(e: React.FormEvent) {
    e.preventDefault();
    setCheckLoading(true);
    setError("");
    setShowPaywall(false);
    setResult(null);

    try {
      const res = await fetch("/api/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
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

      setResult(data.check);
      setHistory((h) => [data.check, ...h].slice(0, 10));
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.checkFailed);
    } finally {
      setCheckLoading(false);
    }
  }

  async function handleCreatePage(e: React.FormEvent) {
    e.preventDefault();
    setPageLoading(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/pages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: pageName, description: pageDesc }),
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

      setPages((list) => [data.page, ...list]);
      setSelectedPage(data.page);
      setPageName("");
      setPageDesc("");
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("PAGE_CREATE_FAILED", locale));
    } finally {
      setPageLoading(false);
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

  function statusColor(ok: boolean) {
    return ok ? "text-emerald-400" : "text-red-400";
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{t.title}</h1>
        <p className="mt-2 text-muted">{t.subtitle}</p>
        {trial && (
          <p className="mt-3 text-sm">
            {trial.isMember ? (
              <span className="text-emerald-400 font-medium">{t.memberBadge}</span>
            ) : (
              <span className="text-muted">
                {t.freeActions}{" "}
                <strong className="text-foreground">
                  {trial.remaining}/{trial.limit}
                </strong>
              </span>
            )}
          </p>
        )}
      </div>

      <div className="flex gap-2 mb-6 border-b border-border">
        <button
          type="button"
          onClick={() => setTab("monitor")}
          className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
            tab === "monitor"
              ? "border-brand-500 text-brand-500"
              : "border-transparent text-muted hover:text-foreground"
          }`}
        >
          {t.tabMonitor}
        </button>
        <button
          type="button"
          onClick={() => setTab("status")}
          className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
            tab === "status"
              ? "border-brand-500 text-brand-500"
              : "border-transparent text-muted hover:text-foreground"
          }`}
        >
          {t.tabStatus}
        </button>
      </div>

      {showPaywall && (
        <div className="rounded-xl border border-amber-600/40 bg-amber-950/30 p-6 mb-8">
          <h2 className="font-semibold text-lg text-amber-200">{t.paywallTitle}</h2>
          <p className="mt-2 text-sm text-muted">{t.paywallBody}</p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600/100"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-red-600/40 bg-red-950/30 p-4 mb-6 text-sm text-red-300">
          {error}
        </div>
      )}

      {tab === "monitor" && (
        <div>
          <form onSubmit={handleCheck} className="rounded-xl border border-border bg-surface p-6 mb-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">{t.urlLabel}</label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder={t.urlPlaceholder}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={checkLoading}
                className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600/100 disabled:opacity-50"
              >
                {checkLoading ? t.checking : t.checkNow}
              </button>
            </div>
          </form>

          {result && (
            <div className="rounded-xl border border-border bg-surface p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-4">{t.latestResult}</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-muted">{t.urlField}: </span>
                  <span className="text-foreground break-all">{result.url}</span>
                </p>
                <p>
                  <span className="text-muted">{t.httpStatus}: </span>
                  <span className={statusColor(result.ok)}>
                    {result.status || "—"} · {result.ok ? t.statusUp : t.statusDown}
                  </span>
                </p>
                <p>
                  <span className="text-muted">{t.latency}: </span>
                  <span className="text-foreground">
                    {result.latencyMs}
                    {t.ms}
                  </span>
                </p>
                {result.error && (
                  <p>
                    <span className="text-muted">{t.errorField}: </span>
                    <span className="text-red-400">{result.error}</span>
                  </p>
                )}
              </div>
            </div>
          )}

          {history.length > 0 && (
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="font-semibold text-foreground mb-4">{t.sessionHistory}</h3>
              <div className="space-y-2">
                {history.map((h, i) => (
                  <div key={i} className="flex justify-between text-sm border-b border-border pb-2">
                    <span className="text-muted truncate max-w-[60%]">{h.url}</span>
                    <span className={statusColor(h.ok)}>
                      {h.ok ? t.statusUp : t.statusDown} · {h.latencyMs}
                      {t.ms}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {history.length === 0 && !result && (
            <p className="text-center text-sm text-muted">{t.emptyHistory}</p>
          )}
        </div>
      )}

      {tab === "status" && (
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <form onSubmit={handleCreatePage} className="rounded-xl border border-border bg-surface p-6 mb-6">
              <h3 className="font-semibold text-foreground mb-4">{t.createPage}</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t.pageName}</label>
                  <input
                    type="text"
                    value={pageName}
                    onChange={(e) => setPageName(e.target.value)}
                    placeholder={t.pageNamePlaceholder}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t.pageDesc}</label>
                  <input
                    type="text"
                    value={pageDesc}
                    onChange={(e) => setPageDesc(e.target.value)}
                    placeholder={t.pageDescPlaceholder}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={pageLoading}
                  className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600/100 disabled:opacity-50"
                >
                  {pageLoading ? t.creating : t.createPage}
                </button>
              </div>
            </form>

            {pages.length > 0 && (
              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="font-semibold text-foreground mb-4">{t.yourPages}</h3>
                <div className="space-y-2">
                  {pages.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => selectPage(p)}
                      className={`w-full text-left rounded-lg border px-4 py-3 text-sm transition-colors ${
                        selectedPage?.id === p.id
                          ? "border-brand-500 bg-brand-600/10"
                          : "border-border hover:border-brand-600/50"
                      }`}
                    >
                      <p className="font-medium text-foreground">{p.name}</p>
                      <p className="text-muted text-xs mt-1">
                        {t.publicUrl}: /s/{p.slug} · {p.subscriberCount} {t.subscribers}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {selectedPage && (
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="font-semibold text-foreground mb-2">{selectedPage.name}</h3>
              <p className="text-sm text-muted mb-4">{selectedPage.description}</p>

              <h4 className="text-sm font-medium text-foreground mb-2">{t.components}</h4>
              <div className="space-y-1 mb-6">
                {selectedPage.components.map((c) => (
                  <div key={c.id} className="flex justify-between text-sm">
                    <span className="text-muted">{c.name}</span>
                    <span
                      className={
                        c.status === "operational"
                          ? "text-emerald-400"
                          : c.status === "degraded"
                            ? "text-amber-400"
                            : "text-red-400"
                      }
                    >
                      {c.status === "operational"
                        ? t.operational
                        : c.status === "degraded"
                          ? t.degraded
                          : t.down}
                    </span>
                  </div>
                ))}
              </div>

              <form onSubmit={handlePostIncident} className="border-t border-border pt-4 mb-4">
                <h4 className="text-sm font-medium text-foreground mb-3">{t.postIncident}</h4>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={incidentTitle}
                    onChange={(e) => setIncidentTitle(e.target.value)}
                    placeholder={t.incidentTitlePlaceholder}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                    required
                  />
                  <textarea
                    value={incidentMessage}
                    onChange={(e) => setIncidentMessage(e.target.value)}
                    placeholder={t.incidentMessagePlaceholder}
                    rows={3}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                  />
                  <button
                    type="submit"
                    disabled={incidentLoading}
                    className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600/100 disabled:opacity-50"
                  >
                    {incidentLoading ? t.posting : t.postUpdate}
                  </button>
                </div>
              </form>

              <h4 className="text-sm font-medium text-foreground mb-2">{t.postIncident}</h4>
              {incidents.length === 0 ? (
                <p className="text-sm text-muted">{t.noIncidents}</p>
              ) : (
                <div className="space-y-3">
                  {incidents.map((inc) => (
                    <div key={inc.id} className="rounded-lg border border-border p-3 text-sm">
                      <div className="flex justify-between items-start">
                        <p className="font-medium text-foreground">{inc.title}</p>
                        <span className="text-xs text-muted">
                          {inc.status === "resolved" ? t.resolved : t.investigating}
                        </span>
                      </div>
                      {inc.message && <p className="text-muted mt-1">{inc.message}</p>}
                      {inc.status !== "resolved" && (
                        <button
                          type="button"
                          onClick={() => handleResolve(inc.id)}
                          className="mt-2 text-xs text-brand-500 hover:text-brand-400"
                        >
                          {t.resolve}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
