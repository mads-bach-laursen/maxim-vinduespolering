"use client";

import Image from "next/image";
import { useState } from "react";
import { Send, Lock, Clock } from "lucide-react";
import { services } from "@/lib/demo-content";

type Props = {
  defaultPostal?: string;
  cityContext?: string;
  variant?: "floating" | "section";
};

export function ContactForm({
  defaultPostal = "",
  cityContext,
  variant = "floating",
}: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  }

  const isFloating = variant === "floating";

  return (
    <div
      className={
        isFloating
          ? "relative rounded-2xl bg-white p-6 pt-16 shadow-2xl ring-1 ring-black/5 md:p-8 md:pt-20"
          : "relative rounded-2xl bg-white p-6 pt-16 shadow-xl ring-1 ring-black/5 md:p-8 md:pt-20"
      }
    >
      {/* Thomas-billede der "stikker ud" */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-lg">
          <Image
            src="https://i.pravatar.cc/200?img=68"
            alt="Thomas"
            fill
            sizes="96px"
            className="object-cover"
            unoptimized
          />
        </div>
        <span className="absolute right-1 bottom-1 h-4 w-4 rounded-full border-2 border-white bg-success" />
      </div>

      {submitted ? (
        <div className="py-8 text-center">
          <div className="mb-3 text-2xl">🎉</div>
          <h3 className="mb-2 text-xl font-bold text-brand-dark">
            Tak for din forespørgsel!
          </h3>
          <p className="text-sm text-slate-600">
            Thomas vender personligt tilbage til dig inden for 24 timer.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-5 sm:pl-32">
            <h3 className="mb-1 text-xl font-bold text-brand-dark md:text-2xl">
              Få et GRATIS tilbud inden for 24 timer
            </h3>
            <p className="text-sm text-slate-600">Priser fra 90 kr. inkl. moms</p>
            <p className="mt-3 text-sm italic text-slate-700">
              &ldquo;Hej, jeg er Thomas – send mig dine oplysninger, så vender
              jeg tilbage personligt.&rdquo;
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-3">
            {cityContext && (
              <input type="hidden" name="cityContext" value={cityContext} />
            )}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                required
                name="name"
                placeholder="Navn *"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              />
              <input
                required
                name="phone"
                type="tel"
                placeholder="Telefon *"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>
            <input
              required
              name="email"
              type="email"
              placeholder="E-mail *"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-[120px_1fr]">
              <input
                required
                name="postal"
                defaultValue={defaultPostal}
                placeholder="Postnr. *"
                maxLength={4}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              />
              <input
                name="address"
                placeholder="Vejnavn og nr."
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>
            <select
              name="service"
              defaultValue=""
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            >
              <option value="" disabled>
                Vælg service (valgfri)
              </option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.title}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              rows={3}
              placeholder="Besked (valgfri)"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            />

            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-cta px-6 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-cta-dark disabled:opacity-60"
            >
              {submitting ? (
                "Sender..."
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send mig et tilbud
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 pt-1 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> Svar inden for 24t
              </span>
              <span className="flex items-center gap-1">
                <Lock className="h-3 w-3" /> GDPR-sikret
              </span>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
