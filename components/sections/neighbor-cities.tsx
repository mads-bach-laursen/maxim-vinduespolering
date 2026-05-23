import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cities } from "@/lib/demo-content";

type Props = {
  slugs: string[];
};

export function NeighborCities({ slugs }: Props) {
  const list = slugs
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter(Boolean) as { slug: string; name: string; postal: string }[];

  return (
    <section className="bg-neutral-bg py-20 md:py-28">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-blue">
            Nabobyer
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            Vi dækker også
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Maxim har faste ruter i hele området. Find din by herunder, eller{" "}
            <Link href="/#omraader" className="font-semibold text-brand-blue">
              se alle 52 byer →
            </Link>
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {list.map((c) => (
            <Link
              key={c.slug}
              href={`/byer/${c.slug}`}
              className="group relative flex items-center justify-between overflow-hidden rounded-2xl bg-white p-5 ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative z-10">
                <div className="text-base font-bold text-brand-dark">
                  {c.name}
                </div>
                <div className="text-xs text-slate-500">{c.postal}</div>
              </div>
              <ArrowRight className="relative z-10 h-4 w-4 text-brand-blue transition group-hover:translate-x-1" />
              <Image
                src="/byskilt.png"
                alt=""
                width={200}
                height={80}
                unoptimized
                className="pointer-events-none absolute right-0 bottom-0 h-12 w-auto opacity-15 transition group-hover:opacity-25"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
