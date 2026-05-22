"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type Faq = { q: string; a: string };

type Props = {
  items: Faq[];
  heading?: string;
  eyebrow?: string;
};

export function FaqSection({
  items,
  heading = "Ofte stillede spørgsmål",
  eyebrow = "FAQ",
}: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-neutral-bg py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-blue">
            {eyebrow}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            {heading}
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-slate-50"
                >
                  <span className="text-base font-semibold text-brand-dark md:text-lg">
                    {item.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${
                      isOpen ? "bg-brand-blue text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-slate-600 md:text-base">
                    {item.a}
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
