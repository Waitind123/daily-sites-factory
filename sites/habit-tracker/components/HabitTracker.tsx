"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n-shared";
import { getTrackCopy, getApiErrorMessage } from "@/lib/copy-app";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type HabitTemplate = {
  id: string;
  name: string;
  icon: string;
  streak: number;
};

type HabitState = HabitTemplate & {
  doneToday: boolean;
};

export function HabitTracker({
  locale,
  defaultHabits,
}: {
  locale: Locale;
  defaultHabits: readonly HabitTemplate[];
}) {
  const t = getTrackCopy(locale);
  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [habits, setHabits] = useState<HabitState[]>([]);
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadTrial = useCallback(async () => {
    const res = await fetch("/api/trial");
    setTrial(await res.json());
  }, []);

  useEffect(() => {
    loadTrial();
    const saved = localStorage.getItem("habit_tracker_state");
    if (saved) {
      try {
        setHabits(JSON.parse(saved));
        return;
      } catch {
        /* fall through */
      }
    }
    setHabits(defaultHabits.map((h) => ({ ...h, doneToday: false })));
  }, [loadTrial, defaultHabits]);

  useEffect(() => {
    if (habits.length) {
      localStorage.setItem("habit_tracker_state", JSON.stringify(habits));
    }
  }, [habits]);

  async function checkIn(habitId: string) {
    setLoading(habitId);
    setError(null);

    const res = await fetch("/api/checkin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ habitId }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(getApiErrorMessage(data.code || data.error, locale));
      setLoading(null);
      return;
    }

    setHabits((prev) =>
      prev.map((h) =>
        h.id === habitId
          ? { ...h, doneToday: true, streak: h.doneToday ? h.streak : h.streak + 1 }
          : h
      )
    );
    await loadTrial();
    setLoading(null);
  }

  const doneCount = habits.filter((h) => h.doneToday).length;

  return (
    <div className="space-y-6">
      {trial && !trial.isMember && trial.remaining <= 1 && (
        <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <p className="font-semibold text-amber-200">
              {t.trialLowTitle.replace("{remaining}", String(trial.remaining))}
            </p>
            <p className="text-sm text-muted mt-1">{t.trialLowBody}</p>
          </div>
          <Link
            href="/join"
            className="shrink-0 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.trialLowCta}
          </Link>
        </div>
      )}

      {trial && !trial.isMember && trial.remaining > 1 && (
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
          {error.includes(locale === "zh" ? "订阅" : "subscribe") && (
            <Link href="/join" className="ml-2 font-semibold underline">
              {t.subscribeNow}
            </Link>
          )}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold">{t.todayHabits}</h2>
          <p className="text-sm text-muted">{t.completed(doneCount, habits.length)}</p>
        </div>
        <div className="text-3xl font-bold text-brand-500">
          {habits.length ? Math.round((doneCount / habits.length) * 100) : 0}%
        </div>
      </div>

      <div className="space-y-3">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className={`rounded-xl border p-4 flex items-center justify-between transition-colors ${
              habit.doneToday
                ? "border-brand-200 bg-brand-600/10"
                : "border-border bg-surface"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{habit.icon}</span>
              <div>
                <p className={`font-medium ${habit.doneToday ? "text-brand-500" : "text-foreground"}`}>
                  {habit.name}
                </p>
                <p className="text-xs text-muted">{t.streakLabel(habit.streak)}</p>
              </div>
            </div>
            <button
              type="button"
              disabled={habit.doneToday || loading === habit.id}
              onClick={() => checkIn(habit.id)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                habit.doneToday
                  ? "bg-brand-100 text-brand-500 cursor-default"
                  : "bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-50"
              }`}
            >
              {habit.doneToday ? t.done : loading === habit.id ? t.loading : t.checkIn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
