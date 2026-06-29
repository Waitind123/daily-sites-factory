"use client";

import { useState, useEffect } from "react";
import type { BetaListing } from "@/lib/listings";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getPublicBetaCopy } from "@/lib/copy-app";

export function PublicBetaListing({
  listing,
  locale,
}: {
  listing: BetaListing;
  locale: Locale;
}) {
  const t = getPublicBetaCopy(locale);
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [applicationCount, setApplicationCount] = useState(listing.applicationCount);
  const [position, setPosition] = useState<number | null>(null);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    fetch(`/api/applications?slug=${listing.slug}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.listing) setApplicationCount(d.listing.applicationCount);
      })
      .catch(() => null);
  }, [listing.slug]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setApplied(false);

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: listing.slug, email, profile }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(getApiErrorMessage(data.code, locale));
      setPosition(data.application.position);
      setApplicationCount(data.listing.applicationCount);
      setApplied(true);
      setEmail("");
      setProfile("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : getApiErrorMessage("APPLICATION_FAILED", locale)
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-12 sm:px-6 sm:py-20">
      <div className="text-center mb-10">
        <div className="text-4xl mb-4">🧪</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          {listing.productName}
        </h1>
        {listing.description && (
          <p className="mt-3 text-muted">{listing.description}</p>
        )}
        {listing.targetAudience && (
          <p className="mt-3 text-sm text-brand-400">
            {t.targetLabel} {listing.targetAudience}
          </p>
        )}
        <p className="mt-4 text-2xl font-bold text-brand-500">
          🔥 {applicationCount} {t.totalApplications}
        </p>
        <p className="mt-2 text-xs text-muted">{t.poweredBy}</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border bg-surface p-6 shadow-xl"
      >
        <h2 className="font-semibold text-lg mb-4 text-center">{t.applyTitle}</h2>
        <div className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            required
          />
          <textarea
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            placeholder={t.profilePlaceholder}
            rows={3}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600 resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? t.submitting : t.applyCta}
          </button>
        </div>
        {error && <p className="mt-3 text-sm text-red-400 text-center">{error}</p>}
        {applied && position && (
          <div className="mt-4 rounded-lg bg-emerald-950/30 border border-emerald-600/30 p-4 text-center">
            <p className="text-sm text-emerald-300">{t.applied}</p>
            <p className="mt-2 text-lg font-bold text-foreground">
              {t.position}: #{position}
            </p>
          </div>
        )}
      </form>

      {applicationCount === 0 && !applied && (
        <p className="text-center text-muted mt-8">{t.empty}</p>
      )}
    </div>
  );
}
