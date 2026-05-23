import { Hero } from "@/components/sections/hero";
import { ServicesStrip } from "@/components/sections/services-strip";
import { B2bLogos } from "@/components/sections/b2b-logos";
import { Testimonials } from "@/components/sections/testimonials";
import { OwnerStory } from "@/components/sections/owner-story";
import { CoverageMap } from "@/components/sections/coverage-map";
import { FaqSection } from "@/components/sections/faq-section";
import { faqs } from "@/lib/demo-content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesStrip />
      <B2bLogos />
      <Testimonials />
      <OwnerStory />
      <CoverageMap />
      <FaqSection items={faqs} />
    </>
  );
}
