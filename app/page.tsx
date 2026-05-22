import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { B2bLogos } from "@/components/sections/b2b-logos";
import { Testimonials } from "@/components/sections/testimonials";
import { OwnerStory } from "@/components/sections/owner-story";
import { CoverageMap } from "@/components/sections/coverage-map";
import { FaqSection } from "@/components/sections/faq-section";
import { SeoText } from "@/components/sections/seo-text";
import { faqs } from "@/lib/demo-content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview
        eyebrow="Vores ydelser"
        heading="Vi sørger for skinnende rene vinduer"
        intro="To metoder til vinduespudsning – vælg den der passer dit hus og dine vinduer. Vi rådgiver gerne om hvad der passer bedst."
      />
      <B2bLogos />
      <Testimonials />
      <OwnerStory />
      <CoverageMap />
      <FaqSection items={faqs} />
      <SeoText />
    </>
  );
}
