import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}
import { company, services, cities } from "@/lib/demo-content";

export function Footer() {
  const topCities = cities.filter((c) => c.priority).slice(0, 12);

  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo-white.svg"
                alt="Maxim Vinduespolering"
                width={220}
                height={28}
                className="h-7 w-auto"
              />
            </div>
            <p className="mb-5 text-sm leading-relaxed">
              Din lokale vinduespudser i Midt- og Østjylland. Stabil service – vi
              kommer når vi siger det.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href={`tel:${company.phoneTel}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="h-4 w-4 text-brand-blue" /> {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail className="h-4 w-4 text-brand-blue" /> {company.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                <span>
                  {company.address}
                  <br />
                  {company.postal}
                  <br />
                  CVR {company.cvr}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
              Områder
            </h4>
            <ul className="space-y-2 text-sm">
              {topCities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/byer/${c.slug}`} className="hover:text-white">
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#omraader"
                  className="font-medium text-brand-blue hover:underline"
                >
                  Se alle 52 byer →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
              Følg os
            </h4>
            <div className="flex gap-3">
              <a
                href={company.facebook}
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-brand-blue"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-brand-blue"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-xs leading-relaxed">
              {company.hours}
              <br />
              Svartid {company.responseTime}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
              Kundefordele
            </h4>
            <div className="space-y-3">
              <div className="rounded-lg bg-white/5 p-3">
                <div className="text-sm font-semibold text-brand-blue">26%</div>
                <div className="text-xs">Servicefradrag automatisk indberettet</div>
              </div>
              <div className="rounded-lg bg-white/5 p-3">
                <div className="text-sm font-semibold text-brand-blue">100%</div>
                <div className="text-xs">Tilfredshedsgaranti på alt arbejde</div>
              </div>
              <div className="rounded-lg bg-white/5 p-3">
                <div className="text-sm font-semibold text-brand-blue">
                  Partner-rabatter
                </div>
                <div className="text-xs">Hos lokale håndværkere og malere</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} {company.legalName}. Alle rettigheder
            forbeholdes.
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-white">
              Privatlivspolitik
            </a>
            <a href="#" className="hover:text-white">
              Cookiepolitik
            </a>
            <a href="#" className="hover:text-white">
              Handelsbetingelser
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
