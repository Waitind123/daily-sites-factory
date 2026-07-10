"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n-shared";
import type { LocalizedSpace } from "@/lib/data";
import { getApiErrorMessage, getPassesCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type BookingResult = {
  confirmationCode: string;
  spaceName: string;
  date: string;
};

export function PassDashboard({
  locale,
  initialSpaces,
  cities,
}: {
  locale: Locale;
  initialSpaces: LocalizedSpace[];
  cities: string[];
}) {
  const t = getPassesCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [videoOnly, setVideoOnly] = useState(false);
  const [spaces, setSpaces] = useState(initialSpaces);
  const [loading, setLoading] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [booking, setBooking] = useState<BookingResult | null>(null);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (city) params.set("city", city);
    if (videoOnly) params.set("video", "1");
    const timer = setTimeout(() => {
      fetch(`/api/passes?${params}`)
        .then((r) => r.json())
        .then((d) => setSpaces(d.spaces ?? []))
        .catch(() => null);
    }, 300);
    return () => clearTimeout(timer);
  }, [query, city, videoOnly]);

  const cheapestUsd = useMemo(
    () => (spaces.length ? Math.min(...spaces.map((s) => s.dayPassUsd)) : 0),
    [spaces]
  );

  async function handleBook(spaceId: string, spaceName: string) {
    setLoading(true);
    setBookingId(spaceId);
    setError("");
    setShowPaywall(false);
    setBooking(null);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ spaceId }),
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

      setBooking({
        confirmationCode: data.confirmationCode,
        spaceName,
        date: data.date,
      });
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("BOOKING_FAILED", locale));
    } finally {
      setLoading(false);
      setBookingId(null);
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{t.title}</h1>
        <p className="mt-2 text-muted">{t.subtitle}</p>
        {trial && (
          <p className="mt-3 text-sm">
            {trial.isMember ? (
              <span className="text-emerald-400 font-medium">{t.memberBadge}</span>
            ) : (
              <span className="text-brand-400">
                {t.freeBookings}{" "}
                <strong>
                  {trial.remaining}/{trial.limit}
                </strong>
              </span>
            )}
          </p>
        )}
      </div>

      {showPaywall && (
        <div className="mb-6 rounded-xl border border-amber-500/40 bg-amber-500/10 p-5 text-center">
          <p className="font-semibold text-foreground">{t.paywallTitle}</p>
          <p className="mt-1 text-sm text-muted">{t.paywallBody}</p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      {booking && (
        <div className="mb-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-5">
          <p className="font-semibold text-emerald-400">{t.booked}</p>
          <p className="mt-1 text-sm text-foreground">
            {booking.spaceName} · {booking.date}
          </p>
          <p className="mt-1 text-xs text-muted font-mono">
            {t.confirmation} {booking.confirmationCode}
          </p>
        </div>
      )}

      {error && (
        <p className="mb-4 text-center text-sm text-red-400 bg-red-500/10 rounded-lg py-2">{error}</p>
      )}

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="flex-1 rounded-xl border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
        />
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-600"
        >
          <option value="">{t.allCities}</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <label className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground cursor-pointer">
          <input
            type="checkbox"
            checked={videoOnly}
            onChange={(e) => setVideoOnly(e.target.checked)}
            className="accent-brand-600"
          />
          {t.videoOnly}
        </label>
      </div>

      {spaces.length === 0 ? (
        <p className="text-center text-muted py-12">{t.noResults}</p>
      ) : (
        <div className="space-y-4">
          {spaces.map((space) => (
            <div
              key={space.id}
              className="rounded-2xl border border-border bg-surface p-5 sm:p-6 hover:border-brand-600/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="text-3xl">{space.logo}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-lg text-foreground">{space.name}</h3>
                    {space.featured && (
                      <span className="text-xs bg-brand-600/20 text-brand-400 px-2 py-0.5 rounded-full">
                        {t.featured}
                      </span>
                    )}
                    {space.dayPassUsd === cheapestUsd && (
                      <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
                        {t.cheapest}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted mt-0.5">
                    {space.neighborhood} · {space.city}, {space.country}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-3 text-sm">
                    <span className="font-bold text-brand-400 text-lg">{space.dayPassPrice}</span>
                    <span className="text-muted">
                      {t.wifi}: <strong className="text-foreground">{space.wifiMbps} Mbps</strong>
                    </span>
                    <span className="text-muted">
                      ★ {space.rating} ({space.reviews} {t.reviews})
                    </span>
                    {space.videoCallReady && (
                      <span className="text-emerald-400">🎥</span>
                    )}
                  </div>
                  <p className="mt-2 text-xs text-muted">
                    <strong className="text-foreground">{t.tip}:</strong> {space.tip}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleBook(space.id, space.name)}
                  disabled={loading && bookingId === space.id}
                  className="shrink-0 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-50 transition-colors"
                >
                  {loading && bookingId === space.id ? t.booking : t.bookToday}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
