#!/usr/bin/env node
/** Only count real checkout success — skip demo / bare /success visits. */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sitesDir = join(root, "sites");

const PURCHASE_BLOCK = `  useEffect(() => {
    fetch("/api/member/activate", { method: "POST" });
    const params = new URLSearchParams(window.location.search);
    const demo = isDemo || params.get("demo") === "true";
    const paid =
      !!sessionId ||
      params.get("polar") === "true" ||
      params.has("checkout_id");
    if (!demo && paid) {
      trackFactoryEvent(siteMeta.id, "purchase");
    }
  }, [isDemo, sessionId]);`;

let patched = 0;

for (const siteId of readdirSync(sitesDir)) {
  if (siteId === "factory-dashboard" || siteId.startsWith(".")) continue;
  const path = join(sitesDir, siteId, "components", "SuccessClient.tsx");
  if (!existsSync(path)) continue;

  let sc = readFileSync(path, "utf8");
  if (!sc.includes("trackFactoryEvent")) continue;

  sc = sc.replace(
    /  useEffect\(\(\) => \{[\s\S]*?trackFactoryEvent\(siteMeta\.id, "purchase"\);[\s\S]*?\}, \[[^\]]*\]\);/,
    PURCHASE_BLOCK
  );

  if (!sc.includes('params.get("polar")')) {
    sc = sc.replace(
      /  useEffect\(\(\) => \{[\s\S]*?trackFactoryEvent\(siteMeta\.id, "purchase"\);[\s\S]*?\}, \[\]\);/,
      PURCHASE_BLOCK
    );
  }

  if (sc.includes('params.get("polar")')) {
    writeFileSync(path, sc);
    patched++;
  }
}

console.log(`purchase tracking fixed: ${patched} sites`);
