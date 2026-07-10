import Stripe from "stripe";
import { getStripeProductCopy } from "./copy-app";
import { getLocale } from "./locale";
import type { Locale } from "./i18n-shared";
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

export const PRICE_USD = 990;


export const PRICE_CNY_MONTHLY = 6900;

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

export async function createCheckoutSession(origin: string, payCurrency: "cny" | "usd" = "usd") {
  if (payCurrency !== "cny") {
  const polarUrl = await resolvePolarCheckoutUrl(origin, { currency: payCurrency });
  if (polarUrl) {
    return { demo: false as const, url: polarUrl };
  }
}

  const stripe = getStripe();
  const locale = await getLocale();
  const product = getStripeProductCopy(locale);

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
          recurring: { interval: "month" },
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: PRICE_USD,
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/join`,
    metadata: { product: "meetup-host-monthly" },
  });

  return {
    demo: false as const,
    url: session.url!,
    sessionId: session.id,
  };
}
