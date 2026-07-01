/** Polar Checkout Link（公开 URL，非密钥） */
export const POLAR_CHECKOUT_URL =
  process.env.POLAR_CHECKOUT_URL ??
  "https://buy.polar.sh/polar_cl_YZS7f2bSGvVGtVq9soq8PFjvHvvxkRO09E8Xx0cESgj";

export const PRICING = {
  usd: { amount: 9.9, interval: "month" as const, label: "$9.9/月" },
  siteUrl: "https://ai-headshots-navy.vercel.app",
};
