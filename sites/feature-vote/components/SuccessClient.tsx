"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n-shared";
import { getSuccessCopy } from "@/lib/copy-app";
import { trackFactoryEvent } from "@/lib/analytics-client";
import { siteMeta } from "@/lib/site-meta";

export function SuccessClient({
  locale,
  isDemo,
  sessionId,
}: {
  locale: Locale;
  isDemo: boolean;
  sessionId?: string;
}) {
  const t = getSuccessCopy(locale);

  useEffect(() => {
    fetch("/api/member/activate", { method: "POST" });
    trackFactoryEvent(siteMeta.id, "purchase");
  }, []);

  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="text-3xl font-bold">{t.title}</h1>
      <p className="text-muted mt-4">
        {isDemo ? t.demoPaid : `${t.paidPrefix} ${t.paidBody}`}
      </p>
      {sessionId && (
        <p className="text-xs text-muted mt-2 font-mono break-all">
          {t.order} {sessionId}
        </p>
      )}
      <div className="mt-8 space-y-3">
        <Link
          href="/boards"
          className="block w-full bg-brand-600 text-white py-4 rounded-xl font-semibold hover:bg-brand-700 transition-colors"
        >
          {t.openBoards}
        </Link>
        <p className="text-sm text-muted">{t.nextStep}</p>
        <Link
          href="/guide/canny-alternative-indie-hackers"
          className="block text-sm text-brand-500 hover:underline"
        >
          {t.embedGuide}
        </Link>
        <Link href="/" className="block text-sm text-muted hover:underline">
          {t.backHome}
        </Link>
      </div>
    </div>
  );
}
