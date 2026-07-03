"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { venues as allVenues, cities, type DayPassVenue } from "@/lib/data";
import type { Locale } from "@/lib/i18n-shared";
import { getPassesCopy } from "@/lib/copy-app";
import { getApiErrorMessage } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type BookingConfirmation = {
  ref: string;
  date: string;
  venue: string;
  city: string;
  neighborhood: string;
  price: string;
  hours: string;
  wifiMbps: number;
  tips: string[];
  instantBook: boolean;
  bookingUrl?: string;
};

type VenueDetail = DayPassVenue & { unlocked: boolean; booking?: BookingConfirmation };

export function DayPassBoard({ locale }: { locale: Locale }) {
  const c = getPassesCopy(locale);
  const tags = c.tags;

  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [tag, setTag] = useState("");
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [selected, setSelected] = useState<VenueDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  const filtered = allVenues.filter((venue) => {
    const matchCity = !city || venue.city === city;
    const matchTag = !tag || venue.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()));
    if (!query.trim()) return matchCity && matchTag;
    const haystack = `${venue.name} ${venue.city} ${venue.country} ${venue.tags.join(" ")}`.toLowerCase();
    return matchCity && matchTag && haystack.includes(query.toLowerCase());
  });

  async function bookPass(venueId: string) {
    setLoading(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/passes/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ venueId }),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.code === "TRIAL_EXHAUSTED") {
          setShowPaywall(true);
          setTrial((t) => (t ? { ...t, remaining: 0, canUse: false } : t));
          return;
        }
        throw new Error(getApiErrorMessage(data.code, locale));
      }

      setSelected(data.venue);
      if (data.trial) {
        setTrial(data.trial);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : c.bookingFailed);
    } finally {
      setLoading(false);
    }
  }

  function availabilityColor(spots: number, total: number) {
    const ratio = spots / total;
    if (ratio > 0.3) return "text-green-700 bg-green-100";
    if (ratio > 0.1) return "text-amber-700 bg-amber-100";
    return "text-red-700 bg-red-100";
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">{c.title}</h1>
          <p className="text-muted mt-1">{c.subtitle(filtered.length)}</p>
        </div>
        {trial && (
          <div className="text-sm rounded-lg bg-brand-600/10 text-brand-500 px-4 py-2 font-medium">
            {trial.isMember ? c.memberBadge : c.trialBadge(trial.remaining, trial.limit)}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-6">
        <input
          type="search"
          placeholder={c.searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
        <div className="flex flex-wrap gap-2">
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="rounded-full border border-border px-3 py-1 text-xs font-medium bg-surface text-muted"
          >
            <option value="">{c.allCities}</option>
            {cities.map((cityName) => (
              <option key={cityName} value={cityName}>
                {cityName}
              </option>
            ))}
          </select>
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTag(tag === t ? "" : t)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                tag === t
                  ? "bg-brand-600 text-white"
                  : "bg-surface-muted text-muted hover:bg-stone-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {showPaywall && (
        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-semibold text-amber-900">{c.paywallTitle}</p>
            <p className="text-sm text-amber-700 mt-1">{c.paywallDesc}</p>
          </div>
          <Link
            href="/join"
            className="shrink-0 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {c.subscribeNow}
          </Link>
        </div>
      )}

      {error && (
        <p className="mb-4 text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2">{error}</p>
      )}

      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-3">
          {filtered.map((venue) => (
            <button
              key={venue.id}
              type="button"
              onClick={() => bookPass(venue.id)}
              disabled={loading}
              className={`w-full text-left rounded-xl border p-4 transition-colors hover:border-brand-300 hover:bg-brand-600/10/30 ${
                selected?.id === venue.id ? "border-brand-600 bg-brand-600/10" : "border-border bg-surface"
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{venue.logo}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground truncate">{venue.name}</p>
                  <p className="text-sm text-muted">
                    {venue.city}, {venue.country}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded font-medium ${availabilityColor(venue.spotsLeftToday, venue.totalSpots)}`}
                    >
                      {c.spotsToday(venue.spotsLeftToday, venue.totalSpots)}
                    </span>
                    <span className="text-xs bg-surface-muted text-muted px-2 py-0.5 rounded">
                      📶 {venue.wifiMbps} Mbps
                    </span>
                    {venue.instantBook && (
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                        {c.instantBook}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-brand-500 mt-2">{venue.dayPassPrice}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-3">
          {selected?.booking ? (
            <div className="rounded-xl border border-brand-200 bg-surface p-6 sticky top-24">
              <div className="rounded-lg bg-brand-600/10 border border-brand-200 p-4 mb-6">
                <p className="text-sm text-brand-500 font-medium">{c.confirmationTitle}</p>
                <p className="text-2xl font-bold text-brand-800 mt-1">{selected.booking.ref}</p>
                <p className="text-sm text-brand-500 mt-1">{selected.booking.date}</p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-4xl">{selected.logo}</span>
                <div>
                  <h2 className="text-xl font-bold">{selected.booking.venue}</h2>
                  <p className="text-muted">
                    {selected.booking.neighborhood} · {selected.booking.city}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg bg-background p-3">
                  <p className="text-muted text-xs">{c.priceLabel}</p>
                  <p className="font-semibold text-brand-500">{selected.booking.price}</p>
                </div>
                <div className="rounded-lg bg-background p-3">
                  <p className="text-muted text-xs">{c.wifiLabel}</p>
                  <p className="font-semibold">{selected.booking.wifiMbps} Mbps</p>
                </div>
                <div className="rounded-lg bg-background p-3">
                  <p className="text-muted text-xs">{c.hoursLabel}</p>
                  <p className="font-semibold">{selected.booking.hours}</p>
                </div>
                <div className="rounded-lg bg-background p-3">
                  <p className="text-muted text-xs">{c.methodLabel}</p>
                  <p className="font-semibold">
                    {selected.booking.instantBook ? c.instantEntry : c.advanceRequired}
                  </p>
                </div>
              </div>

              {selected.booking.tips.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{c.tipsTitle}</h3>
                  <ul className="list-disc list-inside text-muted text-sm space-y-1">
                    {selected.booking.tips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selected.booking.bookingUrl && (
                <a
                  href={selected.booking.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full text-center rounded-xl bg-brand-600 py-3 font-semibold text-white hover:bg-brand-700 transition-colors"
                >
                  {c.payOnSite}
                </a>
              )}

              <p className="mt-4 text-xs text-muted text-center">{c.disclaimer}</p>
            </div>
          ) : selected ? (
            <div className="rounded-xl border border-border bg-surface p-6 sticky top-24">
              <p className="text-muted">{c.loading}</p>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-background p-12 text-center text-muted">
              <p className="text-4xl mb-3">🎫</p>
              <p>{c.emptyTitle}</p>
              <p className="text-sm mt-1">{c.emptyHint}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
