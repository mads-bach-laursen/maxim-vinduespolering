import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyCity } from "@/components/sections/why-city";
import { Testimonials } from "@/components/sections/testimonials";
import { NeighborCities } from "@/components/sections/neighbor-cities";
import { FaqSection } from "@/components/sections/faq-section";
import { SeoText } from "@/components/sections/seo-text";
import { silkeborg } from "@/lib/demo-content";

export const metadata: Metadata = {
  title: "Vinduespudser i Silkeborg – fra 90 kr.",
  description:
    "Lokal vinduespudser i Silkeborg. Faste ruter i hele 8600 – Lysbro, Sølystparken, Alderslyst. Få et gratis tilbud inden for 24 timer.",
};

const silkeborgSeo = [
  "Maxim Vinduespolering er din lokale vinduespudser i Silkeborg. Vi har faste kunder i hele 8600-området – fra Lysbro og Sølystparken i nord, over centrum og Alderslyst, til Funder og Resenbro. Vores faste ruter gennem Silkeborg betyder, at vi næsten altid har en bil i nærheden, og at vi kan rykke hurtigt ud hvis du har akut brug for hjælp.",
  "Mange af vores Silkeborg-kunder har faste aftaler, hvor vi kommer hver 4. eller 6. uge. Det betyder skinnende rene vinduer hele året, automatisk indberetning til servicefradraget på 26%, og at du aldrig behøver tænke over at booke os. Vi sender en venlig påmindelse dagen før, og du behøver ikke være hjemme – det meste klarer vi udefra med vores rentvands-anlæg.",
  "Vi tilbyder også solcellerengøring, algebehandling, facaderens og fliserens i Silkeborg. Mange Silkeborg-boliger ligger tæt på søen eller skoven, og det giver naturligt mere alge- og pollenpåvirkning. Vi planlægger din rute så vi rammer de rigtige tidspunkter på året, og du får altid et samlet og gennemsigtigt tilbud før vi starter.",
];

export default function SilkeborgPage() {
  return (
    <>
      <Hero
        title={silkeborg.heroTitle}
        subtitle={silkeborg.heroSubtitle}
        postal={silkeborg.postal}
        cityContext={silkeborg.name}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
            {silkeborg.intro}
          </p>
        </div>
      </section>

      <ServicesOverview
        eyebrow={`Services i ${silkeborg.name}`}
        heading={`Alt vi tilbyder i ${silkeborg.name}`}
        intro={`Uanset om du bor i Lysbro, Sølystparken eller centrum af ${silkeborg.name} – vi har værktøjet og erfaringen til at klare opgaven.`}
      />

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

      <SeoText
        heading={`Vinduespolering i ${silkeborg.name} – lokal service du kan regne med`}
        paragraphs={silkeborgSeo}
      />
    </>
  );
}
