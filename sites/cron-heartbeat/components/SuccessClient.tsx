"use client";

import { useEffect } from "react";
import Link from "next/link";

export function SuccessClient({
  isDemo,
  sessionId,
}: {
  isDemo: boolean;
  sessionId?: string;
}) {
  useEffect(() => {
    fetch("/api/member/activate", { method: "POST" });
  }, []);

  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="text-3xl font-bold">Welcome to Cron Heartbeat!</h1>
      <p className="text-muted mt-4">
        {isDemo ? "Demo payment successful." : "Payment successful —"} you now have unlimited cron monitors and alerts.
      </p>
      {sessionId && (
        <p className="text-xs text-muted mt-2 font-mono break-all">
          Order: {sessionId}
        </p>
      )}
      <div className="mt-8 space-y-3">
        <Link
          href="/jobs"
          className="block w-full bg-brand-600 text-white py-4 rounded-xl font-semibold hover:bg-brand-700 transition-colors"
        >
          Open jobs
        </Link>
        <Link href="/" className="block text-sm text-muted hover:underline">
          Back to home
        </Link>
      </div>
    </div>
  );
}
