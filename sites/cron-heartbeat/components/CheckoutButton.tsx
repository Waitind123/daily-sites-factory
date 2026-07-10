"use client";

import { trackFactoryEvent } from "@/lib/analytics-client";
import { siteMeta } from "@/lib/site-meta";

export function CheckoutButton({
  className = "",
  label = "Subscribe · $29/mo",
  currency,
}: {
  className?: string;
  label?: string;
  currency?: "cny" | "usd";
}) {
  if (currency) {
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

  return (
    <form
      action="/api/checkout"
      method="POST"
      onSubmit={() => trackFactoryEvent(siteMeta.id, "checkout")}
    >
      <button
        type="submit"
        className={`w-full rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors active:scale-[0.98] ${className}`}
      >
        {label}
      </button>
    </form>
  );
}
