#!/usr/bin/env node
/** Inject FixedContactBar into site layouts that use SiteFooter. */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { join } from "path";

const ROOT = join(import.meta.dirname, "..");
const sitesDir = join(ROOT, "sites");

function patchLayout(siteDir) {
  const layoutPath = join(siteDir, "app/layout.tsx");
  if (!existsSync(layoutPath)) return false;
  let s = readFileSync(layoutPath, "utf8");
  if (s.includes("FixedContactBar")) return false;

  if (!s.includes('from "@/components/FixedContactBar"')) {
    if (s.includes('from "@/components/AnalyticsBeacon"')) {
      s = s.replace(
        'import { AnalyticsBeacon } from "@/components/AnalyticsBeacon";',
        'import { AnalyticsBeacon } from "@/components/AnalyticsBeacon";\nimport { FixedContactBar } from "@/components/FixedContactBar";'
      );
    } else if (s.includes('from "@/components/SiteShell"')) {
      s = s.replace(
        'import { SiteFooter, SiteHeader } from "@/components/SiteShell";',
        'import { SiteFooter, SiteHeader } from "@/components/SiteShell";\nimport { FixedContactBar } from "@/components/FixedContactBar";'
      );
    } else {
      return false;
    }
  }

  if (s.includes("</body>") && !s.includes("<FixedContactBar")) {
    s = s.replace(
      /<\/body>/,
      `        <FixedContactBar locale={locale} />\n      </body>`
    );
  }

  if (s.includes('className={`${inter.variable}') && !s.includes("pb-11")) {
    s = s.replace(
      /(className=\{`\$\{inter\.variable\}[^`]*)(`)/,
      (m, head, tail) => (head.includes("pb-") ? m : `${head} pb-11${tail}`)
    );
  }

  writeFileSync(layoutPath, s);
  return true;
}

let patched = 0;
for (const siteId of readdirSync(sitesDir)) {
  if (siteId.startsWith(".") || siteId === "factory-dashboard") continue;
  if (patchLayout(join(sitesDir, siteId))) patched++;
}
console.log(`FixedContactBar injected into ${patched} layouts`);
