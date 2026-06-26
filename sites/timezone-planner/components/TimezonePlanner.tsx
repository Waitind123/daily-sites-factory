"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  CITY_PRESETS,
  type MeetingSlot,
  type Participant,
  type PlanResult,
  getCurrentTimeInZone,
  getUtcOffset,
} from "@/lib/timezone";
import type { Locale } from "@/lib/i18n-shared";
import {
  getApiErrorMessage,
  getDurationOptions,
  getMiseryLabel,
  getPlannerCopy,
} from "@/lib/copy-app";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function TimezonePlanner({ locale }: { locale: Locale }) {
  const t = getPlannerCopy(locale);
  const durationOptions = getDurationOptions(locale);

  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([
    {
      id: "1",
      name: "上海",
      timezone: "Asia/Shanghai",
      workStart: 9,
      workEnd: 18,
    },
    {
      id: "2",
      name: "伦敦",
      timezone: "Europe/London",
      workStart: 9,
      workEnd: 18,
    },
    {
      id: "3",
      name: "纽约",
      timezone: "America/New_York",
      workStart: 9,
      workEnd: 18,
    },
  ]);
  const [duration, setDuration] = useState(60);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSubscribeLink, setShowSubscribeLink] = useState(false);
  const [result, setResult] = useState<PlanResult | null>(null);
  const [, setNow] = useState(new Date());

  const loadTrial = useCallback(async () => {
    const res = await fetch("/api/trial");
    setTrial(await res.json());
  }, []);

  useEffect(() => {
    loadTrial();
    const timer = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(timer);
  }, [loadTrial]);

  function addParticipant(presetId: string) {
    const preset = CITY_PRESETS.find((c) => c.id === presetId);
    if (!preset) return;
    if (participants.some((p) => p.timezone === preset.timezone && p.name === preset.name)) return;
    setParticipants([
      ...participants,
      {
        id: Date.now().toString(),
        name: preset.name,
        timezone: preset.timezone,
        workStart: 9,
        workEnd: 18,
      },
    ]);
  }

  function removeParticipant(id: string) {
    if (participants.length <= 2) return;
    setParticipants(participants.filter((p) => p.id !== id));
  }

  function updateParticipant(id: string, field: keyof Participant, value: string | number) {
    setParticipants(
      participants.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  }

  async function handlePlan(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setShowSubscribeLink(false);
    setResult(null);

    const res = await fetch("/api/plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ participants, durationMinutes: duration }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(
        getApiErrorMessage(data.code, locale, { name: data.name as string | undefined })
      );
      setShowSubscribeLink(data.code === "TRIAL_EXHAUSTED");
      setLoading(false);
      return;
    }

    setResult(data.result);
    await loadTrial();
    setLoading(false);
  }

  function exportIcs(slot: MeetingSlot) {
    if (!trial?.isMember) {
      setError(t.icsMemberOnly);
      setShowSubscribeLink(true);
      return;
    }
    const start = slot.startUtc.replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const end = slot.endUtc.replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//TimezonePlanner//EN",
      "BEGIN:VEVENT",
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:${t.icsSummary}`,
      `DESCRIPTION:${slot.fairnessNote}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "meeting.ics";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">
      {trial && !trial.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            <strong>{t.freeRemaining(trial.remaining, trial.limit)}</strong>
          </span>
          <Link href="/join" className="font-semibold text-brand-500 hover:underline">
            {t.subscribeCta}
          </Link>
        </div>
      )}

      {trial?.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800">
          {t.memberBadge}
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
          {showSubscribeLink && (
            <Link href="/join" className="ml-2 font-semibold underline">
              {t.subscribeNow}
            </Link>
          )}
        </div>
      )}

      <form onSubmit={handlePlan} className="rounded-2xl border border-border bg-surface p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">{t.teamLabel}</label>
          <div className="space-y-3">
            {participants.map((p) => (
              <div
                key={p.id}
                className="flex flex-col sm:flex-row gap-2 sm:items-center rounded-lg border border-border p-3 bg-background"
              >
                <input
                  type="text"
                  value={p.name}
                  onChange={(e) => updateParticipant(p.id, "name", e.target.value)}
                  className="w-full sm:w-24 rounded-lg border border-border px-2 py-1.5 text-sm"
                  placeholder={t.namePlaceholder}
                />
                <select
                  value={p.timezone}
                  onChange={(e) => updateParticipant(p.id, "timezone", e.target.value)}
                  className="flex-1 rounded-lg border border-border px-2 py-1.5 text-sm bg-surface"
                >
                  {CITY_PRESETS.map((c) => (
                    <option key={c.id} value={c.timezone}>
                      {c.flag} {c.name} ({getUtcOffset(c.timezone)})
                    </option>
                  ))}
                </select>
                <div className="flex items-center gap-1 text-sm">
                  <input
                    type="number"
                    min={0}
                    max={23}
                    value={p.workStart}
                    onChange={(e) => updateParticipant(p.id, "workStart", Number(e.target.value))}
                    className="w-14 rounded-lg border border-border px-2 py-1.5 text-sm text-center"
                  />
                  <span className="text-muted">–</span>
                  <input
                    type="number"
                    min={1}
                    max={24}
                    value={p.workEnd}
                    onChange={(e) => updateParticipant(p.id, "workEnd", Number(e.target.value))}
                    className="w-14 rounded-lg border border-border px-2 py-1.5 text-sm text-center"
                  />
                  <span className="text-xs text-muted hidden sm:inline">{t.localHours}</span>
                </div>
                <div className="text-xs text-muted sm:w-20 text-right">
                  {t.nowLabel(getCurrentTimeInZone(p.timezone))}
                </div>
                {participants.length > 2 && (
                  <button
                    type="button"
                    onClick={() => removeParticipant(p.id)}
                    className="text-muted hover:text-red-500 text-sm"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {CITY_PRESETS.filter((c) => !participants.some((p) => p.name === c.name))
              .slice(0, 8)
              .map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => addParticipant(c.id)}
                  className="rounded-full border border-border px-3 py-1 text-xs hover:border-brand-400 hover:bg-brand-600/10 transition-colors"
                >
                  + {c.flag} {c.name}
                </button>
              ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">{t.durationLabel}</label>
          <div className="flex gap-2">
            {durationOptions.map((d) => (
              <button
                key={d.value}
                type="button"
                onClick={() => setDuration(d.value)}
                className={`rounded-lg border px-4 py-2 text-sm transition-colors ${
                  duration === d.value
                    ? "border-brand-600 bg-brand-600/10 text-brand-800 font-medium"
                    : "border-border hover:border-border"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white hover:bg-brand-700 transition-colors disabled:opacity-50"
        >
          {loading ? t.scanning : t.findSlots}
        </button>
      </form>

      {result && (
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-background p-4 text-sm text-muted">
            {t.scanSummary(result.daysScanned, result.slots.length, result.totalOverlapHours)}
          </div>

          {result.slots.length === 0 ? (
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-center text-amber-800">
              <p className="font-medium">{t.noSlotsTitle}</p>
              <p className="text-sm mt-2">{t.noSlotsHint}</p>
            </div>
          ) : (
            <div className="space-y-3">
              {result.slots.map((slot, i) => {
                const misery = getMiseryLabel(slot.miseryScore, locale);
                return (
                  <div
                    key={slot.startUtc}
                    className="rounded-xl border border-border bg-surface p-4 sm:p-5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-foreground">#{i + 1}</span>
                          <span
                            className={`text-xs font-medium px-2 py-0.5 rounded-full border ${misery.color}`}
                          >
                            {t.miseryScore(slot.miseryScore, misery.text)}
                          </span>
                        </div>
                        <p className="text-sm text-muted mt-1">{slot.fairnessNote}</p>
                      </div>
                      {trial?.isMember && (
                        <button
                          type="button"
                          onClick={() => exportIcs(slot)}
                          className="text-sm text-brand-500 hover:underline shrink-0"
                        >
                          {t.exportIcs}
                        </button>
                      )}
                    </div>

                    <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {slot.miseryDetails.map((d) => (
                        <div
                          key={d.name}
                          className={`rounded-lg px-3 py-2 text-sm ${
                            d.misery >= 3
                              ? "bg-red-50 text-red-800"
                              : d.misery >= 1
                                ? "bg-amber-50 text-amber-800"
                                : "bg-green-50 text-green-800"
                          }`}
                        >
                          <span className="font-medium">{d.name}</span>
                          <span className="ml-2">{d.localTime}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
