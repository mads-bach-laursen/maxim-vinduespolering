"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cities } from "@/lib/demo-content";
import { DENMARK_PATH, mappedCities, type CityDot } from "@/lib/map-data";

function ByskiltIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      {/* Venstre: hus med høj kirkespids */}
      <path d="M30 100 L30 65 L42 55 L45 55 L45 10 L49 10 L49 55 L52 55 L64 65 L64 100 Z" />
      {/* Midte: bredt hus med afskårne hjørner */}
      <path d="M78 100 L78 55 L85 48 L122 48 L129 55 L129 100 Z" />
      {/* Lille spidstaget hus */}
      <path d="M138 100 L138 75 L152 65 L166 75 L166 100 Z" />
      {/* Højre: høj spidstaget hus */}
      <path d="M172 100 L172 50 L186 35 L200 50 L200 100 Z" />
    </svg>
  );
}

export function CoverageMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);
  const [markMode, setMarkMode] = useState(false);
  const [marked, setMarked] = useState<CityDot[]>([]);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Animer kun ind når kortet er rigtigt inde i viewport (ikke kun lige under fold)
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setMarkMode(new URLSearchParams(window.location.search).has("mark"));
  }, []);

  function handleSvgClick(e: React.MouseEvent<SVGSVGElement>) {
    if (!markMode || !selectedSlug) return;
    const svg = svgRef.current;
    if (!svg) return;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return;
    const t = pt.matrixTransform(ctm.inverse());
    const x = Math.round(t.x * 10) / 10;
    const y = Math.round(t.y * 10) / 10;
    const city = cities.find((c) => c.slug === selectedSlug);
    if (!city) return;

    setMarked((prev) => {
      // Erstat hvis byen allerede er placeret
      const without = prev.filter((d) => d.slug !== selectedSlug);
      return [...without, { slug: city.slug, name: city.name, x, y }];
    });

    // Auto-advance til næste ikke-placerede by
    const placedSlugs = new Set([...marked.map((d) => d.slug), selectedSlug]);
    const nextCity = cities.find((c) => !placedSlugs.has(c.slug));
    if (nextCity) setSelectedSlug(nextCity.slug);
  }

  function selectCity(slug: string) {
    setSelectedSlug((cur) => (cur === slug ? null : slug));
  }

  function removeCity(slug: string) {
    setMarked((prev) => prev.filter((d) => d.slug !== slug));
  }

  function clearAll() {
    setMarked([]);
    setSelectedSlug(null);
  }

  async function copyArray() {
    const text =
      "[\n" +
      marked
        .map(
          (d) =>
            `  { slug: "${d.slug}", name: "${d.name}", x: ${d.x}, y: ${d.y} },`
        )
        .join("\n") +
      "\n]";
    try {
      await navigator.clipboard.writeText(text);
      alert(`✅ Kopieret! ${marked.length} byer placeret.`);
    } catch {
      prompt("Kopiér disse koordinater:", text);
    }
  }

  const displayDots = markMode ? marked : mappedCities;
  const placedSlugs = new Set(marked.map((d) => d.slug));

  return (
    <section id="omraader" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Map */}
          <div className="order-1">
            <div className="relative p-6 md:p-8">
              {markMode && selectedSlug && (
                <div className="absolute top-0 left-0 right-0 z-20 -mt-2 mx-auto w-fit rounded-full bg-brand-blue px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
                  Placer:{" "}
                  <span className="text-cta">
                    {cities.find((c) => c.slug === selectedSlug)?.name}
                  </span>
                </div>
              )}

              <svg
                ref={svgRef}
                viewBox="0 0 214 260"
                onClick={handleSvgClick}
                className={`block h-auto w-full origin-center scale-[1.3] my-10 lg:scale-100 lg:my-0 ${visible ? "map-dots-visible" : ""} ${markMode && selectedSlug ? "cursor-crosshair" : ""}`}
                aria-label="Kort over Danmark – serviceområde i Midt- og Østjylland"
              >
                <path d={DENMARK_PATH} fill="#001d73" />

                {displayDots.map((d, i) => (
                  <g
                    key={d.slug}
                    className={markMode ? undefined : "map-dot"}
                    style={
                      markMode ? undefined : { transitionDelay: `${i * 40}ms` }
                    }
                  >
                    <circle cx={d.x} cy={d.y} r="3" fill="#34ad38" opacity="0.3" />
                    <circle cx={d.x} cy={d.y} r="1.5" fill="#34ad38" />
                    {markMode && (
                      <text
                        x={d.x + 3.5}
                        y={d.y + 1.5}
                        fontSize="3.5"
                        fontWeight="600"
                        fill="#001d73"
                        fontFamily="ui-sans-serif, system-ui"
                      >
                        {d.name}
                      </text>
                    )}
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* By-grid / mark-panel */}
          <div className="order-1 lg:order-2">
            {!markMode && (
              <>
                <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-blue">
                  Vores serviceområde
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
                  Din lokale vinduespudser
                </h2>
                <p className="mt-4 text-base text-slate-600 md:text-lg">
                  Vi dækker en lang række byer i Midt- og Østjylland. Nedenfor
                  finder du et udpluk af de byer, hvor vi tilbyder professionel
                  vinduespudsning og vinduesvask.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-2.5 md:grid-cols-4 lg:grid-cols-5">
                  {cities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/byer/${c.slug}`}
                      className="group relative overflow-hidden rounded-[0.5rem] bg-white px-3 py-2.5 text-sm font-semibold text-brand-dark shadow-sm ring-1 ring-black/5 transition hover:bg-brand-blue hover:text-white hover:shadow-md"
                    >
                      <span className="relative z-10">{c.name}</span>
                      <Image
                        src="/byskilt.png"
                        alt=""
                        width={120}
                        height={50}
                        unoptimized
                        className="pointer-events-none absolute right-1 bottom-0 h-7 w-auto opacity-15 transition group-hover:opacity-30"
                      />
                    </Link>
                  ))}
                </div>
              </>
            )}

            {markMode && (
              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-brand-dark">
                      🎯 Mark-mode
                    </div>
                    <div className="text-xs text-slate-600">
                      {marked.length} af {cities.length} byer placeret
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={clearAll}
                      disabled={marked.length === 0}
                      className="rounded-md bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100 disabled:opacity-40"
                    >
                      Ryd
                    </button>
                    <button
                      onClick={copyArray}
                      disabled={marked.length === 0}
                      className="rounded-md bg-cta px-3 py-1.5 text-xs font-semibold text-white hover:bg-cta-dark disabled:opacity-40"
                    >
                      Kopier array
                    </button>
                  </div>
                </div>

                <p className="mb-3 text-xs text-slate-600">
                  <strong>1.</strong> Klik en by herunder &nbsp;
                  <strong>2.</strong> Klik på kortet hvor den ligger.
                </p>

                <div className="mb-4 max-h-[280px] overflow-y-auto rounded-lg bg-white p-2 ring-1 ring-slate-200">
                  <div className="flex flex-wrap gap-1.5">
                    {cities.map((c) => {
                      const placed = placedSlugs.has(c.slug);
                      const selected = selectedSlug === c.slug;
                      return (
                        <button
                          key={c.slug}
                          onClick={() => selectCity(c.slug)}
                          className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                            selected
                              ? "bg-brand-blue text-white"
                              : placed
                                ? "bg-cta/15 text-cta-dark ring-1 ring-cta/30 hover:bg-cta/25"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          {placed && "✓ "}
                          {c.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {marked.length > 0 && (
                  <details className="rounded-lg bg-white p-3 ring-1 ring-slate-200">
                    <summary className="cursor-pointer text-xs font-semibold text-slate-700">
                      Placerede byer ({marked.length})
                    </summary>
                    <ul className="mt-2 space-y-1 text-xs">
                      {marked.map((d) => (
                        <li
                          key={d.slug}
                          className="flex items-center justify-between rounded bg-slate-50 px-2 py-1"
                        >
                          <span className="font-medium">{d.name}</span>
                          <span className="text-slate-500">
                            ({d.x}, {d.y})
                          </span>
                          <button
                            onClick={() => removeCity(d.slug)}
                            className="text-red-500 hover:text-red-700"
                            aria-label={`Fjern ${d.name}`}
                          >
                            ×
                          </button>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
