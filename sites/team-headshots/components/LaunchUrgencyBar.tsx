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
    <div className="fixed bottom-0 inset-x-0 z-50 border-t border-brand-600/40 bg-indigo-950/95 backdrop-blur px-4 py-3 shadow-lg">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
        <p className="min-w-0 flex-1 text-center text-sm text-indigo-100 sm:text-left">
          <span className="font-semibold text-white">Launch price $9.9/mo</span>
          <span className="mx-2 text-indigo-300">·</span>
          <span className="text-indigo-200">
            首发价还剩 {daysLeft} 天 · {daysLeft}d left
          </span>
          <span className="mx-2 hidden text-indigo-400 sm:inline">·</span>
          <a
            href={`mailto:${OWNER_CONTACT_EMAIL}`}
            className="hidden text-indigo-200 hover:text-white sm:inline"
          >
            {OWNER_CONTACT_EMAIL}
          </a>
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={joinHref}
            className="rounded-lg bg-surface px-4 py-2 text-sm font-semibold text-brand-500 hover:bg-brand-600/10 transition"
          >
            Subscribe $9.9/mo →
          </Link>
          <button
            type="button"
            onClick={dismiss}
            className="rounded-lg p-2 text-indigo-300 hover:bg-indigo-900/60 hover:text-white"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
