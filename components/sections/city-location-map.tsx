"use client";

import { useEffect, useRef, useState } from "react";
import { DENMARK_PATH, findCityCoords } from "@/lib/map-data";

type Props = {
  slug: string;
  cityName: string;
  postal?: string;
};

export function CityLocationMap({ slug, cityName, postal }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);
  const coords = findCityCoords(slug);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!coords) return null;

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_1.4fr]">
          <div className="relative z-20 mx-auto w-full max-w-xs md:max-w-none lg:-mt-[250px]">
            <svg
              ref={svgRef}
              viewBox="0 0 214 260"
              className={`block h-auto w-full ${visible ? "map-dots-visible" : ""}`}
              aria-label={`Kort over Danmark – ${cityName} markeret`}
            >
              <path
                d={DENMARK_PATH}
                fill="#001d73"
                stroke="white"
                strokeWidth="4"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />

              {/* Animeret puls-ring */}
              <g
                className="map-dot"
                style={{ transitionDelay: "150ms" }}
              >
                <circle
                  cx={coords.x}
                  cy={coords.y}
                  r="9"
                  fill="#34ad38"
                  fillOpacity="0.18"
                />
                <circle
                  cx={coords.x}
                  cy={coords.y}
                  r="5"
                  fill="#34ad38"
                  fillOpacity="0.35"
                />
                <circle
                  cx={coords.x}
                  cy={coords.y}
                  r="2.6"
                  fill="#34ad38"
                  stroke="white"
                  strokeWidth="1"
                />
              </g>
            </svg>
          </div>

          <div>
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-blue">
              Din lokale vinduespudser
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-brand-dark md:text-3xl">
              Vi dækker hele {cityName}
              {postal && (
                <span className="ml-2 text-base font-normal text-slate-500">
                  ({postal})
                </span>
              )}
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              Maxim Vinduespolering har faste ruter i {cityName} og omegn. Med
              en bil i nærheden kan vi typisk rykke ud inden for få dage – og
              ofte hurtigere ved akut behov.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
