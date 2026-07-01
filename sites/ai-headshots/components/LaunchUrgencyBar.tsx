"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function LaunchUrgencyBar({
  locale: _locale,
  joinHref = "/join",
  deadline = "2026-07-13",
}: {
  locale?: string;
  joinHref?: string;
  deadline?: string;
}) {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const end = new Date(`${deadline}T23:59:59`);
    const left = Math.max(0, Math.ceil((end.getTime() - Date.now()) / 86400000));
    setDaysLeft(left);
  }, [deadline]);

  if (daysLeft === null || daysLeft <= 0) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 border-t border-brand-600/40 bg-indigo-950/95 backdrop-blur px-4 py-3 shadow-lg">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="text-center text-sm text-indigo-100 sm:text-left">
          <span className="font-semibold text-white">Launch price $9.9/mo</span>
          <span className="mx-2 text-indigo-300">·</span>
          <span className="text-indigo-200">
            首发价还剩 {daysLeft} 天 · {daysLeft}d left
          </span>
        </p>
        <Link
          href={joinHref}
          className="shrink-0 rounded-lg bg-white px-5 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition"
        >
          Subscribe $9.9/mo →
        </Link>
      </div>
    </div>
  );
}
