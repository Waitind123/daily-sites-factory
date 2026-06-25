import { cn } from "@/lib/cn";

export function SectionHeading({
  label,
  title,
  description,
  className,
}: {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 text-center", className)}>
      {label && <p className="nuwa-label mb-3 text-indigo-400">{label}</p>}
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-3 max-w-2xl text-zinc-400">{description}</p>
      )}
    </div>
  );
}
