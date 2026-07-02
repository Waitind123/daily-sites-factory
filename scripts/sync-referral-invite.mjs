#!/usr/bin/env node
/**
 * 全站同步邀请码奖励系统
 * 用法: node scripts/sync-referral-invite.mjs [site-id ...]
 */
import {
  readFileSync,
  writeFileSync,
  existsSync,
  readdirSync,
  mkdirSync,
  copyFileSync,
  statSync,
} from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const tpl = join(root, "templates", "referral-invite");
const factoryTrial = join(root, "factory-lib", "trial-core.ts");
const factoryReferralServer = join(root, "factory-lib", "referral-server.ts");
const factoryReferralClient = join(root, "factory-lib", "referral-client.ts");

const filter = process.argv.slice(2);
const skip = new Set(["factory-dashboard"]);

function siteIds() {
  return readdirSync(join(root, "sites")).filter((id) => {
    if (skip.has(id) || id.startsWith(".")) return false;
    if (filter.length && !filter.includes(id)) return false;
    return statSync(join(root, "sites", id)).isDirectory();
  });
}

function ensureTrialWrapper(siteId) {
  const path = join(root, "sites", siteId, "lib", "trial.ts");
  if (!existsSync(path)) return;
  let src = readFileSync(path, "utf8");
  if (!src.includes("getTrialInfo")) {
    const wrapper = `import {
  FREE_TRIAL_LIMIT,
  getTrialStatus,
  consumeTrial,
  getTrialCookieName,
} from "./trial-core";

export const SITE_ID = "${siteId}";

export { FREE_TRIAL_LIMIT, getTrialCookieName };

export async function getTrialInfo(isMember: boolean) {
  return getTrialStatus(SITE_ID, isMember);
}

export async function useTrial(isMember: boolean) {
  return consumeTrial(SITE_ID, isMember);
}

export { getTrialStatus, consumeTrial, incrementTrial } from "./trial-core";

export async function recordTrialUse() {
  const { incrementTrial } = await import("./trial-core");
  const result = await incrementTrial(SITE_ID);
  if (result.wasFirstTrial) {
    const { reportReferralTrialComplete } = await import("./referral-server");
    await reportReferralTrialComplete(SITE_ID);
  }
  return result;
}
`;
    writeFileSync(path, wrapper);
    return;
  }
  patchRecordTrialUse(siteId);
}

function patchRecordTrialUse(siteId) {
  const path = join(root, "sites", siteId, "lib", "trial.ts");
  if (!existsSync(path)) return false;
  let src = readFileSync(path, "utf8");
  if (src.includes("reportReferralTrialComplete")) return false;
  if (!src.includes("recordTrialUse")) return false;

  src = src.replace(
    /export async function recordTrialUse\(\) \{[\s\S]*?\n\}/,
    `export async function recordTrialUse() {
  const { incrementTrial } = await import("./trial-core");
  const result = await incrementTrial(SITE_ID);
  if (result.wasFirstTrial) {
    const { reportReferralTrialComplete } = await import("./referral-server");
    await reportReferralTrialComplete(SITE_ID);
  }
  return result;
}`
  );
  writeFileSync(path, src);
  return true;
}

function patchLayout(siteId) {
  for (const rel of ["app/layout.tsx", "app/(product)/layout.tsx"]) {
    const path = join(root, "sites", siteId, rel);
    if (!existsSync(path)) continue;
    let src = readFileSync(path, "utf8");
    if (src.includes("ReferralCapture")) return false;

    if (!src.includes('from "@/components/ReferralCapture"')) {
      src = src.replace(
        /(import.*AnalyticsBeacon.*\n)/,
        `$1import { ReferralCapture } from "@/components/ReferralCapture";\n`
      );
    }
    if (src.includes("<AnalyticsBeacon")) {
      src = src.replace(
        /<AnalyticsBeacon([^/]*)\/>/,
        `<AnalyticsBeacon$1/>\n        <ReferralCapture siteId={siteMeta.id} />`
      );
    } else if (src.includes("<SiteHeader")) {
      src = src.replace(
        /<SiteHeader([^/]*)\/>/,
        `<SiteHeader$1/>\n        <ReferralCapture siteId={siteMeta.id} />`
      );
    } else {
      continue;
    }
    writeFileSync(path, src);
    return true;
  }
  return false;
}

function patchJoinPage(siteId) {
  const path = join(root, "sites", siteId, "app", "join", "page.tsx");
  if (!existsSync(path)) return false;
  let src = readFileSync(path, "utf8");
  if (src.includes("InviteReferralCard")) return false;

  if (!src.includes('from "@/components/InviteReferralCard"')) {
    src = src.replace(
      /^(import )/m,
      `import { InviteReferralCard } from "@/components/InviteReferralCard";\n$1`
    );
  }
  if (!src.includes("siteMeta")) {
    src = src.replace(
      /(import.*from "@\/lib\/locale";\n)/,
      `$1import { siteMeta } from "@/lib/site-meta";\n`
    );
  }

  if (src.includes("<SharePromoKit")) {
    src = src.replace(
      /<div className="mt-8">\s*\n\s*<SharePromoKit/,
      `<div className="mt-8">
        <InviteReferralCard siteId={siteMeta.id} locale={locale} />
      </div>

      <div className="mt-8">
        <SharePromoKit`
    );
  } else {
    src = src.replace(
      /<\/div>\n  \);\n\}$/,
      `      <div className="mt-8">
        <InviteReferralCard siteId={siteMeta.id} locale={locale} />
      </div>
    </div>
  );
}`
    );
  }

  writeFileSync(path, src);
  return true;
}

let synced = 0;
for (const siteId of siteIds()) {
  const libDir = join(root, "sites", siteId, "lib");
  const compDir = join(root, "sites", siteId, "components");
  mkdirSync(libDir, { recursive: true });
  mkdirSync(compDir, { recursive: true });

  copyFileSync(factoryTrial, join(libDir, "trial-core.ts"));
  copyFileSync(factoryReferralServer, join(libDir, "referral-server.ts"));
  copyFileSync(factoryReferralClient, join(libDir, "referral-client.ts"));

  writeFileSync(
    join(compDir, "ReferralCapture.tsx"),
    `"use client";

import { useEffect } from "react";
import { captureInviteFromUrl, getVisitorId } from "@/lib/referral-client";

export function ReferralCapture({ siteId }: { siteId: string }) {
  useEffect(() => {
    getVisitorId();
    captureInviteFromUrl(siteId);
  }, [siteId]);
  return null;
}
`
  );
  writeFileSync(join(compDir, "InviteReferralCard.tsx"), readFileSync(join(tpl, "components", "InviteReferralCard.tsx"), "utf8"));

  const captureDir = join(root, "sites", siteId, "app", "api", "referral", "capture");
  mkdirSync(captureDir, { recursive: true });
  const captureRoute = readFileSync(join(tpl, "app/api/referral/capture/route.ts"), "utf8")
    .replace(/__SITE_ID__/g, siteId);
  writeFileSync(join(captureDir, "route.ts"), captureRoute);

  const trialRouteDir = join(root, "sites", siteId, "app", "api", "trial");
  if (existsSync(join(trialRouteDir, "route.ts"))) {
    const trialRoute = readFileSync(join(tpl, "app/api/trial/route.ts"), "utf8")
      .replace(/__SITE_ID__/g, siteId);
    writeFileSync(join(trialRouteDir, "route.ts"), trialRoute);
  }

  // Ensure trial wrapper + referral reporting
  ensureTrialWrapper(siteId);

  patchLayout(siteId);
  patchJoinPage(siteId);
  synced++;
  console.log(`  ✓ ${siteId}`);
}

console.log(`\n✓ 邀请奖励系统已同步 ${synced} 站\n`);
