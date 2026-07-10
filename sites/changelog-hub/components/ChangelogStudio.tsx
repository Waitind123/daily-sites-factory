"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { ChangelogEntry, GeneratedChangelog } from "@/lib/changelog";
import type { Locale } from "@/lib/i18n-shared";
import { getStudioCopy, getApiErrorMessage } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function ChangelogStudio({ locale }: { locale: Locale }) {
  const c = getStudioCopy(locale);

  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<GeneratedChangelog | null>(null);
  const [activeTab, setActiveTab] = useState<"page" | "widget" | "status" | "rss">("page");

  const [form, setForm] = useState<{
    productName: string;
    tagline: string;
    accentColor: string;
    includeStatusPage: boolean;
    entries: ChangelogEntry[];
  }>({
    productName: "",
    tagline: c.taglineDefault,
    accentColor: "#2563eb",
    includeStatusPage: true,
    entries: c.sampleEntries.map((e) => ({ ...e })),
  });

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  function updateEntry(index: number, field: keyof ChangelogEntry, value: string) {
    setForm((f) => {
      const next = [...f.entries];
      next[index] = { ...next[index], [field]: value };
      return { ...f, entries: next };
    });
  }

  function addEntry() {
    setForm((f) => ({
      ...f,
      entries: [
        ...f.entries,
        {
          version: `v1.${f.entries.length}.0`,
          title: "",
          description: "",
          tag: "feature" as const,
          date: new Date().toISOString().slice(0, 10),
        },
      ],
    }));
  }

  function removeEntry(index: number) {
    setForm((f) => ({
      ...f,
      entries: f.entries.filter((_, i) => i !== index),
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setResult(null);

    try {
      const res = await fetch("/api/changelog/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.code === "TRIAL_EXHAUSTED") {
          setShowPaywall(true);
          setTrial((t) => (t ? { ...t, remaining: 0, canUse: false } : t));
          return;
        }
        throw new Error(
          getApiErrorMessage(data.code || data.error, locale) || c.generateFailed
        );
      }

      setResult(data.changelog);
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : c.generateFailed);
    } finally {
      setLoading(false);
    }
  }

  function copyText(text: string) {
    navigator.clipboard.writeText(text);
  }

  function getActiveContent() {
    if (!result) return "";
    switch (activeTab) {
      case "page":
        return result.publicPageHtml;
      case "widget":
        return result.embedWidgetHtml;
      case "status":
        return result.statusPageHtml;
      case "rss":
        return result.rssXml;
    }
  }

  const tabs = [
    { tab: "page" as const, label: c.tabPage },
    { tab: "widget" as const, label: c.tabWidget },
    ...(result?.statusPageHtml ? [{ tab: "status" as const, label: c.tabStatus }] : []),
    { tab: "rss" as const, label: c.tabRss },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">{c.title}</h1>
          <p className="text-muted mt-1">{c.subtitle}</p>
        </div>
        {trial && (
          <div className="text-sm rounded-lg bg-brand-600/10 text-brand-500 px-4 py-2 font-medium">
            {trial.isMember
              ? c.memberBadge
              : c.freeRemaining(trial.remaining, trial.limit)}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <section className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-semibold text-lg mb-4">{c.productInfo}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                {c.productName}
              </label>
              <input
                required
                value={form.productName}
                onChange={(e) => setForm({ ...form, productName: e.target.value })}
                placeholder={c.productNamePlaceholder}
                className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                {c.tagline}
              </label>
              <input
                value={form.tagline}
                onChange={(e) => setForm({ ...form, tagline: e.target.value })}
                className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                {c.accentColor}
              </label>
              <input
                type="color"
                value={form.accentColor}
                onChange={(e) => setForm({ ...form, accentColor: e.target.value })}
                className="w-full h-10 rounded-lg border border-border cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-2 pt-6">
              <input
                type="checkbox"
                id="statusPage"
                checked={form.includeStatusPage}
                onChange={(e) =>
                  setForm({ ...form, includeStatusPage: e.target.checked })
                }
                className="rounded border-border"
              />
              <label htmlFor="statusPage" className="text-sm text-foreground">
                {c.includeStatusPage}
              </label>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-surface p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">{c.releases}</h2>
            <button
              type="button"
              onClick={addEntry}
              className="text-sm text-brand-500 hover:text-brand-500 font-medium"
            >
              {c.addRelease}
            </button>
          </div>
          <div className="space-y-4">
            {form.entries.map((entry, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-background p-4 space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted">{c.releaseN(i + 1)}</span>
                  {form.entries.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeEntry(i)}
                      className="text-xs text-muted hover:text-red-500"
                    >
                      {c.remove}
                    </button>
                  )}
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  <input
                    required
                    value={entry.version}
                    onChange={(e) => updateEntry(i, "version", e.target.value)}
                    placeholder={c.versionPlaceholder}
                    className="rounded-lg border border-border px-3 py-2 text-sm font-mono"
                  />
                  <select
                    value={entry.tag}
                    onChange={(e) => updateEntry(i, "tag", e.target.value)}
                    className="rounded-lg border border-border px-3 py-2 text-sm"
                  >
                    <option value="feature">{c.tagFeature}</option>
                    <option value="fix">{c.tagFix}</option>
                    <option value="improvement">{c.tagImprovement}</option>
                    <option value="breaking">{c.tagBreaking}</option>
                  </select>
                  <input
                    type="date"
                    value={entry.date}
                    onChange={(e) => updateEntry(i, "date", e.target.value)}
                    className="rounded-lg border border-border px-3 py-2 text-sm"
                  />
                </div>
                <input
                  required
                  value={entry.title}
                  onChange={(e) => updateEntry(i, "title", e.target.value)}
                  placeholder={c.titlePlaceholder}
                  className="w-full rounded-lg border border-border px-3 py-2 text-sm"
                />
                <textarea
                  required
                  value={entry.description}
                  onChange={(e) => updateEntry(i, "description", e.target.value)}
                  placeholder={c.descPlaceholder}
                  rows={2}
                  className="w-full rounded-lg border border-border px-3 py-2 text-sm"
                />
              </div>
            ))}
          </div>
        </section>

        {error && (
          <p className="text-red-600 text-sm bg-red-50 rounded-lg px-4 py-3">{error}</p>
        )}

        {showPaywall && (
          <div className="rounded-xl border-2 border-brand-600 bg-brand-600/10 p-6 text-center">
            <p className="font-semibold text-brand-800">{c.paywallTitle}</p>
            <p className="text-sm text-brand-500 mt-1">{c.paywallBody}</p>
            <Link
              href="/join"
              className="inline-block mt-4 bg-brand-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-brand-700"
            >
              {c.paywallCta}
            </Link>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-700 disabled:opacity-50 transition-colors"
        >
          {loading ? c.generating : c.generateCta}
        </button>
      </form>

      {result && (
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">{c.resultTitle}</h2>

          <div className="rounded-2xl border border-border bg-surface overflow-hidden">
            <div className="border-b border-border flex overflow-x-auto">
              {tabs.map(({ tab, label }) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                    activeTab === tab
                      ? "text-brand-500 border-b-2 border-brand-600"
                      : "text-muted"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="p-4">
              <pre className="text-xs bg-stone-900 text-stone-100 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap max-h-64">
                {getActiveContent()}
              </pre>
              <button
                type="button"
                onClick={() => copyText(getActiveContent())}
                className="mt-3 text-sm text-brand-500 hover:text-brand-500 font-medium"
              >
                {c.copyClipboard}
              </button>
            </div>
          </div>

          {activeTab === "page" && (
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-semibold mb-4">{c.previewTitle}</h3>
              <iframe
                srcDoc={result.publicPageHtml}
                title="Changelog preview"
                className="w-full h-96 rounded-xl border border-border"
                sandbox=""
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
