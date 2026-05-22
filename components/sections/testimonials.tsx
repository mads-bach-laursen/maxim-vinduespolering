import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials, type Testimonial } from "@/lib/demo-content";

type Props = {
  filterCity?: string;
  heading?: string;
  eyebrow?: string;
};

export function Testimonials({
  filterCity,
  heading = "Hvad vores kunder siger",
  eyebrow = "Anmeldelser",
}: Props) {
  const list: Testimonial[] = filterCity
    ? testimonials.filter((t) => t.city === filterCity)
    : testimonials.slice(0, 3);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-blue">
              {eyebrow}
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
              {heading}
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-neutral-bg px-4 py-2">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-brand-dark">
              5.0 på Google
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {list.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl bg-neutral-bg p-6 ring-1 ring-black/5"
            >
              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="mb-6 text-base leading-relaxed text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                  unoptimized
                />
                <div>
                  <div className="text-sm font-bold text-brand-dark">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {t.city} · Kunde siden {t.since}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
