"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { company } from "@/lib/demo-content";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#omraader", label: "Områder" },
  { href: "/#mod-thomas", label: "Mød Thomas" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-brand-blue text-white">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-white.svg"
            alt="Maxim Vinduespolering"
            width={220}
            height={28}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/85 transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="text-right">
            <div className="text-[11px] uppercase tracking-wide text-white/60">
              Ring 8.00-17.00
            </div>
            <a
              href={`tel:${company.phoneTel}`}
              className="text-base font-semibold text-white"
            >
              {company.phone}
            </a>
          </div>

          <div className="relative">
            <Image
              src="/thomas.jpg"
              alt="Thomas, ejer af Maxim"
              width={80}
              height={80}
              className="h-10 w-10 rounded-full border-2 border-white/30 object-cover"
            />
            <span className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-brand-blue bg-success" />
          </div>

          <Link
            href="/#kontakt"
            className="rounded-full bg-cta px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cta-dark"
          >
            Få en pris
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 lg:hidden">
          <nav className="mx-auto flex max-w-page flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${company.phoneTel}`}
              className="mt-2 flex items-center gap-2 rounded-md bg-white/10 px-3 py-3 text-sm font-semibold"
            >
              <Phone className="h-4 w-4" /> {company.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
