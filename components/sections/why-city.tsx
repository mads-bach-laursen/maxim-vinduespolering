import { Check } from "lucide-react";

type Props = {
  cityName: string;
  bullets: { title: string; body: string }[];
};

export function WhyCity({ cityName, bullets }: Props) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-blue">
            Hvorfor Maxim
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            Hvorfor vælge Maxim i {cityName}?
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {bullets.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl bg-neutral-bg p-6 ring-1 ring-black/5"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-brand-blue/15 text-brand-blue">
                <Check className="h-5 w-5" strokeWidth={3} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-brand-dark">
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
