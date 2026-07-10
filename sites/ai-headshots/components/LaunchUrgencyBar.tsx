"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckoutButton } from "@/components/CheckoutButton";

const DISMISS_KEY = "dsf_dismiss_urgency_bar";
const CONTACT_BAR_OFFSET = "bottom-11";
const TARGET_SUBS = 2;

export function LaunchUrgencyBar({
  locale = "zh",
  joinHref = "/join",
  deadline = "2026-07-13",
}: {
  locale?: string;
  joinHref?: string;
  deadline?: string;
}) {
  const zh = locale === "zh" || locale.startsWith("zh");
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDismissed(sessionStorage.getItem(DISMISS_KEY) === "1");
    const end = new Date(`${deadline}T23:59:59`);
    const left = Math.max(0, Math.ceil((end.getTime() - Date.now()) / 86400000));
    setDaysLeft(left);
    setReady(true);
  }, [deadline]);

  function dismiss() {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  }

  if (!ready || dismissed || daysLeft === null) return null;

  return (
    <div
      className={`fixed inset-x-0 ${CONTACT_BAR_OFFSET} z-[60] border-t border-amber-500/60 bg-gradient-to-r from-amber-950 to-rose-950 px-3 py-2.5 shadow-2xl sm:px-4`}
      role="region"
      aria-label="Launch promotion"
    >
      <div className="mx-auto flex max-w-5xl items-center gap-2">
        <p className="min-w-0 flex-1 text-xs leading-snug text-amber-100 sm:text-sm">
          <span className="font-bold text-white">
            {zh ? `仅剩 ${TARGET_SUBS} 人订阅 = 覆盖 Cursor $20` : `Just ${TARGET_SUBS} subs = cover Cursor $20`}
          </span>
          <span className="mx-1 text-amber-400">·</span>
          <span className="text-amber-200">
            {zh ? `还剩 ${daysLeft} 天` : `${daysLeft}d left`}
          </span>
          <span className="hidden sm:inline text-amber-300/80"> · $29/mo · ¥199/月</span>
        </p>
        <CheckoutButton
          label={zh ? "立即订阅" : "Subscribe"}
          currency="usd"
          className="!w-auto shrink-0 !rounded-lg !px-3 !py-2 !text-xs sm:!text-sm"
        />
        <Link
          href={joinHref}
          className="hidden sm:inline shrink-0 text-xs text-amber-200 underline hover:text-white"
        >
          {zh ? "详情" : "Details"}
        </Link>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 rounded-lg border border-amber-500/50 px-2 py-1 text-xs text-amber-200 hover:bg-amber-900/50"
          aria-label="关闭"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
