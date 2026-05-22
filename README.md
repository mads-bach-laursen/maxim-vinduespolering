# Maxim Vinduespolering – Demo (Fase 1)

Visuel salgsdemo til kundepræsentation. Next.js 16 (App Router) + React 19 + Tailwind v4 + shadcn/ui.

## Hvad er færdigt

- **Forside (`/`)** med alle 12 hovedsektioner: header, hero med floating kontaktformular, 6 service-cards, B2B-logo-strip, testimonials, "Mød Thomas", dækningskort med 52 byer i klikbart grid, FAQ, SEO-tekst, sticky mobile CTA, footer.
- **Silkeborg by-side (`/byer/silkeborg`)**: by-specifik hero, lokal intro, services, "Hvorfor Maxim i Silkeborg", lokale anmeldelser, nabobyer, by-FAQ, by-specifik SEO-tekst.
- **Stub-sider** for de øvrige 51 byer (`/byer/[by]`) og 6 services (`/services/[service]`) – så ingen interne links 404'er. Klar til at blive udfyldt i fase 2.
- **Brand-tokens** sat op via CSS-variabler: brand-dark `#333333`, brand-blue `#05a9f5` (accent), CTA-orange `#F59E0B`.

## Placeholders (erstattes i fase 2)

- Alle billeder er fra Unsplash (vinduespolering, hus, Thomas-stand-in) eller pravatar.cc (testimonial-avatars).
- "Thomas"-portræt er en avatar — erstattes med rigtige fotos fra fotosession.
- Kontaktformularen viser en tak-besked lokalt — sender ikke noget (ingen Resend/Monday-integration i fase 1).
- 3 testimonials er fingeret (realistiske navne/citater, ikke virkelige kunder).
- Tracking, Cookiebot, CMS, multi-domæne — alt udskudt til fase 2.

## Kør lokalt

```bash
pnpm install
pnpm dev
```

Åbn [http://localhost:3000](http://localhost:3000).

## Deploy

Vercel via GitHub-integration. `pnpm build` bygger statiske sider for forside, Silkeborg, 51 by-stubs og 6 service-stubs.

## Tech valg

- **Next.js 16** med App Router (Turbopack).
- **Tailwind v4** med `@theme`-tokens — ingen `tailwind.config.ts`.
- **shadcn/ui** (Nova-preset, Base UI under hood) — installeret men kun lib/utils.ts bruges aktivt. Sektionerne er bygget fra bunden for at matche Design Reference præcist.
- **lucide-react** v1.x for ikoner (Facebook/Instagram brand-glyphs er inlinet som SVG da Lucide droppede dem).
