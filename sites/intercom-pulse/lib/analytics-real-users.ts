/** 识别 CI / 脚本 / E2E 等非真实用户访客 ID */

const EXACT_TEST_IDS = new Set([
  "ci-prod-smoke",
  "ci-local-smoke",
  "bootstrap-probe",
]);

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

export function isTestVisitor(visitorId?: string | null): boolean {
  const id = String(visitorId || "").trim();
  if (!id) return false;
  if (EXACT_TEST_IDS.has(id)) return true;
  return TEST_ID_PATTERNS.some((re) => re.test(id));
}

export function filterRealVisitorIds(ids: Iterable<string>): string[] {
  return [...ids].filter((id) => !isTestVisitor(id));
}
