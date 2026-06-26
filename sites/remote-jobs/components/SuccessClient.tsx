"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n-shared";
import { getSuccessCopy } from "@/lib/copy-app";

export function SuccessClient({
  locale,
  isDemo,
  sessionId,
}: {
  locale: Locale;
  isDemo: boolean;
  sessionId?: string;
}) {
  const c = getSuccessCopy(locale);

  useEffect(() => {
    fetch("/api/member/activate", { method: "POST" });
  }, []);

  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="text-3xl font-bold">{c.title}</h1>
      <p className="text-muted mt-4">
        {isDemo ? c.demoPaid : c.paidPrefix}
        {c.paidBody}
      </p>
      {sessionId && (
        <p className="text-xs text-muted mt-2 font-mono break-all">
          {c.order} {sessionId}
        </p>
      )}
      <div className="mt-8 space-y-3">
        <Link
          href="/jobs"
          className="block w-full bg-brand-600 text-white py-4 rounded-xl font-semibold hover:bg-brand-700 transition-colors"
        >
          {c.browseJobs}
        </Link>
        <Link
          href="/post"
          className="block w-full border border-border text-foreground py-4 rounded-xl font-semibold hover:bg-background transition-colors"
        >
          {c.postJob}
        </Link>
        <Link href="/" className="block text-sm text-muted hover:underline">
          {c.backHome}
        </Link>
      </div>
    </div>
  );
}
