import Link from "next/link";
import { MapPin } from "lucide-react";
import { cities } from "@/lib/demo-content";

// Stiliseret Jylland-kort med markørprikker for primærbyerne (omtrentlige positioner)
const cityMarkers: Record<string, { x: number; y: number }> = {
  silkeborg: { x: 175, y: 240 },
  skanderborg: { x: 225, y: 265 },
  hammel: { x: 215, y: 220 },
  hadsten: { x: 245, y: 205 },
  hinnerup: { x: 245, y: 220 },
  hornslet: { x: 285, y: 215 },
  ronde: { x: 305, y: 215 },
  ebeltoft: { x: 330, y: 230 },
  grenaa: { x: 340, y: 195 },
  bjerringbro: { x: 165, y: 200 },
  ry: { x: 190, y: 265 },
  lystrup: { x: 270, y: 230 },
  hjortshoj: { x: 285, y: 230 },
  skodstrup: { x: 285, y: 225 },
  horning: { x: 240, y: 250 },
};

export function CoverageMap() {
  return (
    <section id="omraader" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-square w-full rounded-3xl bg-gradient-to-br from-brand-blue to-brand-blue-dark p-8 shadow-xl">
              <svg
                viewBox="0 0 400 400"
                className="h-full w-full"
                aria-label="Jyllandskort"
              >
                {/* Stiliseret jysk halvø */}
                <path
                  d="M 180 40
                     Q 200 50 210 70
                     L 225 110
                     Q 235 140 240 175
                     L 260 200
                     Q 290 195 320 200
                     L 340 195
                     Q 350 210 345 230
                     L 335 245
                     Q 320 250 305 248
                     L 285 250
                     Q 270 265 250 275
                     L 240 290
                     Q 225 310 215 340
                     L 205 365
                     Q 195 375 185 370
                     L 165 350
                     Q 150 320 145 290
                     L 140 250
                     Q 138 220 145 190
                     L 150 150
                     Q 158 100 170 60
                     Z"
                  fill="rgba(255,255,255,0.18)"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="2"
                />
                {/* Service-område highlight */}
                <ellipse
                  cx="240"
                  cy="230"
                  rx="115"
                  ry="55"
                  fill="rgba(255,255,255,0.12)"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                {/* By-prikker */}
                {Object.entries(cityMarkers).map(([slug, pos]) => (
                  <g key={slug}>
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="6"
                      fill="white"
                      className="drop-shadow"
                    />
                    <circle cx={pos.x} cy={pos.y} r="3" fill="#f59e0b" />
                  </g>
                ))}
                {/* Stor markør for Silkeborg / hovedområde */}
                <g>
                  <circle
                    cx={cityMarkers.silkeborg.x}
                    cy={cityMarkers.silkeborg.y}
                    r="12"
                    fill="rgba(245,158,11,0.4)"
                  />
                </g>
              </svg>
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-cta" />
                  <div>
                    <div className="text-sm font-bold text-brand-dark">
                      52 byer i Midt- og Østjylland
                    </div>
                    <div className="text-xs text-slate-500">
                      Fra Silkeborg til Grenaa, Hadsten til Hørning
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-blue">
              Vores serviceområde
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
              Din lokale vinduespudser
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              Vi har faste ruter i over 50 byer i Midt- og Østjylland. Klik din
              by for at se priser, lokale anmeldelser og hvor hurtigt vi kan
              komme ud.
            </p>

            <div className="mt-8 max-h-[400px] overflow-y-auto rounded-2xl border border-slate-100 bg-neutral-bg p-3">
              <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
                {cities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/byer/${c.slug}`}
                    className="group flex items-center justify-between rounded-lg bg-white px-3 py-2.5 text-sm transition hover:bg-brand-blue hover:text-white"
                  >
                    <span className="font-medium">{c.name}</span>
                    <span className="text-[11px] text-slate-400 group-hover:text-white/70">
                      {c.postal}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
