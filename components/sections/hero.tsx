import Image from "next/image";
import { Star } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { stats } from "@/lib/demo-content";

type Props = {
  title?: string;
  subtitle?: string;
  postal?: string;
  cityContext?: string;
};

export function Hero({
  title = "Vinduespudser og vinduesvask i Midt- og Østjylland",
  subtitle = "Få et GRATIS uforpligtende tilbud. Priser fra 90 kr. inkl. moms. Vi kommer når vi siger det.",
  postal,
  cityContext,
}: Props) {
  return (
    <section id="kontakt" className="relative overflow-hidden bg-brand-dark">
      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=80"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-dark/85 to-brand-dark/40" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:gap-12 lg:py-32 lg:px-8">
        <div className="text-white">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-success" />
            Optager nye kunder i Midt- og Østjylland
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85 md:text-xl">
            {subtitle}
          </p>

          {/* Trust bar */}
          <div className="mt-10 inline-flex flex-col gap-5 rounded-2xl bg-white/10 p-5 backdrop-blur sm:flex-row sm:items-center sm:gap-8 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div>
                <div className="text-sm font-bold">5.0 / 5</div>
                <div className="text-xs text-white/70">Google Reviews</div>
              </div>
            </div>

            <div className="hidden h-12 w-px bg-white/20 sm:block" />

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-brand-blue">
                    {s.value}
                  </div>
                  <div className="text-[11px] leading-tight text-white/70">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating form */}
        <div className="relative lg:pl-4">
          <ContactForm
            variant="floating"
            defaultPostal={postal}
            cityContext={cityContext}
          />
        </div>
      </div>
    </section>
  );
}
