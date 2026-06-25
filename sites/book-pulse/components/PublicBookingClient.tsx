"use client";

import { useState } from "react";
import Link from "next/link";
import type { BookingPage } from "@/lib/bookings";
import type { Locale } from "@/lib/i18n-shared";
import { getPublicBookingCopy } from "@/lib/copy-app";

export function PublicBookingClient({
  page,
  locale,
}: {
  page: BookingPage | null;
  locale: Locale;
}) {
  const t = getPublicBookingCopy(locale);
  const [booked, setBooked] = useState(false);

  if (!page) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground">{t.notFound}</h1>
        <p className="mt-2 text-muted">{t.notFoundHint}</p>
        <Link
          href="/dashboard"
          className="mt-6 inline-block rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
        >
          {t.backDashboard}
        </Link>
      </div>
    );
  }

  async function handleBook() {
    await fetch("/api/bookings/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: page!.slug }),
    });
    setBooked(true);
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-12 sm:py-16">
      <div className="rounded-2xl border border-brand-600/30 bg-surface p-8 shadow-xl">
        <p className="text-sm text-brand-500 font-medium">📅 Book Pulse</p>
        <h1 className="mt-2 text-2xl font-bold text-foreground">{page.name}</h1>
        {page.project && (
          <p className="mt-1 text-sm text-muted">
            {t.buildingLabel} {page.project}
          </p>
        )}
        {page.bio && <p className="mt-3 text-sm text-foreground leading-relaxed">{page.bio}</p>}
        <p className="mt-4 text-xs text-muted">
          {t.timezone}: {page.timezone} · {page.durationMin} {t.duration}
        </p>

        <div className="mt-6 space-y-3">
          {page.slots.map((slot) => (
            <div
              key={`${slot.day}-${slot.start}`}
              className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3"
            >
              <span className="text-sm font-medium">
                {slot.day} {slot.start} – {slot.end}
              </span>
              <span className="text-xs text-emerald-400">✓ {t.available}</span>
            </div>
          ))}
        </div>

        {booked ? (
          <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
            <p className="font-medium text-emerald-400">{t.booked}</p>
            <p className="mt-1 text-xs text-muted">{t.bookedHint}</p>
          </div>
        ) : (
          <button
            onClick={handleBook}
            className="mt-6 w-full rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700"
          >
            {t.bookSlot} {page.slots[0]?.day} {page.slots[0]?.start}
          </button>
        )}
      </div>
    </div>
  );
}
