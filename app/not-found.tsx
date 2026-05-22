import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-neutral-bg px-4">
      <div className="text-center">
        <div className="text-7xl font-black text-brand-blue">404</div>
        <h1 className="mt-4 text-3xl font-bold text-brand-dark">Siden findes ikke</h1>
        <p className="mt-3 text-slate-600">
          Den side du leder efter er flyttet eller findes ikke længere.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white hover:bg-cta-dark"
        >
          Til forsiden
        </Link>
      </div>
    </section>
  );
}
