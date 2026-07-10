"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { DocSite } from "@/lib/docs";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getDocsCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function DocsDashboard({ locale }: { locale: Locale }) {
  const t = getDocsCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [created, setCreated] = useState<DocSite | null>(null);
  const [sites, setSites] = useState<DocSite[]>([]);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/docs")
      .then((r) => r.json())
      .then((d) => setSites(d.sites ?? []))
      .catch(() => null);
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setCreated(null);

    try {
      const res = await fetch("/api/docs", {
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

      setCreated(data.site);
      setSites((list) => [data.site, ...list]);
      setName("");
      setDescription("");
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("SITE_CREATE_FAILED", locale));
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
              <span className="text-brand-500 font-medium">{t.memberBadge}</span>
            ) : (
              <span className="text-muted">
                {t.freeSites}{" "}
                <strong className="text-foreground">
                  {trial.remaining}/{trial.limit}
                </strong>
              </span>
            )}
          </p>
        )}
      </div>

      {showPaywall && (
        <div className="mb-8 rounded-xl border border-brand-600/40 bg-brand-600/10 p-6">
          <h2 className="font-semibold text-lg">{t.paywallTitle}</h2>
          <p className="mt-2 text-sm text-muted">{t.paywallBody}</p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      <form onSubmit={handleCreate} className="rounded-2xl border border-border bg-surface p-6 mb-8">
        <h2 className="font-semibold text-lg mb-4">{t.siteTitle}</h2>
        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t.siteName}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.siteNamePlaceholder}
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t.description}</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t.descriptionPlaceholder}
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-brand-600 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? t.creating : t.createSite}
          </button>
        </div>
      </form>

      {created && (
        <div className="mb-8 rounded-xl border border-green-600/40 bg-green-600/10 p-6">
          <h3 className="font-semibold">{t.createdTitle}</h3>
          <p className="text-sm text-muted mt-1">{t.createdHint}</p>
          <code className="block mt-2 text-sm font-mono break-all">/d/{created.slug}</code>
          <Link href={`/d/${created.slug}`} className="mt-3 inline-block text-brand-500 text-sm hover:underline">
            {t.openSite}
          </Link>
        </div>
      )}

      {sites.length > 0 && (
        <div>
          <h2 className="font-semibold text-lg mb-4">{t.yourSites}</h2>
          <ul className="space-y-3">
            {sites.map((site) => (
              <li key={site.id}>
                <Link
                  href={`/d/${site.slug}`}
                  className="flex items-center justify-between rounded-xl border border-border bg-surface p-4 hover:border-brand-600/40 transition-colors"
                >
                  <div>
                    <p className="font-medium">{site.name}</p>
                    <p className="text-xs text-muted mt-0.5">
                      {site.pages.length} {t.pages} · {site.viewCount} {t.views}
                    </p>
                  </div>
                  <span className="text-brand-500 text-sm">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
