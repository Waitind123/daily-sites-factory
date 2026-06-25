"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function RotatingText({
  items,
  interval = 3000,
  className,
}: {
  items: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <span
      className={cn(
        "inline-block text-gradient transition-opacity duration-500",
        className
      )}
      key={index}
    >
      {items[index]}
    </span>
  );
}
