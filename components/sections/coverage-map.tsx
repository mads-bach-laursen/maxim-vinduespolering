import Link from "next/link";
import { cities } from "@/lib/demo-content";

// Detaljeret stiliseret kort over Midt- og Østjylland med vand, halvø, fjorde og bymarkører.
// Koordinater er omtrentlige – tilstrækkeligt til at signalere "lokalt kort" uden at vildlede.
const cityMarkers: { slug: string; name: string; x: number; y: number; major?: boolean }[] = [
  { slug: "silkeborg", name: "Silkeborg", x: 175, y: 250, major: true },
  { slug: "skanderborg", name: "Skanderborg", x: 230, y: 280 },
  { slug: "hammel", name: "Hammel", x: 215, y: 220 },
  { slug: "hadsten", name: "Hadsten", x: 250, y: 200 },
  { slug: "hinnerup", name: "Hinnerup", x: 250, y: 222 },
  { slug: "hornslet", name: "Hornslet", x: 290, y: 215 },
  { slug: "ronde", name: "Rønde", x: 320, y: 215 },
  { slug: "ebeltoft", name: "Ebeltoft", x: 345, y: 240 },
  { slug: "grenaa", name: "Grenaa", x: 355, y: 195 },
  { slug: "bjerringbro", name: "Bjerringbro", x: 165, y: 200 },
  { slug: "ry", name: "Ry", x: 195, y: 275 },
  { slug: "horning", name: "Hørning", x: 250, y: 260 },
];

export function CoverageMap() {
  return (
    <section id="omraader" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl bg-[#0a1929] shadow-2xl ring-1 ring-black/10">
              <svg
                viewBox="0 0 420 480"
                className="block h-auto w-full"
                aria-label="Kort over Midt- og Østjylland"
              >
                <defs>
                  <linearGradient id="water" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00aeef" />
                    <stop offset="100%" stopColor="#0288d1" />
                  </linearGradient>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="rgba(255,255,255,0.04)"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>

                {/* Vand-baggrund */}
                <rect width="420" height="480" fill="url(#water)" />
                <rect width="420" height="480" fill="url(#grid)" />

                {/* Storebælt-mørk i nederste højre */}
                <path
                  d="M 380 380 L 420 380 L 420 480 L 350 480 Z"
                  fill="rgba(10,25,41,0.45)"
                />

                {/* Jyllands halvø — hovedkrop */}
                <path
                  d="M 175 30
                     Q 195 45 210 75
                     L 225 110
                     Q 235 145 245 175
                     L 268 195
                     Q 295 190 320 195
                     L 345 192
                     Q 360 200 358 220
                     L 350 245
                     Q 335 252 318 250
                     L 295 250
                     Q 282 270 268 290
                     L 258 318
                     Q 248 345 235 370
                     L 220 400
                     Q 205 420 188 415
                     L 165 395
                     Q 145 365 138 330
                     L 132 285
                     Q 130 245 138 210
                     L 145 170
                     Q 155 110 168 60
                     Z"
                  fill="#0a1929"
                  stroke="rgba(0,174,239,0.5)"
                  strokeWidth="1"
                />

                {/* Djursland-halvø */}
                <path
                  d="M 285 215
                     Q 320 205 350 195
                     L 365 198
                     Q 372 215 360 235
                     L 348 248
                     Q 325 252 305 250
                     L 290 240
                     Z"
                  fill="#0a1929"
                  stroke="rgba(0,174,239,0.5)"
                  strokeWidth="1"
                />

                {/* Mariager Fjord / Randers fjord (indskæring) */}
                <path
                  d="M 295 185 Q 270 195 245 188 L 240 198 Q 270 205 295 197 Z"
                  fill="url(#water)"
                />

                {/* Limfjorden-andtydning */}
                <path
                  d="M 165 100 Q 185 105 215 100 L 220 112 Q 190 117 165 112 Z"
                  fill="url(#water)"
                  opacity="0.7"
                />

                {/* Veje (subtile linjer) */}
                <g
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="0.6"
                  fill="none"
                >
                  <path d="M 175 250 Q 200 230 250 210 T 340 200" />
                  <path d="M 175 250 L 230 280 L 290 260" />
                  <path d="M 230 280 L 250 200" />
                  <path d="M 250 210 L 215 220 L 195 270" />
                  <path d="M 290 215 L 345 195" />
                </g>

                {/* Service-område highlight */}
                <ellipse
                  cx="245"
                  cy="240"
                  rx="125"
                  ry="60"
                  fill="rgba(0,174,239,0.08)"
                  stroke="rgba(0,174,239,0.4)"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                />

                {/* By-markører */}
                {cityMarkers.map((m) => (
                  <g key={m.slug}>
                    {m.major && (
                      <circle
                        cx={m.x}
                        cy={m.y}
                        r="16"
                        fill="rgba(245,158,11,0.18)"
                      />
                    )}
                    <circle
                      cx={m.x}
                      cy={m.y}
                      r={m.major ? 7 : 5}
                      fill={m.major ? "#f59e0b" : "white"}
                      stroke={m.major ? "white" : "rgba(0,0,0,0.2)"}
                      strokeWidth={m.major ? 2 : 0.5}
                    />
                    {m.major && (
                      <text
                        x={m.x + 12}
                        y={m.y + 4}
                        fill="white"
                        fontSize="11"
                        fontWeight="700"
                        fontFamily="ui-sans-serif, system-ui"
                      >
                        {m.name}
                      </text>
                    )}
                  </g>
                ))}

                {/* Kompas/badge i øverste højre */}
                <g transform="translate(370, 50)">
                  <circle r="22" fill="rgba(0,174,239,0.15)" stroke="rgba(0,174,239,0.5)" strokeWidth="1" />
                  <text
                    y="4"
                    textAnchor="middle"
                    fill="white"
                    fontSize="10"
                    fontWeight="700"
                    fontFamily="ui-sans-serif, system-ui"
                  >
                    52 BYER
                  </text>
                </g>
              </svg>
            </div>
          </div>

          {/* By-grid */}
          <div className="order-1 lg:order-2">
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

            <div className="mt-8 flex flex-wrap gap-2.5">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/byer/${c.slug}`}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-brand-dark shadow-sm ring-1 ring-black/5 transition hover:bg-brand-blue hover:text-white hover:shadow-md"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
