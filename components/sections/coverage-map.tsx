"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cities } from "@/lib/demo-content";

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

const DENMARK_PATH = `M67.187,215.39l7.697-9.559l-2.979-14.645l5.546-9.099l1.379-7.629l-3.003-6.464l5.484,2.758l8.762-3.003l5.362-14.338 l6.587-2.758l-1.501-19.179l24.234-6.158l9.253-19.394l-8.149-7.016l-10.784,1.961l-8.762-3.616l-4.841-28.401l11.704-27.359 l-0.031-16.36l-5.393-11.029l4.719-10.693L109.344,2l-11.948,9.773l-10.202,0.981l-17.157,28.89l-15.289,8.487l-11.182-1.623 l-8.824,4.626l-8.854-0.184l-14.4,21.569l4.535,13.449l7.475,7.261l10.325-8.67l5.239-8.762l1.379-12.408L28.583,70.72l1.409-5.085 l19.486-7.047l6.863,2.88l18.383-6.372l-3.921,6.801l-6.741-2.206L51.777,70.475l0.981,9.069l6.464,9.406l-8.027,2.574 l-1.992-13.297l-10.356,2.942l-9.682,23.744l-10.355-8.67l-5.669,0.061L8.21,91.186l-3.708,7.261l-1.195,35.57l8.058,3.707 l4.719,12.347l-9.896,10.202L2.143,179.79l4.627,3.155l4.534-4.687l7.017,9.927l8.211,2.205l1.807,44.608l7.752-0.766l17.586,4.565 l6.556,3.86l10.111-6.342l10.232-1.563l-1.163-6.863L67.187,215.39z M122.028,240.115l5.331,5.729l10.128-28.168l-4.351,1.413 L122.028,240.115z M81.464,233.128l8.946,4.627l2.635-8.303l-11.122-9.835L81.464,233.128z M128.707,195.874l-4.78-6.617 l-9.19-1.685l-0.797-6.741l-7.139-5.177l-24.817,2.74l-3.493,5.637l7.447,13.468l0.061,7.843l10.877,5.606l9.59,9.712l10.722,2.574 l9.161-3.677L128.707,195.874z M136.581,36.375l5.422-3.003l-7.2,0.643l-7.598,4.811l7.935,4.963L136.581,36.375z M193.474,223.632 l-5.361-11.826l6.097-7.445l9.743-2.788l2.084-7.812l-10.631-6.587l5.607-14.247l4.932-0.337l5.576-16.115l-4.687-9.957 l4.534-10.355l-17.708-6.128l-16.912,13.604l7.538,2.266l-6.802,11.551l-0.429,6.005l-10.569-17.004l-17.402,18.291l-6.067-0.429 l-2.205,4.994l7.292,21.292l-2.145,8.027l4.963,9.62l7.568-2.021l10.784,3.002l11.673,16.452l-5.671,8.259l-14.605,2.832 l-9.321-8.272l-7.935,1.103l-2.297,15.196l20.435,10.233l14.951-2.053l4.414,5.018l14.152-21.593l-10.477-8.609L193.474,223.632z M202.146,219.985l-0.674,6.832l8.946-0.214l1.439-4.534L202.146,219.985z`;

// Bymarkører med koordinater (placeret via mark-mode)
type CityDot = { slug: string; name: string; x: number; y: number };
const mappedCities: CityDot[] = [
  { slug: "silkeborg", name: "Silkeborg", x: 72.5, y: 130 },
  { slug: "skanderborg", name: "Skanderborg", x: 87.8, y: 144 },
  { slug: "hammel", name: "Hammel", x: 89.2, y: 131.7 },
  { slug: "grenaa", name: "Grenaa", x: 126.7, y: 115.7 },
  { slug: "ebeltoft", name: "Ebeltoft", x: 117.5, y: 124.9 },
  { slug: "ronde", name: "Rønde", x: 106.9, y: 125.9 },
  { slug: "hornslet", name: "Hornslet", x: 100.8, y: 126.6 },
  { slug: "hadsten", name: "Hadsten", x: 91.9, y: 119.5 },
  { slug: "hinnerup", name: "Hinnerup", x: 94, y: 125.9 },
  { slug: "bjerringbro", name: "Bjerringbro", x: 76.6, y: 115.4 },
  { slug: "ry", name: "Ry", x: 81.4, y: 136.2 },
  { slug: "lystrup", name: "Lystrup", x: 98.4, y: 120.8 },
  { slug: "hjortshoj", name: "Hjortshøj", x: 97.4, y: 123.2 },
  { slug: "skodstrup", name: "Skødstrup", x: 87.2, y: 124.2 },
  { slug: "langaa", name: "Langå", x: 85.1, y: 116.7 },
  { slug: "auning", name: "Auning", x: 105.9, y: 110.3 },
  { slug: "galten", name: "Galten", x: 81.4, y: 126.3 },
  { slug: "ikast", name: "Ikast", x: 53.8, y: 148.8 },
  { slug: "them", name: "Them", x: 70.1, y: 147.4 },
  { slug: "orsted", name: "Ørsted", x: 99.8, y: 100.7 },
  { slug: "orum-djurs", name: "Ørum Djurs", x: 116.8, y: 107.2 },
  { slug: "flemming", name: "Flemming", x: 69.1, y: 160 },
  { slug: "kolind", name: "Kolind", x: 114.7, y: 117.1 },
  { slug: "uldum", name: "Uldum", x: 73.9, y: 153.9 },
];

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
          <div className="order-2 lg:order-1">
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
                className={`block h-auto w-full ${visible ? "map-dots-visible" : ""} ${markMode && selectedSlug ? "cursor-crosshair" : ""}`}
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
