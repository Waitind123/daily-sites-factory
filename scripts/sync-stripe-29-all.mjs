#!/usr/bin/env node
/**
 * 全站 Stripe：$29/月 + 统一价格常量
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pricing = JSON.parse(
  readFileSync(join(root, "config/stripe-pricing.json"), "utf8")
);

const { usdMonthlyCents, cnyMonthlyFen, usdDisplay, cnyDisplay, usdPerMonth, cnyPerMonth } =
  pricing;

function walk(dir, acc = []) {
  for (const ent of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
}

function siteDirs() {
  return readdirSync(join(root, "sites"), { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== "factory-dashboard")
    .map((d) => d.name);
}

function patchStripePrices(path) {
  if (!existsSync(path)) return false;
  let s = readFileSync(path, "utf8");
  const before = s;
  s = s.replace(/export const PRICE_USD_MONTHLY = \d+;/g, `export const PRICE_USD_MONTHLY = ${usdMonthlyCents};`);
  s = s.replace(/export const PRICE_USD = \d+;/g, `export const PRICE_USD = ${usdMonthlyCents};`);
  s = s.replace(/export const PRICE_CNY_MONTHLY = \d+;/g, `export const PRICE_CNY_MONTHLY = ${cnyMonthlyFen};`);
  if (s === before) return false;
  writeFileSync(path, s);
  return true;
}

function removePolarBeforeStripe(path) {
  if (!existsSync(path)) return false;
  let s = readFileSync(path, "utf8");
  if (!s.includes("resolvePolarCheckoutUrl")) return false;

  const polarBlockUsd = /  if \(payCurrency !== "cny"\) \{\n    const polarUrl = await resolvePolarCheckoutUrl\(origin, \{ currency: payCurrency \}\);\n    if \(polarUrl\) \{\n      return \{ demo: false as const, url: polarUrl \};\n    \}\n  \}\n\n/g;
  const polarBlockCurrency = /  if \(currency !== "cny"\) \{\n    const polarUrl = await resolvePolarCheckoutUrl\(origin, \{ currency \}\);\n    if \(polarUrl\) \{\n      return \{ demo: false as const, url: polarUrl \};\n    \}\n  \}\n\n/g;
  const polarBlockPlan = /  if \(payCurrency !== "cny"\) \{\n  const polarUrl = await resolvePolarCheckoutUrl\(origin, \{ currency: payCurrency \}\);\n  if \(polarUrl\) \{\n    return \{ demo: false as const, url: polarUrl \};\n  \}\n\}\n\n/g;

  const before = s;
  s = s.replace(polarBlockUsd, "");
  s = s.replace(polarBlockCurrency, "");
  s = s.replace(polarBlockPlan, "");

  // zapier-style malformed indent
  s = s.replace(
    /  if \(payCurrency !== "cny"\) \{\n  const polarUrl = await resolvePolarCheckoutUrl\(origin, \{ currency: payCurrency \}\);\n  if \(polarUrl\) \{\n    return \{ demo: false as const, url: polarUrl \};\n  \}\n\}\n\n/g,
    ""
  );

  if (s === before) return false;
  writeFileSync(path, s);
  return true;
}

function patchTextFile(path) {
  if (!existsSync(path)) return false;
  if (!/\.(ts|tsx|md|json)$/.test(path)) return false;
  if (path.includes("node_modules") || path.includes(".next")) return false;
  let s = readFileSync(path, "utf8");
  const before = s;

  const pairs = [
    ["$9.9/mo", usdPerMonth],
    ["$9.9/月", "$29/月"],
    ["Subscribe · $9.9/mo", `Subscribe · ${usdPerMonth}`],
    ["订阅 · $9.9/月", "订阅 · $29/月"],
    ["Subscribe · $9.9", `Subscribe · ${usdDisplay}`],
    ["订阅 · $9.9", "订阅 · $29"],
    ["Join · $9.9/yr", `Join · ${usdPerMonth}`],
    ["$9.9/月一口价", "$29/月一口价"],
    ["$9.9/月 flat", "$29/mo flat"],
    ["$9.9/月 一口价", "$29/月 一口价"],
    ['stat: "$9.9"', `stat: "${usdDisplay}"`],
    ["¥69/月", cnyPerMonth],
    ['"¥69/月"', `"${cnyPerMonth}"`],
    ['"¥69"', `"${cnyDisplay}"`],
    ["$9.9", usdDisplay],
    ['price: "$9.9/mo"', `price: "${usdPerMonth}"`],
    ["amount: 9.9", "amount: 29"],
    ['label: "$9.9/月"', 'label: "$29/月"'],
    ["限时 $9.9/月", `限时 ${usdPerMonth}`],
    ["$9.9/mo: AI", `${usdPerMonth}: AI`],
    ['joinCta: "Subscribe · $9.9/mo"', `joinCta: "Subscribe · ${usdPerMonth}"`],
    ['joinCta: "订阅 · $9.9/月"', 'joinCta: "订阅 · $29/月"'],
    ["$99/yr", usdPerMonth],
    ["$99/year", usdPerMonth],
    ["¥699/年", cnyPerMonth],
  ];

  for (const [from, to] of pairs) {
    if (s.includes(from)) s = s.split(from).join(to);
  }

  if (s === before) return false;
  writeFileSync(path, s);
  return true;
}

const paymentSites = [];
let stripePatched = 0;
let polarRemoved = 0;
let textPatched = 0;

for (const siteId of siteDirs()) {
  const stripePath = join(root, "sites", siteId, "lib/stripe.ts");
  const checkoutPath = join(root, "sites", siteId, "app/api/checkout/route.ts");

  if (existsSync(stripePath)) {
    paymentSites.push(siteId);
    if (patchStripePrices(stripePath)) stripePatched++;
    if (removePolarBeforeStripe(stripePath)) polarRemoved++;
  }

  if (existsSync(checkoutPath)) patchTextFile(checkoutPath);

  for (const sub of ["lib", "app", "components"]) {
    const dir = join(root, "sites", siteId, sub);
    if (!existsSync(dir)) continue;
    for (const file of walk(dir)) {
      if (patchTextFile(file)) textPatched++;
    }
  }

  const readme = join(root, "sites", siteId, "README.md");
  if (existsSync(readme) && patchTextFile(readme)) textPatched++;
}

for (const file of walk(join(root, "templates"))) {
  if (patchTextFile(file)) textPatched++;
}

patchTextFile(join(root, "docs/STRIPE-SETUP.md"));
patchTextFile(join(root, "docs/PAYMENTS-NO-COMPANY.md"));

writeFileSync(
  join(root, "scripts/sites-payment-enabled.json"),
  JSON.stringify(paymentSites.sort(), null, 2) + "\n"
);

console.log(`\n✓ Stripe $29/mo 全站同步`);
console.log(`  支付站点: ${paymentSites.length}`);
console.log(`  stripe 价格更新: ${stripePatched}`);
console.log(`  移除 Polar 优先: ${polarRemoved}`);
console.log(`  文案更新: ${textPatched} 文件\n`);
