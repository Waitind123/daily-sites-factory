#!/usr/bin/env node
/** List Polar products (copy Product ID into POLAR_PRODUCT_ID secret). */
const token = process.env.POLAR_ACCESS_TOKEN;
if (!token) {
  console.error("Set POLAR_ACCESS_TOKEN");
  process.exit(1);
}

const res = await fetch("https://api.polar.sh/v1/products/?limit=20", {
  headers: { Authorization: `Bearer ${token}` },
});
if (!res.ok) {
  console.error(res.status, await res.text());
  process.exit(1);
}
const data = await res.json();
const items = data.items ?? data.results ?? data;
for (const p of items) {
  console.log(`${p.name}\n  id: ${p.id}\n  price: ${p.prices?.[0]?.price_amount ?? "?"}\n`);
}
