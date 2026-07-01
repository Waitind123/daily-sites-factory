/** @sync sites/intercom-pulse/lib/analytics-real-users.ts */

const EXACT_TEST_IDS = new Set(["ci-prod-smoke", "ci-local-smoke", "bootstrap-probe"]);

const TEST_ID_PATTERNS = [
  /^profile-demo/i,
  /^e2e[-_]/i,
  /^prod-test[-_]/i,
  /^refresh-test[-_]/i,
  /^deploy-verify[-_]/i,
  /^final-refresh[-_]/i,
  /^cachebust[-_]/i,
  /^retry[-_]/i,
  /^prove[-_]/i,
  /^smoke[-_]/i,
  /^test[-_]/i,
];

export function isTestVisitor(visitorId) {
  const id = String(visitorId || "").trim();
  if (!id) return false;
  if (EXACT_TEST_IDS.has(id)) return true;
  return TEST_ID_PATTERNS.some((re) => re.test(id));
}
