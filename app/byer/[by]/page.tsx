import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { cities } from "@/lib/demo-content";
import { CityLocationMap } from "@/components/sections/city-location-map";
import { findCityCoords } from "@/lib/map-data";

export function generateStaticParams() {
  return cities.filter((c) => c.slug !== "silkeborg").map((c) => ({ by: c.slug }));
}

export default async function CityStubPage({
  params,
}: {
  params: Promise<{ by: string }>;
}) {
  const { by } = await params;
  const city = cities.find((c) => c.slug === by);
  if (!city) notFound();

  const hasMap = !!findCityCoords(city.slug);

  return (
    <>
      {hasMap && (
        <CityLocationMap
          slug={city.slug}
          cityName={city.name}
          postal={city.postal}
        />
      )}
      <section className="min-h-[50vh] bg-neutral-bg py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-blue/15 px-4 py-1.5 text-sm font-medium text-brand-blue">
          <Clock className="h-4 w-4" /> Snart klar
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-brand-dark md:text-5xl">
          Vinduespudser i {city.name}
        </h1>
        <p className="mt-4 text-base text-slate-600 md:text-lg">
          Vi dækker {city.name} ({city.postal}) som en del af vores faste ruter i
          Midt- og Østjylland. Den fulde lokalside er på vej – i mellemtiden er du
          mere end velkommen til at kontakte os.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/#kontakt"
            className="rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white transition hover:bg-cta-dark"
          >
            Få et tilbud
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-blue"
          >
            <ArrowLeft className="h-4 w-4" /> Tilbage til forsiden
          </Link>
        </div>
        <p className="mt-10 text-xs text-slate-400">
          Demo – kun Silkeborg har en fuldt udfyldt by-side i denne version.
        </p>
      </div>
    </section>
    </>
  );
}
