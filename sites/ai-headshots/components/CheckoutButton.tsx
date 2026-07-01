"use client";

import { trackFactoryEvent } from "@/lib/analytics-client";
import { siteMeta } from "@/lib/site-meta";

export function CheckoutButton({
  className = "",
  label = "Subscribe · $9.9/mo",
  currency = "usd",
}: {
  className?: string;
  label?: string;
  currency?: "cny" | "usd";
}) {
  return (
    <a
      href={`/api/checkout?go=1&currency=${currency}`}
      onClick={() => trackFactoryEvent(siteMeta.id, "checkout")}
      className={`block w-full rounded-xl bg-brand-600 px-6 py-3.5 text-center text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors active:scale-[0.98] ${className}`}
    >
      {label}
    </a>
  );
}
