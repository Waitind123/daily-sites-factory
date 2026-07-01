"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { LocalizedCity } from "@/lib/data";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getDashboardCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type CitiesResponse = {
  cities: LocalizedCity[];
  unlockedRanks: number[];
};

function CityDetailCard({ city, locale }: { city: LocalizedCity; locale: Locale }) {
  const t = getDashboardCopy(locale);
  return (
    <div className="rounded-2xl border border-brand-600/30 bg-surface p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{city.flag}</span>
        <div>
          <h3 className="font-bold text-lg">
            #{city.rank} {city.name}
          </h3>
          <p className="text-sm text-muted">{city.country}</p>
        </div>
        <span className="ml-auto inline-flex items-center rounded-full bg-brand-600/10 px-3 py-1 font-semibold text-brand-500">
          {city.score}
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-xl border border-border bg-background p-3">
          <p className="text-xs text-muted">{t.costLabel}</p>
          <p className="font-bold text-foreground">{city.costLabel}</p>
        </div>
        <div className="rounded-xl border border-border bg-background p-3">
          <p className="text-xs text-muted">{t.internetLabel}</p>
          <p className="font-bold text-foreground">{city.internet} Mbps</p>
        </div>
        <div className="rounded-xl border border-border bg-background p-3">
          <p className="text-xs text-muted">{t.safetyLabel}</p>
          <p className="font-bold text-foreground">{city.safety}</p>
        </div>
        <div className="rounded-xl border border-border bg-background p-3">
          <p className="text-xs text-muted">{t.visaLabel}</p>
          <p className="font-bold text-foreground text-sm">{city.visa}</p>
        </div>
      </div>
    </div>
  );
}

export function CitiesDashboard({ locale }: { locale: Locale }) {
  const t = getDashboardCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [cities, setCities] = useState<LocalizedCity[]>([]);
  const [unlockedRanks, setUnlockedRanks] = useState<number[]>([]);
  const [selectedCity, setSelectedCity] = useState<LocalizedCity | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");

  async function loadCities() {
    const res = await fetch("/api/cities");
    const data: CitiesResponse = await res.json();
    setCities(data.cities ?? []);
    setUnlockedRanks(data.unlockedRanks ?? []);
  }

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    loadCities().catch(() => null);
  }, []);

  function isAccessible(city: LocalizedCity) {
    if (trial?.isMember) return true;
    if (!city.locked) return true;
    return unlockedRanks.includes(city.rank);
  }

  async function unlockCity(rank: number) {
    setLoading(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/cities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rank }),
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

      if (data.trial) setTrial(data.trial);
      setUnlockedRanks(data.unlockedRanks ?? []);
      if (data.city) {
        setSelectedCity(data.city);
      }
      await loadCities();
    } catch {
      setError(getApiErrorMessage("GENERIC", locale));
    } finally {
      setLoading(false);
    }
  }

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

      {selectedCity && <CityDetailCard city={selectedCity} locale={locale} />}

      <div className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-background text-left text-muted">
              <th className="px-4 py-3 font-medium">{t.tableRank}</th>
              <th className="px-4 py-3 font-medium">{t.tableCity}</th>
              <th className="px-4 py-3 font-medium hidden sm:table-cell">{t.tableCost}</th>
              <th className="px-4 py-3 font-medium hidden md:table-cell">{t.tableSpeed}</th>
              <th className="px-4 py-3 font-medium hidden md:table-cell">{t.tableSafety}</th>
              <th className="px-4 py-3 font-medium hidden lg:table-cell">{t.tableVisa}</th>
              <th className="px-4 py-3 font-medium text-right">{t.tableScore}</th>
              <th className="px-4 py-3 font-medium text-right">{t.syncedAt}</th>
            </tr>
          </thead>
          <tbody>
            {cities.map((city) => {
              const accessible = isAccessible(city);
              return (
                <tr key={city.rank} className="border-b border-border hover:bg-background/50">
                  <td className="px-4 py-3 text-muted">{city.rank}</td>
                  <td className="px-4 py-3">
                    <span className="mr-1.5">{city.flag}</span>
                    <span className="font-medium">{accessible ? city.name : "???"}</span>
                    {accessible && (
                      <span className="ml-1 text-muted">{city.country}</span>
                    )}
                    {city.locked && !accessible && (
                      <span className="ml-2 inline-flex items-center rounded bg-amber-500/10 px-1.5 py-0.5 text-xs text-amber-400">
                        🔒 {t.memberOnly}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell text-muted">
                    {accessible ? city.costLabel : "—"}
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell text-muted">
                    {accessible ? `${city.internet} Mbps` : "—"}
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell text-muted">
                    {accessible ? city.safety : "—"}
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell text-muted">
                    {accessible ? city.visa : "—"}
                  </td>
                  <td className="px-4 py-3 text-right">
                    {accessible ? (
                      <span className="inline-flex items-center rounded-full bg-brand-600/10 px-2.5 py-0.5 font-semibold text-brand-500">
                        {city.score}
                      </span>
                    ) : (
                      <span className="text-muted/60">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    {accessible ? (
                      <button
                        type="button"
                        onClick={() => setSelectedCity(city)}
                        className="rounded-lg border border-border px-2 py-1 text-xs font-medium hover:bg-background"
                      >
                        {t.viewBtn}
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled={loading}
                        onClick={() => unlockCity(city.rank)}
                        className="rounded-lg bg-brand-600 px-2 py-1 text-xs font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
                      >
                        {loading ? t.creating : t.unlockBtn}
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
      <p className="mt-4 text-xs text-muted">{t.topTenNote}</p>

      {trial && !trial.isMember && trial.remaining > 0 && trial.remaining <= 2 && (
        <div className="fixed bottom-0 inset-x-0 z-50 border-t border-brand-600/40 bg-background/95 backdrop-blur px-4 py-3 shadow-lg">
          <div className="mx-auto max-w-5xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-foreground">
                {t.stickyTrialTitle.replace("{n}", String(trial.remaining))}
              </p>
              <p className="text-xs text-muted">{t.stickyTrialBody}</p>
            </div>
            <Link
              href="/join"
              className="shrink-0 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 text-center"
            >
              {t.stickyTrialCta}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
