import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/demo-content";

type Props = {
  eyebrow?: string;
  heading?: string;
  intro?: string;
};

// Hero-services: vinduespolering split i to "metoder" som hos konkurrenten
const heroServices = [
  {
    slug: "vinduespolering",
    title: "Vinduesvask med rentvands-anlæg",
    short:
      "En moderne løsning, der vasker glas og rammer med kalkfrit vand. Ideel til udvendige vinduer i højden og store flader, hvor et flot og stribefrit resultat ønskes.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "vinduespolering",
    title: "Traditionel vinduespudsning",
    short:
      "Den klassiske løsning med skraber og aftørring af kanter og rammer. Perfekt til både indvendige og udvendige vinduer, der kræver et skarpt og professionelt resultat.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=85",
  },
];

export function ServicesOverview({
  eyebrow,
  heading,
  intro,
}: Props) {
  // De 5 ekstra services (alt undtagen den primære vinduespolering der vises ovenfor)
  const otherServices = services.filter((s) => s.slug !== "vinduespolering");

  return (
    <section id="services" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        {(eyebrow || heading || intro) && (
          <div className="mb-12 max-w-2xl lg:pr-[500px]">
            {eyebrow && (
              <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-blue">
                {eyebrow}
              </div>
            )}
            {heading && (
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
                {heading}
              </h2>
            )}
            {intro && (
              <p className="mt-4 text-base text-slate-600 md:text-lg">{intro}</p>
            )}
          </div>
        )}

        {/* To store hero-services – får højre-padding så de holder sig væk fra
            den floating tilbudsformular der overlapper fra hero-sektionen */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:pr-[500px]">
          {heroServices.map((s, i) => (
            <Link
              key={i}
              href={`/services/${s.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <h3 className="mt-5 text-xl font-bold text-brand-dark md:text-2xl">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                {s.short}
              </p>
            </Link>
          ))}
        </div>

        {/* 5 mindre service-cards */}
        <div className="mt-16">
          <h3 className="mb-6 text-lg font-bold text-brand-dark md:text-xl">
            Vi tilbyder også
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl bg-neutral-bg ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[5/3] overflow-hidden bg-slate-200">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h4 className="mb-1 text-sm font-bold text-brand-dark">
                    {s.title}
                  </h4>
                  <p className="line-clamp-2 text-xs leading-relaxed text-slate-600">
                    {s.short}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-blue">
                    Læs mere
                    <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
