import { randomBytes } from "crypto";

export type ChurnReasonCategory =
  | "price"
  | "missing_feature"
  | "switched_competitor"
  | "not_using"
  | "support"
  | "bugs"
  | "other";

export type CancellationRecord = {
  id: string;
  customerEmail: string;
  mrrLost: number;
  reason: ChurnReasonCategory;
  freeText: string | null;
  createdAt: string;
};

const records = new Map<string, CancellationRecord>();

function randomId(): string {
  return randomBytes(6).toString("hex");
}

export function createCancellation(
  customerEmail: string,
  mrrLost: number,
  reason: ChurnReasonCategory,
  freeText?: string
): CancellationRecord {
  const record: CancellationRecord = {
    id: randomId(),
    customerEmail: customerEmail.trim().toLowerCase(),
    mrrLost: Math.round(mrrLost * 100) / 100,
    reason,
    freeText: freeText?.trim() || null,
    createdAt: new Date().toISOString(),
  };
  records.set(record.id, record);
  return record;
}

export function listCancellations(): CancellationRecord[] {
  return [...records.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getCancellationById(id: string): CancellationRecord | undefined {
  return records.get(id);
}

export function getChurnStats() {
  const all = listCancellations();
  const totalMrrLost = all.reduce((sum, r) => sum + r.mrrLost, 0);
  const byReason: Record<ChurnReasonCategory, number> = {
    price: 0,
    missing_feature: 0,
    switched_competitor: 0,
    not_using: 0,
    support: 0,
    bugs: 0,
    other: 0,
  };

  for (const r of all) {
    byReason[r.reason]++;
  }

  const topReason =
    all.length > 0
      ? (Object.entries(byReason).sort((a, b) => b[1] - a[1])[0][0] as ChurnReasonCategory)
      : null;

  const breakdown = Object.entries(byReason)
    .filter(([, count]) => count > 0)
    .map(([reason, count]) => ({
      reason: reason as ChurnReasonCategory,
      count,
      percent: Math.round((count / all.length) * 1000) / 10,
    }))
    .sort((a, b) => b.count - a.count);

  return {
    totalCancellations: all.length,
    totalMrrLost,
    topReason,
    breakdown,
  };
}
