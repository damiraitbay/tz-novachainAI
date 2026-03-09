import { useCases } from "../../lib/home-data";

export function SolutionsSection() {
  return (
    <section id="solutions" className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="font-[var(--font-sora)] text-3xl text-white md:text-4xl">Solutions by use case</h2>
        <p className="max-w-lg text-sm text-white/70 md:text-base">
          Deploy specific architecture patterns for your business model.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {useCases.map((useCase) => (
          <article key={useCase.title} className="rounded-2xl border border-line bg-card/70 p-6">
            <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/75">{useCase.text}</p>
            <a href="#contacts" className="mt-5 inline-block text-sm text-neonBlue transition hover:text-white">
              {useCase.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
