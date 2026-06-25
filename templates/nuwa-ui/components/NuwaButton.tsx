import { cn } from "@/lib/cn";

export function NuwaButton({
  children,
  className,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <button
      className={cn(
        "rounded-xl px-6 py-3.5 text-base font-semibold transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" &&
          "bg-indigo-600 text-white hover:bg-indigo-500",
        variant === "secondary" &&
          "border border-white/15 text-zinc-300 hover:border-white/30 hover:text-white",
        variant === "ghost" && "text-zinc-400 hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
