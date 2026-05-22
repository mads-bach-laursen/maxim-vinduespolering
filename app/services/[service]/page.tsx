import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { services } from "@/lib/demo-content";

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export default async function ServiceStubPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const svc = services.find((s) => s.slug === service);
  if (!svc) notFound();

  return (
    <section className="min-h-[70vh] bg-neutral-bg py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-blue/15 px-4 py-1.5 text-sm font-medium text-brand-blue">
          <Clock className="h-4 w-4" /> Snart klar
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-brand-dark md:text-5xl">
          {svc.title}
        </h1>
        <p className="mt-4 text-base text-slate-600 md:text-lg">{svc.short}</p>
        <p className="mt-3 text-sm text-slate-500">
          Den fulde service-side er på vej i fase 2. I mellemtiden kan du sende
          os en forespørgsel og få et gratis tilbud inden for 24 timer.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/#kontakt"
            className="rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white transition hover:bg-cta-dark"
          >
            Få et tilbud
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-blue"
          >
            <ArrowLeft className="h-4 w-4" /> Tilbage til forsiden
          </Link>
        </div>
      </div>
    </section>
  );
}
