import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials, type Testimonial } from "@/lib/demo-content";

type Props = {
  filterCity?: string;
  heading?: string;
  eyebrow?: string;
};

const portraitImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=85",
];

export function Testimonials({
  filterCity,
  heading = "Hvad vores kunder siger",
  eyebrow = "Anmeldelser",
}: Props) {
  const list: Testimonial[] = filterCity
    ? testimonials.filter((t) => t.city === filterCity)
    : testimonials.slice(0, 2);

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

        <div className="grid gap-6 md:grid-cols-2">
          {list.map((t, idx) => (
            <article
              key={t.name}
              className="overflow-hidden rounded-3xl bg-neutral-bg ring-1 ring-black/5"
            >
              <div className="grid grid-cols-[1fr_140px] items-stretch sm:grid-cols-[1fr_180px]">
                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <div className="mb-4 flex items-center gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-brand-blue text-brand-blue"
                        />
                      ))}
                    </div>
                    <blockquote className="mb-6 text-base leading-relaxed text-slate-700 md:text-lg">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-brand-dark">
                      {t.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {t.city} · Kunde siden {t.since}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={portraitImages[idx % portraitImages.length]}
                    alt={t.name}
                    fill
                    sizes="180px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
