"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { OWNER_CONTACT_EMAIL } from "@/lib/site-owner";

const DISMISS_KEY = "dsf_dismiss_urgency_bar";

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
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setDismissed(localStorage.getItem(DISMISS_KEY) === "1");
    const end = new Date(`${deadline}T23:59:59`);
    const left = Math.max(0, Math.ceil((end.getTime() - Date.now()) / 86400000));
    setDaysLeft(left);
  }, [deadline]);

  function dismiss() {
    localStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  }

  if (dismissed || daysLeft === null || daysLeft <= 0) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 border-t border-brand-600/40 bg-indigo-950/98 backdrop-blur px-3 py-3 shadow-2xl sm:px-4">
      <div className="mx-auto flex max-w-5xl items-center gap-2 sm:gap-3">
        <p className="min-w-0 flex-1 text-xs leading-snug text-indigo-100 sm:text-sm">
          <span className="font-semibold text-white">Launch $9.9/mo</span>
          <span className="mx-1 text-indigo-400">·</span>
          <span className="text-indigo-200">还剩 {daysLeft} 天</span>
        </p>
        <Link
          href={joinHref}
          className="hidden shrink-0 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-brand-700 hover:bg-brand-50 sm:inline sm:text-sm"
        >
          Subscribe →
        </Link>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 rounded-lg border border-indigo-500/60 bg-indigo-900/80 px-3 py-2 text-xs font-semibold text-white hover:bg-indigo-800 sm:text-sm"
          aria-label="Close launch bar"
        >
          ✕ 关闭
        </button>
      </div>
      <p className="mx-auto mt-1 max-w-5xl text-center text-xs text-indigo-300 sm:text-left">
        <a href={`mailto:${OWNER_CONTACT_EMAIL}`} className="hover:text-white hover:underline">
          {OWNER_CONTACT_EMAIL}
        </a>
      </p>
    </div>
  );
}
