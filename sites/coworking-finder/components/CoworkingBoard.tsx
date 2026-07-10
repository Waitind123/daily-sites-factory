"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getSpacesCopy } from "@/lib/copy-app";
import { spaces as allSpaces, cities, type CoworkingSpace } from "@/lib/data";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type SpaceDetail = CoworkingSpace & { unlocked: boolean };

export function CoworkingBoard({ locale }: { locale: Locale }) {
  const c = getSpacesCopy(locale);
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [tag, setTag] = useState("");
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [selected, setSelected] = useState<SpaceDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  const filtered = allSpaces.filter((space) => {
    const matchCity = !city || space.city === city;
    const matchTag = !tag || space.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()));
    if (!query.trim()) return matchCity && matchTag;
    const haystack = `${space.name} ${space.city} ${space.country} ${space.tags.join(" ")}`.toLowerCase();
    return matchCity && matchTag && haystack.includes(query.toLowerCase());
  });

  async function unlockSpace(spaceId: string) {
    setLoading(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/spaces/view", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ spaceId }),
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

      setSelected(data.space);
      if (data.trial) {
        setTrial(data.trial);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : getApiErrorMessage("LOAD_FAILED", locale));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">{c.title}</h1>
          <p className="text-muted mt-1">
            {filtered.length} {c.spacesCount} · {c.citiesLabel}
          </p>
        </div>
        {trial && (
          <div className="text-sm rounded-lg bg-brand-600/10 text-brand-500 px-4 py-2 font-medium">
            {trial.isMember
              ? c.memberBadge
              : `${trial.remaining}/${trial.limit} ${c.freeTrial}`}
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
          {c.tags.map((t) => (
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
            <p className="text-sm text-amber-700 mt-1">{c.paywallBody}</p>
          </div>
          <Link
            href="/join"
            className="shrink-0 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {c.paywallCta}
          </Link>
        </div>
      )}

      {error && (
        <p className="mb-4 text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2">{error}</p>
      )}

      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-3">
          {filtered.map((space) => (
            <button
              key={space.id}
              type="button"
              onClick={() => unlockSpace(space.id)}
              disabled={loading}
              className={`w-full text-left rounded-xl border p-4 transition-colors hover:border-brand-300 hover:bg-brand-600/10/30 ${
                selected?.id === space.id ? "border-brand-600 bg-brand-600/10" : "border-border bg-surface"
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{space.logo}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground truncate">{space.name}</p>
                  <p className="text-sm text-muted">
                    {space.city}, {space.country}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="text-xs bg-surface-muted text-muted px-2 py-0.5 rounded">
                      📶 {space.wifiMbps} Mbps
                    </span>
                    {space.videoCallReady && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                        {c.videoCall}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-brand-500 mt-2">{space.dayPassPrice}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-3">
          {selected ? (
            <div className="rounded-xl border border-border bg-surface p-6 sticky top-24">
              <div className="flex items-start gap-4">
                <span className="text-4xl">{selected.logo}</span>
                <div>
                  <h2 className="text-xl font-bold">{selected.name}</h2>
                  <p className="text-muted">
                    {selected.neighborhood} · {selected.city}, {selected.country}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-amber-500">★ {selected.rating}</span>
                    <span className="text-muted text-sm">
                      ({selected.reviews} {c.reviews})
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg bg-background p-3">
                  <p className="text-muted text-xs">{c.dayPass}</p>
                  <p className="font-semibold text-brand-500">{selected.dayPassPrice}</p>
                </div>
                <div className="rounded-lg bg-background p-3">
                  <p className="text-muted text-xs">{c.monthlyPass}</p>
                  <p className="font-semibold">{selected.monthlyPrice}</p>
                </div>
                <div className="rounded-lg bg-background p-3">
                  <p className="text-muted text-xs">{c.wifiTested}</p>
                  <p className="font-semibold">{selected.wifiMbps} Mbps</p>
                </div>
                <div className="rounded-lg bg-background p-3">
                  <p className="text-muted text-xs">{c.hours}</p>
                  <p className="font-semibold">{selected.hours}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{c.description}</h3>
                  <p className="text-muted">{selected.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{c.amenities}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selected.amenities.map((a) => (
                      <span key={a} className="text-xs bg-surface-muted text-muted px-2 py-1 rounded">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
                {selected.insiderTips && (
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{c.insiderTips}</h3>
                    <ul className="list-disc list-inside text-muted space-y-1">
                      {selected.insiderTips.map((tip) => (
                        <li key={tip}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {selected.website && (
                <a
                  href={selected.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full text-center rounded-xl bg-brand-600 py-3 font-semibold text-white hover:bg-brand-700 transition-colors"
                >
                  {c.bookWebsite}
                </a>
              )}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-background p-12 text-center text-muted">
              <p className="text-4xl mb-3">👈</p>
              <p>{c.emptyTitle}</p>
              <p className="text-sm mt-1">{c.emptySubtitle}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
