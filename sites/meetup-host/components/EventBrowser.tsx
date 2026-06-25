"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { categories, cities, getPublicEvents, type MeetupEvent } from "@/lib/data";
import { CapacityBadge } from "@/components/ui";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type EventListItem = Omit<MeetupEvent, "management">;

export function EventBrowser() {
  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [cityFilter, setCityFilter] = useState("全部");
  const [catFilter, setCatFilter] = useState("全部");
  const [selected, setSelected] = useState<EventListItem | null>(null);
  const [management, setManagement] = useState<MeetupEvent["management"] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const events = getPublicEvents().filter(
    (e) =>
      (cityFilter === "全部" || e.city === cityFilter) &&
      (catFilter === "全部" || e.category === catFilter)
  );

  const loadTrial = useCallback(async () => {
    const res = await fetch("/api/trial");
    setTrial(await res.json());
  }, []);

  useEffect(() => {
    loadTrial();
  }, [loadTrial]);

  async function viewManagement(event: EventListItem) {
    setSelected(event);
    setManagement(null);
    setError(null);
    setLoading(true);

    const res = await fetch("/api/events/manage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventId: event.id }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "加载失败");
      setLoading(false);
      await loadTrial();
      return;
    }

    setManagement(data.management);
    await loadTrial();
    setLoading(false);
  }

  function closeModal() {
    setSelected(null);
    setManagement(null);
    setError(null);
  }

  return (
    <div className="space-y-6">
      {trial && !trial.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            剩余 <strong>{trial.remaining}/{trial.limit}</strong> 次免费活动管理
          </span>
          <Link href="/join" className="font-semibold text-brand-500 hover:underline">
            订阅 $9.9/月 →
          </Link>
        </div>
      )}

      {trial?.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800">
          ✓ 会员已激活 · 无限管理活动和 RSVP
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {cities.map((city) => (
          <button
            key={city}
            type="button"
            onClick={() => setCityFilter(city)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
              cityFilter === city
                ? "bg-brand-600 text-white"
                : "bg-surface border border-border text-muted hover:bg-background"
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCatFilter(cat)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
              catFilter === cat
                ? "bg-stone-800 text-white"
                : "bg-surface border border-border text-muted hover:bg-background"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {events.map((event) => (
          <article
            key={event.id}
            className="rounded-xl border border-border bg-surface p-5 hover:border-brand-300 transition-colors"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-xs font-medium text-brand-500 bg-brand-600/10 px-2 py-0.5 rounded">
                {event.category} · {event.city}
              </span>
              <CapacityBadge
                confirmed={parseInt(event.preview.match(/(\d+)\//)?.[1] ?? "0")}
                capacity={event.capacity}
              />
            </div>
            <h3 className="font-bold text-lg text-foreground">{event.title}</h3>
            <p className="text-sm text-muted mt-1">
              {event.date} {event.time} · {event.venue}
            </p>
            <p className="text-sm text-muted mt-3 line-clamp-2">{event.preview}</p>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
              <div className="text-xs text-muted">组织者 {event.organizer}</div>
              <button
                type="button"
                onClick={() => viewManagement(event)}
                className="text-sm font-semibold text-brand-500 hover:text-brand-500"
              >
                管理 RSVP →
              </button>
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-surface rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-medium text-brand-500">
                  {selected.category} · {selected.city}
                </span>
                <h2 className="text-2xl font-bold mt-1">{selected.title}</h2>
                <p className="text-muted mt-1">
                  {selected.date} {selected.time} · {selected.venue}
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="text-muted hover:text-muted text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <p className="text-muted mb-6">{selected.description}</p>

            {loading && (
              <div className="text-center py-12 text-muted">加载 RSVP 管理面板...</div>
            )}

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-700">
                {error}
                {error.includes("订阅") && (
                  <Link href="/join" className="block mt-2 font-semibold underline">
                    立即订阅 $9.9/月
                  </Link>
                )}
              </div>
            )}

            {management && (
              <div className="space-y-6 text-sm">
                <section>
                  <h3 className="font-bold text-base mb-2">📊 概览</h3>
                  <p className="text-muted">{management.summary}</p>
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    <div className="rounded-lg bg-green-50 p-3 text-center">
                      <p className="text-lg font-bold text-green-700">{management.confirmedCount}</p>
                      <p className="text-xs text-green-600">已确认</p>
                    </div>
                    <div className="rounded-lg bg-amber-50 p-3 text-center">
                      <p className="text-lg font-bold text-amber-700">{management.waitlistCount}</p>
                      <p className="text-xs text-amber-600">候补</p>
                    </div>
                    <div className="rounded-lg bg-red-50 p-3 text-center">
                      <p className="text-lg font-bold text-red-700">{management.noShowRate}</p>
                      <p className="text-xs text-red-600">No-show</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-2">👥 参与者名单</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-2 pr-4 font-medium">姓名</th>
                          <th className="py-2 pr-4 font-medium">状态</th>
                          <th className="py-2 font-medium">备注</th>
                        </tr>
                      </thead>
                      <tbody>
                        {management.attendees.map((a) => (
                          <tr key={a.id} className="border-b border-border">
                            <td className="py-2 pr-4">{a.name}</td>
                            <td className="py-2 pr-4">
                              <span
                                className={`text-xs px-2 py-0.5 rounded ${
                                  a.status === "confirmed"
                                    ? "bg-green-100 text-green-700"
                                    : a.status === "waitlist"
                                      ? "bg-amber-100 text-amber-700"
                                      : "bg-surface-muted text-muted"
                                }`}
                              >
                                {a.status === "confirmed"
                                  ? "已确认"
                                  : a.status === "waitlist"
                                    ? "候补"
                                    : a.status}
                              </span>
                            </td>
                            <td className="py-2 text-muted">{a.notes || "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-2">⏳ 候补管理建议</h3>
                  <ul className="space-y-1 text-muted">
                    {management.waitlistTips.map((tip) => (
                      <li key={tip}>· {tip}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-2">📧 提醒模板</h3>
                  <div className="rounded-lg bg-background border border-border p-4 text-muted font-mono text-xs">
                    {management.reminderTemplate}
                  </div>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-2">✅ 签到指南</h3>
                  <ul className="space-y-1 text-muted">
                    {management.checkInNotes.map((note) => (
                      <li key={note}>· {note}</li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl bg-brand-600/10 border border-brand-200 p-4">
                  <h3 className="font-bold text-base mb-2">💡 容量建议</h3>
                  <p className="text-foreground">{management.capacityAdvice}</p>
                </section>
              </div>
            )}

            {!trial?.isMember && management && (
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted mb-3">
                  喜欢这种管理面板？订阅解锁无限活动和 RSVP 管理
                </p>
                <Link
                  href="/join"
                  className="inline-block bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700"
                >
                  订阅 $9.9/月
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
