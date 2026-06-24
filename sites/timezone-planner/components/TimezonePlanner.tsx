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
import { durationOptions } from "@/lib/data";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

function miseryLabel(score: number): { text: string; color: string } {
  if (score === 0) return { text: "舒适", color: "text-green-700 bg-green-50 border-green-200" };
  if (score <= 3) return { text: "可接受", color: "text-blue-700 bg-blue-50 border-blue-200" };
  if (score <= 6) return { text: "稍辛苦", color: "text-amber-700 bg-amber-50 border-amber-200" };
  return { text: "需轮换", color: "text-red-700 bg-red-50 border-red-200" };
}

export function TimezonePlanner() {
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
  const [result, setResult] = useState<PlanResult | null>(null);
  const [now, setNow] = useState(new Date());

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
    setResult(null);

    const res = await fetch("/api/plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ participants, durationMinutes: duration }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "规划失败");
      setLoading(false);
      return;
    }

    setResult(data.result);
    await loadTrial();
    setLoading(false);
  }

  function exportIcs(slot: MeetingSlot) {
    if (!trial?.isMember) {
      setError("ICS 导出需要会员，请订阅 $9.9/月");
      return;
    }
    const start = slot.startUtc.replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const end = slot.endUtc.replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//TimezonePlanner//CN",
      "BEGIN:VEVENT",
      `DTSTART:${start}`,
      `DTEND:${end}`,
      "SUMMARY:跨时区团队会议",
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
        <div className="rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            剩余 <strong>{trial.remaining}/{trial.limit}</strong> 次免费体验
          </span>
          <Link href="/join" className="font-semibold text-brand-700 hover:underline">
            订阅 $9.9/月 →
          </Link>
        </div>
      )}

      {trial?.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800">
          ✓ 会员已激活 · 无限规划 + ICS 导出 + 团队模板
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

      <form onSubmit={handlePlan} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-3">团队成员</label>
          <div className="space-y-3">
            {participants.map((p) => (
              <div
                key={p.id}
                className="flex flex-col sm:flex-row gap-2 sm:items-center rounded-lg border border-stone-200 p-3 bg-stone-50"
              >
                <input
                  type="text"
                  value={p.name}
                  onChange={(e) => updateParticipant(p.id, "name", e.target.value)}
                  className="w-full sm:w-24 rounded-lg border border-stone-300 px-2 py-1.5 text-sm"
                  placeholder="名称"
                />
                <select
                  value={p.timezone}
                  onChange={(e) => updateParticipant(p.id, "timezone", e.target.value)}
                  className="flex-1 rounded-lg border border-stone-300 px-2 py-1.5 text-sm bg-white"
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
                    className="w-14 rounded-lg border border-stone-300 px-2 py-1.5 text-sm text-center"
                  />
                  <span className="text-stone-400">–</span>
                  <input
                    type="number"
                    min={1}
                    max={24}
                    value={p.workEnd}
                    onChange={(e) => updateParticipant(p.id, "workEnd", Number(e.target.value))}
                    className="w-14 rounded-lg border border-stone-300 px-2 py-1.5 text-sm text-center"
                  />
                  <span className="text-xs text-stone-400 hidden sm:inline">本地</span>
                </div>
                <div className="text-xs text-stone-500 sm:w-20 text-right">
                  现在 {getCurrentTimeInZone(p.timezone)}
                </div>
                {participants.length > 2 && (
                  <button
                    type="button"
                    onClick={() => removeParticipant(p.id)}
                    className="text-stone-400 hover:text-red-500 text-sm"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {CITY_PRESETS.filter(
              (c) => !participants.some((p) => p.name === c.name)
            )
              .slice(0, 8)
              .map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => addParticipant(c.id)}
                  className="rounded-full border border-stone-200 px-3 py-1 text-xs hover:border-brand-400 hover:bg-brand-50 transition-colors"
                >
                  + {c.flag} {c.name}
                </button>
              ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">会议时长</label>
          <div className="flex gap-2">
            {durationOptions.map((d) => (
              <button
                key={d.value}
                type="button"
                onClick={() => setDuration(d.value)}
                className={`rounded-lg border px-4 py-2 text-sm transition-colors ${
                  duration === d.value
                    ? "border-brand-600 bg-brand-50 text-brand-800 font-medium"
                    : "border-stone-200 hover:border-stone-300"
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
          {loading ? "扫描中..." : "找出最佳会议时间"}
        </button>
      </form>

      {result && (
        <div className="space-y-4">
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 text-sm text-stone-600">
            扫描未来 <strong>{result.daysScanned}</strong> 天 · 找到{" "}
            <strong>{result.slots.length}</strong> 个推荐时段 · 日均重叠约{" "}
            <strong>{result.totalOverlapHours}</strong> 小时
          </div>

          {result.slots.length === 0 ? (
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-center text-amber-800">
              <p className="font-medium">未找到全员可用的时段</p>
              <p className="text-sm mt-2">
                尝试放宽工作时间，或减少参与人数。跨 12+ 小时时区的团队建议 async-first。
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {result.slots.map((slot, i) => {
                const misery = miseryLabel(slot.miseryScore);
                return (
                  <div
                    key={slot.startUtc}
                    className="rounded-xl border border-stone-200 bg-white p-4 sm:p-5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-stone-900">#{i + 1}</span>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${misery.color}`}>
                            痛苦指数 {slot.miseryScore} · {misery.text}
                          </span>
                        </div>
                        <p className="text-sm text-stone-500 mt-1">{slot.fairnessNote}</p>
                      </div>
                      {trial?.isMember && (
                        <button
                          type="button"
                          onClick={() => exportIcs(slot)}
                          className="text-sm text-brand-600 hover:underline shrink-0"
                        >
                          导出 ICS
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
