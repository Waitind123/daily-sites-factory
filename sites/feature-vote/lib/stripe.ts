import Stripe from "stripe";
import type { Locale } from "./i18n-shared";
import { getStripeProductCopy } from "./copy-app";
const DEFAULT_POLAR_CHECKOUT_URL =
  "https://buy.polar.sh/polar_cl_YZS7f2bSGvVGtVq9soq8PFjvHvvxkRO09E8Xx0cESgj";


const POLAR_CHECKOUT_URL =
  process.env.POLAR_CHECKOUT_URL ?? DEFAULT_POLAR_CHECKOUT_URL;
const DEMO_MODE = !process.env.STRIPE_SECRET_KEY && !POLAR_CHECKOUT_URL;

export function isDemoMode() {
  return DEMO_MODE;
}

export function getStripe() {
  if (DEMO_MODE || POLAR_CHECKOUT_URL) return null;
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-08-27.basil",
  });
}

export const PRICE_USD_MONTHLY = 990;
export const PRICE_USD_ANNUAL = 9900;
export const PRICE_CNY_ANNUAL = 69900;

export type BillingPlan = "monthly" | "annual";

export async function createCheckoutSession(
  origin: string,
  locale: Locale = "en",
  plan: BillingPlan = "monthly"
) {
  const product = getStripeProductCopy(locale);
  const polarUrl = POLAR_CHECKOUT_URL;
  if (polarUrl) {
    return { demo: false as const, url: polarUrl };
  }

  const stripe = getStripe();

  if (!stripe) {
    return {
      demo: true as const,
      url: `${origin}/success?demo=true&plan=${plan}`,
    };
  }

  const isAnnual = plan === "annual";
  const currency = isAnnual && locale === "zh" ? "cny" : "usd";
  const unitAmount =
    currency === "cny"
      ? PRICE_CNY_ANNUAL
      : isAnnual
        ? PRICE_USD_ANNUAL
        : PRICE_USD_MONTHLY;

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: currency === "cny" ? ["card", "alipay", "wechat_pay"] : ["card"],
    ...(currency === "cny"
      ? { payment_method_options: { wechat_pay: { client: "web" } } }
      : {}),
    line_items: [
      {
        price_data: {
          currency,
          product_data: {
            name: isAnnual ? product.annualName : product.name,
            description: isAnnual ? product.annualDescription : product.description,
          },
          unit_amount: unitAmount,
          recurring: { interval: isAnnual ? "year" : "month" },
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}&plan=${plan}`,
    cancel_url: `${origin}/join`,
    metadata: { product: isAnnual ? "feature-vote-annual" : "feature-vote-monthly" },
  });

  return {
    demo: false as const,
    url: session.url!,
    sessionId: session.id,
  };
}
