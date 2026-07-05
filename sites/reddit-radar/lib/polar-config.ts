/** Shared Polar checkout defaults (synced to each site lib/polar-config.ts). */
export const DEFAULT_POLAR_CHECKOUT_URL =
  process.env.POLAR_CHECKOUT_URL ??
  "https://buy.polar.sh/polar_cl_YZS7f2bSGvVGtVq9soq8PFjvHvvxkRO09E8Xx0cESgj";

export const CHECKOUT_HUB_URL =
  process.env.CHECKOUT_HUB_URL ?? "https://ai-headshots-navy.vercel.app";

export const POLAR_PRODUCT_ID_DEFAULT = "13c09bd3-de34-4711-ac5a-e1164522d50d";

export const RETURN_ORIGIN_COOKIE = "dsf_return_origin";

/** Vercel preview/production origins allowed for cross-site return. */
export const ALLOWED_RETURN_ORIGIN =
  /^https:\/\/([a-z0-9-]+\.)*vercel\.app$/i;
