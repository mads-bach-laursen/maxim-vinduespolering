import Image from "next/image";
import { ContactForm } from "@/components/forms/contact-form";
import { stats } from "@/lib/demo-content";

type Props = {
  title?: string;
  subtitle?: string;
  postal?: string;
  cityContext?: string;
};

function GoogleReviewsPill() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-md">
      <svg className="h-5 w-5" viewBox="0 0 48 48" aria-hidden>
        <path
          fill="#4285f4"
          d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
        />
        <path
          fill="#34a853"
          d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
        />
        <path
          fill="#fbbc04"
          d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
        />
        <path
          fill="#ea4335"
          d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
        />
      </svg>
      <div className="leading-tight">
        <div className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-900">
          <span>5,0</span>
          <span className="flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg
                key={i}
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="#fbbc04"
                aria-hidden
              >
                <path d="M10 1.5l2.6 5.7 6.2.6-4.7 4.3 1.4 6.1L10 15l-5.5 3.2 1.4-6.1L1.2 7.8l6.2-.6L10 1.5z" />
              </svg>
            ))}
          </span>
        </div>
        <div className="text-[11px] text-slate-500">Google Reviews</div>
      </div>
    </div>
  );
}

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
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/85 via-brand-darker/55 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-16 pb-24 sm:px-6 md:pt-20 md:pb-28 lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:pt-28 lg:pb-32 lg:px-8">
        <div className="text-white">
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/90 md:text-xl">
            {subtitle}
          </p>

          {/* Trust bar */}
          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
            <GoogleReviewsPill />
            <div className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white md:text-3xl">
                    {s.value}
                  </div>
                  <div className="text-[11px] leading-tight text-white/75">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating form + van image */}
        <div className="relative lg:pl-6">
          {/* Thomas-billede stikker ud øverst-venstre (placeholder indtil rigtigt van-foto) */}
          <div className="pointer-events-none absolute -top-10 -left-4 z-10 hidden sm:block md:-top-14 md:-left-8 lg:-top-16 lg:-left-12">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-2xl md:h-32 md:w-32 lg:h-36 lg:w-36">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400&q=85"
                alt="Thomas, ejer af Maxim"
                fill
                sizes="144px"
                className="object-cover"
                unoptimized
              />
              <span className="absolute right-2 bottom-2 h-4 w-4 rounded-full border-2 border-white bg-success" />
            </div>
          </div>
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
