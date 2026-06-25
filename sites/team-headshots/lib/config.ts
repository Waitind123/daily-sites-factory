/** Polar Checkout Link（公开 URL，非密钥） */
export const POLAR_CHECKOUT_URL =
  process.env.POLAR_CHECKOUT_URL ??
  "https://buy.polar.sh/polar_cl_qSTJ0Qi4sge79g6xT5KFe09tQ4As1nOpkVmwU2K7lDA";

export const PRICING = {
  usd: { amount: 9.9, interval: "month" as const, label: "$9.9/月" },
  siteUrl: "https://team-headshots.vercel.app",
};
