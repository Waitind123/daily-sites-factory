"use client";

import { trackFactoryEvent } from "@/lib/analytics-client";
import { siteMeta } from "@/lib/site-meta";

export function CheckoutButton({
  className = "",
  label,
}: {
  className?: string;
  label: string;
}) {
  return (
    <form
      action="/api/checkout"
      method="POST"
      onSubmit={function handleCheckout() {
        trackFactoryEvent(siteMeta.id, "checkout");
      }}
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
