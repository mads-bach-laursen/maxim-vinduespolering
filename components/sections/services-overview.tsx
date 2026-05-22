import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/demo-content";

type Props = {
  eyebrow?: string;
  heading?: string;
  intro?: string;
};

export function ServicesOverview({
  eyebrow = "Vores ydelser",
  heading = "Vi løser dine udendørs rengøringsopgaver",
  intro = "Fra ugentlig vinduespolering til store sæsonopgaver – vi har værktøjet, erfaringen og forsikringen til at klare det hele.",
}: Props) {
  return (
    <section id="services" className="bg-neutral-bg py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-blue">
            {eyebrow}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">{intro}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-brand-dark">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {s.short}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                  Læs mere
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
