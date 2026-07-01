"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const DISMISS_KEY = "dsf_dismiss_urgency_bar";
const CONTACT_BAR_OFFSET = "bottom-11";

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
  const [dismissed, setDismissed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDismissed(localStorage.getItem(DISMISS_KEY) === "1");
    const end = new Date(`${deadline}T23:59:59`);
    const left = Math.max(0, Math.ceil((end.getTime() - Date.now()) / 86400000));
    setDaysLeft(left);
    setReady(true);
  }, [deadline]);

  function dismiss() {
    localStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  }

  if (!ready || dismissed || daysLeft === null || daysLeft <= 0) return null;

  return (
    <div
      className={`fixed inset-x-0 ${CONTACT_BAR_OFFSET} z-[60] border-t border-brand-500/50 bg-indigo-950 px-3 py-2.5 shadow-2xl sm:px-4`}
      role="region"
      aria-label="Launch promotion"
    >
      <div className="mx-auto flex max-w-5xl items-center gap-2">
        <p className="min-w-0 flex-1 text-xs leading-snug text-indigo-100 sm:text-sm">
          <span className="font-semibold text-white">Launch $9.9/mo · ¥69/月</span>
          <span className="mx-1 text-indigo-400">·</span>
          <span className="text-indigo-200">还剩 {daysLeft} 天</span>
        </p>
        <Link
          href={joinHref}
          className="shrink-0 rounded-lg bg-white px-2.5 py-1.5 text-xs font-semibold text-brand-700 hover:bg-brand-50 sm:px-3 sm:py-2 sm:text-sm"
        >
          订阅
        </Link>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 rounded-lg border-2 border-white bg-white/20 px-3 py-1.5 text-sm font-bold text-white hover:bg-white/30 sm:min-w-[5rem] sm:py-2"
          aria-label="关闭促销条"
        >
          ✕ 关闭
        </button>
      </div>
    </div>
  );
}
