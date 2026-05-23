import Image from "next/image";
import { Check, Phone } from "lucide-react";
import { ownerStory, company } from "@/lib/demo-content";

export function OwnerStory() {
  return (
    <section id="mod-thomas" className="bg-neutral-bg py-20 md:py-28">
      <div className="mx-auto grid max-w-page gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:items-center lg:px-8">
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-blue">
            {ownerStory.label}
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-brand-dark md:text-4xl lg:text-5xl">
            {ownerStory.headline}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 md:text-lg">
            {ownerStory.body}
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {ownerStory.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-blue/15 text-brand-blue">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-brand-dark">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-dark px-7 py-4 text-sm font-semibold text-white transition hover:bg-brand-darker"
            >
              <Phone className="h-4 w-4" /> Ring {company.phone}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-200 shadow-2xl">
            <Image
              src={ownerStory.image}
              alt="Thomas, ejer af Maxim Vinduespolering"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-blue/15 text-2xl font-black text-brand-blue">
                10+
              </div>
              <div>
                <div className="text-sm font-bold text-brand-dark">
                  Års erfaring
                </div>
                <div className="text-xs text-slate-500">
                  i Midt- og Østjylland
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
