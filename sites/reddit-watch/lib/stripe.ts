import Stripe from "stripe";
import type { Locale } from "./i18n-shared";
import { getStripeProductCopy } from "./copy-app";
import { resolvePolarCheckoutUrl } from "./polar-checkout";
const DEFAULT_POLAR_CHECKOUT_URL =
  "https://buy.polar.sh/polar_cl_YZS7f2bSGvVGtVq9soq8PFjvHvvxkRO09E8Xx0cESgj";


const POLAR_CHECKOUT_URL =
  process.env.POLAR_CHECKOUT_URL ?? DEFAULT_POLAR_CHECKOUT_URL;
const DEMO_MODE = !process.env.STRIPE_SECRET_KEY && !POLAR_CHECKOUT_URL;

export function isDemoMode() {
  return DEMO_MODE;
}

export function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) return null;
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-08-27.basil",
  });
}

export const PRICE_USD = 2900;


export const PRICE_CNY_MONTHLY = 19900;

export async function createCnyCheckoutSession(origin: string, locale: Locale = "en") {
  const product = getStripeProductCopy(locale);
  const stripe = getStripe();
  if (!stripe) {
    return {
      demo: true as const,
      url: `${origin}/success?demo=true&currency=cny`,
    };
  }
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card", "alipay", "wechat_pay"],
    payment_method_options: { wechat_pay: { client: "web" } },
    line_items: [
      {
        price_data: {
          currency: "cny",
          product_data: { name: product.name, description: product.description },
          unit_amount: PRICE_CNY_MONTHLY,
          recurring: { interval: "month" },
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}&currency=cny`,
    cancel_url: `${origin}/join`,
    metadata: { product: "factory-monthly-cny", currency: "cny" },
  });
  return { demo: false as const, url: session.url!, sessionId: session.id };
}

export async function createCheckoutSession(origin: string, locale: Locale = "en", payCurrency: "cny" | "usd" = "usd") {
  const product = getStripeProductCopy(locale);
  const stripe = getStripe();

  if (!stripe) {
    return {
      demo: true as const,
      url: `${origin}/success?demo=true`,
    };
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: PRICE_USD,
          recurring: { interval: "month" },
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/join`,
    metadata: { product: "reddit-watch-monthly" },
  });

  return {
    demo: false as const,
    url: session.url!,
    sessionId: session.id,
  };
}
