/** Polar Checkout API — per-site success/return URLs (synced to each site lib/). */
const DEFAULT_POLAR_CHECKOUT_URL =
  process.env.POLAR_CHECKOUT_URL ??
  "https://buy.polar.sh/polar_cl_YZS7f2bSGvVGtVq9soq8PFjvHvvxkRO09E8Xx0cESgj";

/**
 * Create a Polar checkout URL for the requesting site (origin).
 * Uses API when POLAR_ACCESS_TOKEN + POLAR_PRODUCT_ID are set; else static link.
 */
export async function resolvePolarCheckoutUrl(origin: string): Promise<string | null> {
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

  return DEFAULT_POLAR_CHECKOUT_URL;
}

export function polarPaymentsConfigured() {
  return !!(
    (process.env.POLAR_ACCESS_TOKEN && process.env.POLAR_PRODUCT_ID) ||
    process.env.POLAR_CHECKOUT_URL ||
    DEFAULT_POLAR_CHECKOUT_URL
  );
}
