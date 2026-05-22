import Image from "next/image";

type Props = {
  heading?: string;
  paragraphs?: string[];
};

const defaultParagraphs = [
  "Maxim Vinduespolering er din lokale vinduespudser i Midt- og Østjylland. Vi har leveret professionel vinduespolering, solcellerengøring og facaderens i mere end 10 år, og vi kender området fra Silkeborg i vest til Grenaa i øst, fra Hadsten i nord til Hørning i syd. Vores faste ruter betyder at vi næsten altid har en bil i nærheden af din adresse – og det betyder hurtigere svartid og mere fleksible aftaler for dig.",
  "Vi arbejder for både private og erhverv. Med rentvands-anlæg når vi op til 3. sals højde uden lift, og vi forurener ikke dine vinduer med snavset rengøringsvand. For erhvervskunder tilpasser vi os jeres åbningstider, og vi har faste aftaler hos butikker, kontorer og produktionsvirksomheder over hele regionen.",
  "Som privatkunde kan du trække 26% fra på vinduespolering via servicefradraget. Vi indberetter automatisk til Skat for dig, så du blot skal vælge fradraget på din selvangivelse. Det er en af mange grunde til at over 1.000 kunder i Midt- og Østjylland har valgt at lade Maxim stå for deres vinduespolering år efter år.",
];

export function SeoText({
  heading = "Vinduespolering i Midt- og Østjylland – stabil service du kan regne med",
  paragraphs = defaultParagraphs,
}: Props) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-brand-dark md:text-3xl">
          {heading}
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
          <p>{paragraphs[0]}</p>
          {paragraphs.length > 1 && (
            <div className="my-8 grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=900&q=80"
                  alt="Vinduespolering i arbejde"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80"
                  alt="Thomas ved bilen"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          )}
          {paragraphs.slice(1).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
