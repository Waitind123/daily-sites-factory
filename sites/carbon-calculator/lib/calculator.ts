export const TRANSPORT_FACTORS = {
  car: 0.21,
  bus: 0.089,
  subway: 0.041,
  ebike: 0.005,
  walk: 0,
} as const;

export type TransportMode = keyof typeof TRANSPORT_FACTORS;

export const TRANSPORT_LABELS: Record<TransportMode, string> = {
  car: "私家车",
  bus: "公交",
  subway: "地铁",
  ebike: "电动车",
  walk: "步行/骑行",
};

export const GRID_FACTORS = {
  cn: 0.57,
  us: 0.39,
  eu: 0.28,
  global: 0.47,
} as const;

export type GridRegion = keyof typeof GRID_FACTORS;

export const GRID_LABELS: Record<GridRegion, string> = {
  cn: "中国电网",
  us: "美国电网",
  eu: "欧盟电网",
  global: "全球平均",
};

const WEEKS_PER_YEAR = 48;
const OFFICE_ENERGY_KG_PER_DAY = 3.5;
const DEFAULT_HOME_KWH = 1.2;

export type CalcInput = {
  commuteKm: number;
  officeDaysPerWeek: number;
  transportMode: TransportMode;
  gridRegion: GridRegion;
  homeOfficeKwh?: number;
};

export type ScenarioResult = {
  label: string;
  annualKg: number;
  commuteKg: number;
  officeEnergyKg: number;
  homeEnergyKg: number;
};

export type CalcResult = {
  current: ScenarioResult;
  fullOffice: ScenarioResult;
  fullRemote: ScenarioResult;
  savingsVsOfficeKg: number;
  savingsVsOfficePercent: number;
  treesEquivalent: number;
  carKmEquivalent: number;
};

function scenario(
  label: string,
  officeDaysPerWeek: number,
  input: CalcInput
): ScenarioResult {
  const officeDays = officeDaysPerWeek * WEEKS_PER_YEAR;
  const remoteDays = (5 - officeDaysPerWeek) * WEEKS_PER_YEAR;
  const homeKwh = input.homeOfficeKwh ?? DEFAULT_HOME_KWH;
  const gridFactor = GRID_FACTORS[input.gridRegion];
  const commuteFactor = TRANSPORT_FACTORS[input.transportMode];

  const commuteKg = input.commuteKm * 2 * officeDays * commuteFactor;
  const officeEnergyKg = officeDays * OFFICE_ENERGY_KG_PER_DAY;
  const homeEnergyKg = remoteDays * homeKwh * gridFactor;

  return {
    label,
    annualKg: Math.round(commuteKg + officeEnergyKg + homeEnergyKg),
    commuteKg: Math.round(commuteKg),
    officeEnergyKg: Math.round(officeEnergyKg),
    homeEnergyKg: Math.round(homeEnergyKg),
  };
}

export function calculateCarbon(input: CalcInput): CalcResult {
  const clampedDays = Math.min(5, Math.max(0, input.officeDaysPerWeek));
  const safeInput = { ...input, officeDaysPerWeek: clampedDays };

  const current = scenario("当前混合办公", clampedDays, safeInput);
  const fullOffice = scenario("全勤通勤", 5, safeInput);
  const fullRemote = scenario("完全远程", 0, safeInput);

  const savingsVsOfficeKg = fullOffice.annualKg - current.annualKg;
  const savingsVsOfficePercent =
    fullOffice.annualKg > 0
      ? Math.round((savingsVsOfficeKg / fullOffice.annualKg) * 100)
      : 0;

  return {
    current,
    fullOffice,
    fullRemote,
    savingsVsOfficeKg,
    savingsVsOfficePercent,
    treesEquivalent: Math.round(savingsVsOfficeKg / 21),
    carKmEquivalent: Math.round(savingsVsOfficeKg / TRANSPORT_FACTORS.car),
  };
}
