"use client";

import { useEffect, useState } from "react";

const CHECKOUT_USD =
  "https://ai-headshots-navy.vercel.app/api/checkout?go=1&currency=usd&utm_source=factory-dashboard";
const JOIN_URL =
  "https://ai-headshots-navy.vercel.app/join?utm_source=factory-dashboard";
const DEADLINE = "2026-07-13";
const TARGET_SUBS = 2;

export function RevenueDeadlineBanner({ locale: _locale }: { locale: string }) {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const end = new Date(`${DEADLINE}T23:59:59`);
    setDaysLeft(Math.max(0, Math.ceil((end.getTime() - Date.now()) / 86400000)));
  }, []);

  if (daysLeft === null) return null;

  return (
    <div className="rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/80 to-amber-950/60 p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-300">
            生死线 Revenue deadline
          </p>
          <h2 className="text-lg sm:text-xl font-bold text-zinc-50 mt-1">
            还剩 {daysLeft} 天赚到 $20 · Cursor 7/13 续费
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            目标 = <strong className="text-amber-200">{TARGET_SUBS} 人 × $9.9</strong> 订阅 ai-headshots。
            Polar 已接通，只缺真实付款 — 别分散推广，全力推收款链。
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 shrink-0">
          <a
            href={CHECKOUT_USD}
            className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 text-center"
          >
            直达结账 $9.9 →
          </a>
          <a
            href={JOIN_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-600 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:bg-zinc-800 text-center"
          >
            /join 落地页
          </a>
        </div>
      </div>
      <p className="text-[11px] text-zinc-500 mt-3">
        今天必做：把 join 链接发到 Reddit / 朋友圈 / 求职群 · 看板「付费」≠ Polar 到账，以 Polar Dashboard 为准
      </p>
    </div>
  );
}
