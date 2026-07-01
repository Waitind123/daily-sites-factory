#!/usr/bin/env node
/** Copy polar-checkout.ts to all sites and wire stripe.ts to API-based URLs. */
import { readFileSync, writeFileSync, readdirSync, existsSync, copyFileSync } from "fs";
import { join } from "path";

const ROOT = join(import.meta.dirname, "..");
const TEMPLATE = join(ROOT, "factory-lib/polar-checkout.ts");

function siteDirs() {
  return readdirSync(join(ROOT, "sites"), { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== "factory-dashboard")
    .map((d) => d.name);
}

let copied = 0;
let patched = 0;

for (const siteId of siteDirs()) {
  const libDir = join(ROOT, "sites", siteId, "lib");
  if (!existsSync(libDir)) continue;
  copyFileSync(TEMPLATE, join(libDir, "polar-checkout.ts"));
  copied++;

  const stripePath = join(libDir, "stripe.ts");
  if (!existsSync(stripePath)) continue;
  let s = readFileSync(stripePath, "utf8");
  if (!s.includes('from "./polar-checkout"')) {
    const importBlock = s.match(/^(import[^\n]+\n)+/);
    if (importBlock) {
      s = s.replace(importBlock[0], `${importBlock[0]}import { resolvePolarCheckoutUrl } from "./polar-checkout";\n`);
    } else {
      s = `import { resolvePolarCheckoutUrl } from "./polar-checkout";\n${s}`;
    }
  }
  if (s.includes("const polarUrl = POLAR_CHECKOUT_URL")) {
    s = s.replace(
      /const polarUrl = POLAR_CHECKOUT_URL;/g,
      "const polarUrl = await resolvePolarCheckoutUrl(origin);"
    );
    patched++;
  }
  writeFileSync(stripePath, s);
}

console.log(`polar-checkout.ts copied: ${copied}, stripe patched: ${patched}`);
