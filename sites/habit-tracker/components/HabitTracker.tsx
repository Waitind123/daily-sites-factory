"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { defaultHabits } from "@/lib/data";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type HabitState = {
  id: string;
  name: string;
  icon: string;
  streak: number;
  doneToday: boolean;
};

export function HabitTracker() {
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
    setHabits(
      defaultHabits.map((h) => ({ ...h, doneToday: false }))
    );
  }, [loadTrial]);

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
      setError(data.error || "打卡失败");
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
      {trial && !trial.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            剩余 <strong>{trial.remaining}/{trial.limit}</strong> 次免费体验
          </span>
          <Link href="/join" className="font-semibold text-brand-700 hover:underline">
            订阅 $29.9/月 →
          </Link>
        </div>
      )}

      {trial?.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800">
          ✓ 会员已激活 · 无限打卡
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
          {error.includes("订阅") && (
            <Link href="/join" className="ml-2 font-semibold underline">
              立即订阅
            </Link>
          )}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold">今日习惯</h2>
          <p className="text-sm text-stone-500">
            已完成 {doneCount}/{habits.length}
          </p>
        </div>
        <div className="text-3xl font-bold text-brand-600">
          {habits.length ? Math.round((doneCount / habits.length) * 100) : 0}%
        </div>
      </div>

      <div className="space-y-3">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className={`rounded-xl border p-4 flex items-center justify-between transition-colors ${
              habit.doneToday
                ? "border-brand-200 bg-brand-50"
                : "border-stone-200 bg-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{habit.icon}</span>
              <div>
                <p className={`font-medium ${habit.doneToday ? "text-brand-700" : "text-stone-900"}`}>
                  {habit.name}
                </p>
                <p className="text-xs text-stone-400">🔥 连续 {habit.streak} 天</p>
              </div>
            </div>
            <button
              type="button"
              disabled={habit.doneToday || loading === habit.id}
              onClick={() => checkIn(habit.id)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                habit.doneToday
                  ? "bg-brand-100 text-brand-600 cursor-default"
                  : "bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-50"
              }`}
            >
              {habit.doneToday ? "已完成 ✓" : loading === habit.id ? "..." : "打卡"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
