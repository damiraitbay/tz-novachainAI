import { reviewSchema, testimonials } from "../../lib/home-data";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="font-[var(--font-sora)] text-3xl text-white md:text-4xl">Client testimonials</h2>
        <p className="max-w-lg text-sm text-white/70 md:text-base">Teams already running NovaChain AI in production.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((review) => (
          <article key={review.name} className="rounded-2xl border border-line bg-card/70 p-6">
            <p className="text-sm leading-relaxed text-white/85">{review.text}</p>
            <div className="mt-5">
              <p className="font-semibold text-white">{review.name}</p>
              <p className="text-xs text-white/60">{review.role}</p>
            </div>
          </article>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema)
        }}
      />
    </section>
  );
}
