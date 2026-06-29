"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { BetaListing } from "@/lib/listings";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getListingsCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function ListingsDashboard({ locale }: { locale: Locale }) {
  const t = getListingsCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [created, setCreated] = useState<BetaListing | null>(null);
  const [listings, setListings] = useState<BetaListing[]>([]);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/listings")
      .then((r) => r.json())
      .then((d) => setListings(d.listings ?? []))
      .catch(() => null);
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setCreated(null);

    try {
      const res = await fetch("/api/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productName, description, targetAudience }),
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

      setCreated(data.listing);
      setListings((list) => [data.listing, ...list]);
      setProductName("");
      setDescription("");
      setTargetAudience("");
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : getApiErrorMessage("LISTING_CREATE_FAILED", locale)
      );
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
                {t.freeListings}{" "}
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
            className="mt-4 inline-block rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      <form
        onSubmit={handleCreate}
        className="rounded-2xl border border-border bg-surface p-6 shadow-xl mb-8"
      >
        <h2 className="font-semibold text-lg mb-4">{t.formTitle}</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              {t.productName}
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder={t.productNamePlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              {t.description}
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t.descriptionPlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              {t.targetAudience}
            </label>
            <input
              type="text"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              placeholder={t.targetAudiencePlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            />
          </div>
        </div>
        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
        >
          {loading ? t.creating : t.createListing}
        </button>
      </form>

      {created && (
        <div className="rounded-xl border border-emerald-600/30 bg-emerald-950/20 p-6 mb-8">
          <h3 className="font-semibold text-emerald-300">{t.createdTitle}</h3>
          <p className="mt-2 text-sm text-muted">{t.createdHint}</p>
          <Link
            href={`/beta/${created.slug}`}
            className="mt-3 inline-block text-brand-400 hover:text-brand-300 font-medium"
          >
            /beta/{created.slug} {t.openListing}
          </Link>
        </div>
      )}

      {listings.length > 0 && (
        <div>
          <h2 className="font-semibold text-lg mb-4">{t.yourListings}</h2>
          <div className="space-y-3">
            {listings.map((listing) => (
              <Link
                key={listing.id}
                href={`/beta/${listing.slug}`}
                className="block rounded-xl border border-border bg-surface p-4 hover:border-brand-600/50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-foreground">{listing.productName}</h3>
                    {listing.description && (
                      <p className="text-sm text-muted mt-1">{listing.description}</p>
                    )}
                  </div>
                  <span className="text-sm text-brand-400 whitespace-nowrap ml-4">
                    {listing.applicationCount} {t.applications}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
