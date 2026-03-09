import { features } from "../../lib/home-data";

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
        <h2 className="font-[var(--font-sora)] text-3xl text-white md:text-4xl">Core features</h2>
        <p className="max-w-xl text-sm text-white/70 md:text-base">
          Product and engineering capabilities built for high-growth B2B fintech teams.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {features.map((item) => (
          <article key={item.title} className="rounded-2xl border border-line bg-card/70 p-6 backdrop-blur">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-neonBlue/70 text-sm font-bold text-neonBlue">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
