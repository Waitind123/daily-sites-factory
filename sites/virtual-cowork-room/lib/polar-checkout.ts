/** Polar checkout — API per-site URLs, or hub bridge (no secrets). Synced to each site lib/polar-checkout.ts */
import { CHECKOUT_HUB_URL, DEFAULT_POLAR_CHECKOUT_URL } from "./polar-config";

/**
 * Checkout URL for the requesting site (origin).
 * 1. Polar API when POLAR_ACCESS_TOKEN + POLAR_PRODUCT_ID are set
 * 2. Else hub bridge → sets return cookie → Polar static link
 */
export async function resolvePolarCheckoutUrl(origin: string): Promise<string> {
  const base = origin.replace(/\/$/, "");
  const token = process.env.POLAR_ACCESS_TOKEN;
  const productId = process.env.POLAR_PRODUCT_ID;

  if (token && productId) {
    try {
      const res = await fetch("https://api.polar.sh/v1/checkouts/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: [productId],
          success_url: `${base}/success?polar=true`,
          return_url: `${base}/join`,
        }),
        cache: "no-store",
      });
      if (res.ok) {
        const data = (await res.json()) as { url?: string };
        if (data.url) return data.url;
      }
      console.error("[polar] API", res.status, await res.text());
    } catch (err) {
      console.error("[polar] API error", err);
    }
  }

  const hub = CHECKOUT_HUB_URL.replace(/\/$/, "");
  return `${hub}/api/checkout-bridge?origin=${encodeURIComponent(base)}`;
}

export function polarPaymentsConfigured() {
  return !!(
    (process.env.POLAR_ACCESS_TOKEN && process.env.POLAR_PRODUCT_ID) ||
    process.env.POLAR_CHECKOUT_URL ||
    DEFAULT_POLAR_CHECKOUT_URL
  );
}
