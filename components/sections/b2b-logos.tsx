import { b2bClients } from "@/lib/demo-content";

export function B2bLogos() {
  return (
    <section className="border-y border-slate-100 bg-white py-10">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center lg:gap-12">
          <p className="text-base font-medium text-slate-600 lg:text-right">
            Virksomheder der stoler på{" "}
            <span className="font-bold text-brand-dark">Maxim</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 lg:justify-start">
            {b2bClients.map((logo) => (
              <span
                key={logo}
                className="text-lg font-black tracking-wider text-slate-400 transition hover:text-slate-600"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
