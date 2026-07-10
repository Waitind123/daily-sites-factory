import {
  calculateCarbon,
  type CalcInput,
  type TransportMode,
  type GridRegion,
  TRANSPORT_FACTORS,
} from "./calculator";

export type EmployeeEntry = {
  id: string;
  name: string;
  commuteKm: number;
  officeDaysPerWeek: number;
  transportMode: TransportMode;
  gridRegion: GridRegion;
};

export type EmployeeResult = EmployeeEntry & {
  annualKg: number;
  commuteKg: number;
  homeEnergyKg: number;
};

export type TeamCommuteResult = {
  totalAnnualKg: number;
  employeeCount: number;
  avgKgPerEmployee: number;
  byTransport: Array<{ mode: TransportMode; kg: number; count: number }>;
  employees: EmployeeResult[];
  csrdCategory: "Scope 3 Category 7 — Employee Commuting";
  reportingYear: number;
  hybridSavingsKg: number;
  hybridSavingsPercent: number;
};

export function calculateTeamCommute(
  employees: EmployeeEntry[],
  scenarioLabel: string
): TeamCommuteResult {
  const results: EmployeeResult[] = employees.map((emp) => {
    const input: CalcInput = {
      commuteKm: emp.commuteKm,
      officeDaysPerWeek: emp.officeDaysPerWeek,
      transportMode: emp.transportMode,
      gridRegion: emp.gridRegion,
    };
    const calc = calculateCarbon(input, {
      current: scenarioLabel,
      fullOffice: "Full office",
      fullRemote: "Fully remote",
    });
    return {
      ...emp,
      annualKg: calc.current.annualKg,
      commuteKg: calc.current.commuteKg,
      homeEnergyKg: calc.current.homeEnergyKg,
    };
  });

  const totalAnnualKg = results.reduce((sum, e) => sum + e.annualKg, 0);
  const fullOfficeTotal = employees.reduce((sum, emp) => {
    const calc = calculateCarbon({
      commuteKm: emp.commuteKm,
      officeDaysPerWeek: 5,
      transportMode: emp.transportMode,
      gridRegion: emp.gridRegion,
    });
    return sum + calc.fullOffice.annualKg;
  }, 0);

  const transportMap = new Map<TransportMode, { kg: number; count: number }>();
  for (const emp of results) {
    const prev = transportMap.get(emp.transportMode) ?? { kg: 0, count: 0 };
    transportMap.set(emp.transportMode, {
      kg: prev.kg + emp.annualKg,
      count: prev.count + 1,
    });
  }

  const byTransport = Array.from(transportMap.entries())
    .map(([mode, data]) => ({ mode, ...data }))
    .sort((a, b) => b.kg - a.kg);

  const hybridSavingsKg = fullOfficeTotal - totalAnnualKg;
  const hybridSavingsPercent =
    fullOfficeTotal > 0 ? Math.round((hybridSavingsKg / fullOfficeTotal) * 100) : 0;

  return {
    totalAnnualKg,
    employeeCount: employees.length,
    avgKgPerEmployee:
      employees.length > 0 ? Math.round(totalAnnualKg / employees.length) : 0,
    byTransport,
    employees: results,
    csrdCategory: "Scope 3 Category 7 — Employee Commuting",
    reportingYear: new Date().getFullYear(),
    hybridSavingsKg,
    hybridSavingsPercent,
  };
}

export function defaultEmployees(): EmployeeEntry[] {
  return [
    {
      id: "1",
      name: "Alex",
      commuteKm: 12,
      officeDaysPerWeek: 2,
      transportMode: "subway",
      gridRegion: "eu",
    },
    {
      id: "2",
      name: "Sam",
      commuteKm: 25,
      officeDaysPerWeek: 3,
      transportMode: "car",
      gridRegion: "eu",
    },
    {
      id: "3",
      name: "Jordan",
      commuteKm: 0,
      officeDaysPerWeek: 0,
      transportMode: "walk",
      gridRegion: "eu",
    },
  ];
}

export { TRANSPORT_FACTORS };
