import Link from "next/link";
import { Sparkles, Sun, Leaf, Home, Grid3x3 } from "lucide-react";

const items = [
  { slug: "vinduespolering", label: "Vinduesvask", Icon: Sparkles },
  { slug: "solcellerengoring", label: "Solcellerengøring", Icon: Sun },
  { slug: "algebehandling", label: "Algebehandling", Icon: Leaf },
  { slug: "facaderens", label: "Facaderens", Icon: Home },
  { slug: "fliserens", label: "Fliserens", Icon: Grid3x3 },
];

export function ServicesStrip() {
  return (
    <section className="bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <div className="lg:pr-[500px]">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
            {items.map(({ slug, label, Icon }) => (
              <li key={slug}>
                <Link
                  href={`/services/${slug}`}
                  className="group flex flex-col items-center text-center"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-white ring-1 ring-brand-blue/15 transition group-hover:ring-brand-blue/40 md:h-20 md:w-20">
                    <Icon
                      className="h-7 w-7 text-brand-blue md:h-8 md:w-8"
                      strokeWidth={1.75}
                    />
                  </span>
                  <span className="mt-3 text-sm font-semibold text-brand-blue md:text-base">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
