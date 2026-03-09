import { roadmap } from "../../lib/home-data";

export function RoadmapSection() {
  return (
    <section id="roadmap" className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="font-[var(--font-sora)] text-3xl text-white md:text-4xl">Roadmap</h2>
        <a href="#contacts" className="text-sm text-neonBlue transition hover:text-white">
          Request full roadmap PDF
        </a>
      </div>
      <div className="space-y-4">
        {roadmap.map((step) => (
          <article key={step.quarter} className="rounded-2xl border border-line bg-card/60 p-5 md:p-6">
            <p className="font-[var(--font-sora)] text-sm uppercase tracking-[0.2em] text-neonPink">{step.quarter}</p>
            <p className="mt-2 text-white/85">{step.item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
