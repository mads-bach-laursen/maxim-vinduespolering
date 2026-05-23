import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { CityLocationMap } from "@/components/sections/city-location-map";
import { ServicesStrip } from "@/components/sections/services-strip";
import { WhyCity } from "@/components/sections/why-city";
import { Testimonials } from "@/components/sections/testimonials";
import { NeighborCities } from "@/components/sections/neighbor-cities";
import { FaqSection } from "@/components/sections/faq-section";
import { silkeborg } from "@/lib/demo-content";

export const metadata: Metadata = {
  title: "Vinduespudser i Silkeborg – fra 90 kr.",
  description:
    "Lokal vinduespudser i Silkeborg. Faste ruter i hele 8600 – Lysbro, Sølystparken, Alderslyst. Få et gratis tilbud inden for 24 timer.",
};

export default function SilkeborgPage() {
  return (
    <>
      <Hero
        title={silkeborg.heroTitle}
        subtitle={silkeborg.heroSubtitle}
        postal={silkeborg.postal}
        cityContext={silkeborg.name}
      />

      <CityLocationMap
        slug={silkeborg.slug}
        cityName={silkeborg.name}
        postal={silkeborg.postal}
      />

      <ServicesStrip />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
            {silkeborg.intro}
          </p>
        </div>
      </section>

      <WhyCity cityName={silkeborg.name} bullets={silkeborg.whyBullets} />

      <Testimonials
        filterCity={silkeborg.name}
        heading={`Lokale anmeldelser fra ${silkeborg.name}`}
        eyebrow="Silkeborg-kunder"
      />

      <NeighborCities slugs={silkeborg.neighborSlugs} />

      <FaqSection
        items={silkeborg.faqs}
        heading={`Ofte stillede spørgsmål om vinduespolering i ${silkeborg.name}`}
        eyebrow={`FAQ ${silkeborg.name}`}
      />
    </>
  );
}
