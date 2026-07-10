import type { Locale } from "@/lib/i18n-shared";

type FeatureItem = {
  readonly icon: string;
  readonly title: string;
  readonly desc: string;
};

export { CheckoutButton } from "./CheckoutButton";

export function FeatureGrid({ features }: { features: readonly FeatureItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {features.map((f) => (
        <div key={f.title} className="rounded-xl border border-border bg-surface p-5">
          <div className="text-2xl mb-2">{f.icon}</div>
          <h3 className="font-semibold text-foreground">{f.title}</h3>
          <p className="mt-1 text-sm text-muted">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

const difficultyColors: Record<string, Record<Locale, string>> = {
  low: {
    en: "bg-green-100 text-green-700",
    zh: "bg-green-100 text-green-700",
  },
  medium: {
    en: "bg-amber-100 text-amber-700",
    zh: "bg-amber-100 text-amber-700",
  },
  high: {
    en: "bg-red-100 text-red-700",
    zh: "bg-red-100 text-red-700",
  },
};

const difficultyLabels: Record<string, Record<Locale, string>> = {
  low: { en: "Low", zh: "低" },
  medium: { en: "Medium", zh: "中" },
  high: { en: "High", zh: "高" },
};

const difficultyKey: Record<string, keyof typeof difficultyLabels> = {
  低: "low",
  中: "medium",
  高: "high",
  Low: "low",
  Medium: "medium",
  High: "high",
};

export function DifficultyBadge({
  difficulty,
  locale,
}: {
  difficulty: string;
  locale: Locale;
}) {
  const key = difficultyKey[difficulty] || "medium";
  const label = difficultyLabels[key][locale];
  const colors = difficultyColors[key][locale];
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors}`}>
      {locale === "en" ? `Difficulty ${label}` : `难度 ${label}`}
    </span>
  );
}
