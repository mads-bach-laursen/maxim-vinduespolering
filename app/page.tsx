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
      <ServicesOverview />
      <B2bLogos />
      <Testimonials />
      <OwnerStory />
      <CoverageMap />
      <FaqSection items={faqs} />
      <SeoText />
    </>
  );
}
