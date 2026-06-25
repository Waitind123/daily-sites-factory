"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { SectionHeading } from "./SectionHeading";

type FaqItem = { question: string; answer: string };

export function FaqAccordion({
  items,
  title = "常见问题",
  label = "FAQ",
}: {
  items: FaqItem[];
  title?: string;
  label?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading label={label} title={title} />
        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className="card-glow overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-start gap-4 p-5 text-left transition-colors hover:bg-white/[0.02]"
                >
                  <span className="font-mono text-sm text-indigo-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-medium text-white">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "text-zinc-500 transition-transform duration-200",
                      isOpen && "rotate-45"
                    )}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-white/10 px-5 pb-5 pt-4 pl-14 text-sm text-zinc-400">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
