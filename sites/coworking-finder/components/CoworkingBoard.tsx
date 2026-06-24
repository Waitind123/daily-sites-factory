"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { spaces as allSpaces, cities, type CoworkingSpace } from "@/lib/data";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type SpaceDetail = CoworkingSpace & { unlocked: boolean };

const TAGS = ["数字游民", "日票", "视频会议", "低价", "创业"];

export function CoworkingBoard() {
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
        throw new Error(data.error || "加载失败");
      }

      setSelected(data.space);
      if (data.trial) {
        setTrial(data.trial);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "加载失败");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">全球联合办公空间</h1>
          <p className="text-stone-500 mt-1">{filtered.length} 个空间 · 40+ 城市</p>
        </div>
        {trial && (
          <div className="text-sm rounded-lg bg-brand-50 text-brand-700 px-4 py-2 font-medium">
            {trial.isMember
              ? "✓ 会员 · 无限查看"
              : `剩余 ${trial.remaining}/${trial.limit} 次免费体验`}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-6">
        <input
          type="search"
          placeholder="搜索空间、城市、国家…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
        <div className="flex flex-wrap gap-2">
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="rounded-full border border-stone-200 px-3 py-1 text-xs font-medium bg-white text-stone-600"
          >
            <option value="">全部城市</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {TAGS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTag(tag === t ? "" : t)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                tag === t
                  ? "bg-brand-600 text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
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
            <p className="font-semibold text-amber-900">免费体验已用完</p>
            <p className="text-sm text-amber-700 mt-1">订阅 $9.9/月，无限查看空间详情 + WiFi 数据 + 内部贴士</p>
          </div>
          <Link
            href="/join"
            className="shrink-0 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            立即订阅
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
              className={`w-full text-left rounded-xl border p-4 transition-colors hover:border-brand-300 hover:bg-brand-50/30 ${
                selected?.id === space.id ? "border-brand-600 bg-brand-50" : "border-stone-200 bg-white"
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{space.logo}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-stone-900 truncate">{space.name}</p>
                  <p className="text-sm text-stone-500">
                    {space.city}, {space.country}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                      📶 {space.wifiMbps} Mbps
                    </span>
                    {space.videoCallReady && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                        视频会议
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-brand-700 mt-2">{space.dayPassPrice}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-3">
          {selected ? (
            <div className="rounded-xl border border-stone-200 bg-white p-6 sticky top-24">
              <div className="flex items-start gap-4">
                <span className="text-4xl">{selected.logo}</span>
                <div>
                  <h2 className="text-xl font-bold">{selected.name}</h2>
                  <p className="text-stone-500">
                    {selected.neighborhood} · {selected.city}, {selected.country}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-amber-500">★ {selected.rating}</span>
                    <span className="text-stone-400 text-sm">({selected.reviews} 评价)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg bg-stone-50 p-3">
                  <p className="text-stone-500 text-xs">日票价格</p>
                  <p className="font-semibold text-brand-700">{selected.dayPassPrice}</p>
                </div>
                <div className="rounded-lg bg-stone-50 p-3">
                  <p className="text-stone-500 text-xs">月票价格</p>
                  <p className="font-semibold">{selected.monthlyPrice}</p>
                </div>
                <div className="rounded-lg bg-stone-50 p-3">
                  <p className="text-stone-500 text-xs">WiFi 实测</p>
                  <p className="font-semibold">{selected.wifiMbps} Mbps</p>
                </div>
                <div className="rounded-lg bg-stone-50 p-3">
                  <p className="text-stone-500 text-xs">营业时间</p>
                  <p className="font-semibold">{selected.hours}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm">
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">空间介绍</h3>
                  <p className="text-stone-600">{selected.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">设施</h3>
                  <div className="flex flex-wrap gap-2">
                    {selected.amenities.map((a) => (
                      <span key={a} className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
                {selected.insiderTips && (
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">内部贴士</h3>
                    <ul className="list-disc list-inside text-stone-600 space-y-1">
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
                  访问官网预订 →
                </a>
              )}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-stone-300 bg-stone-50 p-12 text-center text-stone-400">
              <p className="text-4xl mb-3">👈</p>
              <p>点击左侧空间查看完整详情</p>
              <p className="text-sm mt-1">非会员免费体验 5 次</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
