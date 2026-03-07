import Image from "next/image";

const navLinks = [
  { href: "#platform", label: "Platform" },
  { href: "#features", label: "Features" },
  { href: "#solutions", label: "Solutions" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contacts", label: "Contacts" }
];

const socialLinks = [
  {
    href: "https://github.com",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
        <path d="M12 .5A11.5 11.5 0 0 0 .5 12.23a11.5 11.5 0 0 0 7.86 10.97c.58.11.78-.25.78-.56v-2.15c-3.2.72-3.87-1.57-3.87-1.57-.52-1.35-1.28-1.7-1.28-1.7-1.05-.73.08-.72.08-.72 1.16.09 1.78 1.22 1.78 1.22 1.04 1.82 2.72 1.3 3.38.99.1-.77.4-1.3.73-1.6-2.55-.3-5.23-1.3-5.23-5.79 0-1.28.45-2.33 1.19-3.16-.12-.3-.52-1.5.11-3.13 0 0 .98-.32 3.2 1.2a10.88 10.88 0 0 1 5.84 0c2.22-1.52 3.2-1.2 3.2-1.2.63 1.63.23 2.83.11 3.13.74.83 1.2 1.88 1.2 3.16 0 4.5-2.69 5.48-5.25 5.78.41.37.78 1.1.78 2.2v3.26c0 .3.21.67.79.55a11.5 11.5 0 0 0 7.84-10.97A11.5 11.5 0 0 0 12 .5Z" />
      </svg>
    )
  },
  {
    href: "https://discord.com",
    label: "Discord",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
        <path d="M20.24 4.35A16.58 16.58 0 0 0 16.1 3l-.2.4a15.6 15.6 0 0 1 3.9 1.5A12.05 12.05 0 0 0 12 2.5 12.07 12.07 0 0 0 4.2 4.9 15.82 15.82 0 0 1 8.1 3.4l-.2-.4a16.6 16.6 0 0 0-4.15 1.35C1.15 8.1.45 11.74.73 15.32A16.74 16.74 0 0 0 5.8 17.9l1.08-1.53c-.6-.2-1.17-.46-1.7-.78.14.1.28.2.43.3 1.95 1.3 4.3 1.98 6.4 1.98s4.45-.68 6.4-1.98c.14-.1.29-.2.43-.3-.54.32-1.11.58-1.7.78l1.08 1.53a16.73 16.73 0 0 0 5.08-2.58c.33-4.15-.56-7.76-2.06-10.97ZM8.9 13.52c-.75 0-1.36-.7-1.36-1.55s.6-1.55 1.36-1.55c.76 0 1.37.7 1.36 1.55 0 .85-.6 1.55-1.36 1.55Zm6.2 0c-.75 0-1.36-.7-1.36-1.55s.6-1.55 1.36-1.55c.76 0 1.37.7 1.36 1.55 0 .85-.6 1.55-1.36 1.55Z" />
      </svg>
    )
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
        <path d="M23.52 7.3a2.94 2.94 0 0 0-2.06-2.08C19.57 4.7 12 4.7 12 4.7s-7.57 0-9.46.52A2.94 2.94 0 0 0 .48 7.3 30.67 30.67 0 0 0 0 12a30.67 30.67 0 0 0 .48 4.7 2.9 2.9 0 0 0 2.06 2.05c1.89.55 9.46.55 9.46.55s7.57 0 9.46-.55a2.9 2.9 0 0 0 2.06-2.05A30.67 30.67 0 0 0 24 12a30.67 30.67 0 0 0-.48-4.7ZM9.6 14.9V9.1L14.8 12l-5.2 2.9Z" />
      </svg>
    )
  },
  {
    href: "https://x.com",
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
        <path d="M18.9 2.5h3.3l-7.22 8.27L23.5 21.5h-6.67l-5.22-6.83-5.96 6.83H2.36l7.72-8.84L.5 2.5h6.84l4.72 6.24L18.9 2.5Zm-1.17 17h1.82L6.35 4.38H4.4L17.73 19.5Z" />
      </svg>
    )
  }
];

const features = [
  {
    title: "120K TPS throughput",
    text: "Stable transaction speed for high-load payment and scoring scenarios.",
    icon: "01"
  },
  {
    title: "AI risk engine",
    text: "Real-time anomaly detection and adaptive fraud prevention.",
    icon: "02"
  },
  {
    title: "Fast integration",
    text: "SDK and API-first setup to launch in days, not months.",
    icon: "03"
  },
  {
    title: "Secure consensus",
    text: "Proof-of-Stake architecture tuned for fintech-grade reliability.",
    icon: "04"
  }
];

const useCases = [
  {
    title: "Digital Banking",
    text: "Instant settlements and anti-fraud workflows across retail products.",
    cta: "Talk to architecture team"
  },
  {
    title: "Cross-border Payments",
    text: "Lower fee routing with compliance-ready transaction tracing.",
    cta: "Request pilot"
  },
  {
    title: "Embedded Finance",
    text: "Launch branded wallet and card experiences with API orchestration.",
    cta: "See integration plan"
  }
];

const roadmap = [
  { quarter: "Q2 2026", item: "Enterprise dashboard 2.0 and SLA analytics" },
  { quarter: "Q3 2026", item: "Multi-region validator clusters (EU + MENA)" },
  { quarter: "Q4 2026", item: "Advanced AI model marketplace for risk policies" }
];

const testimonials = [
  {
    name: "Iryna Smolina",
    role: "Product Lead, FinPilot",
    text: "After migration to NovaChain AI, transaction processing time dropped by 68%.",
    rating: 5
  },
  {
    name: "Maxim Dorofeev",
    role: "CTO, ClearBanking",
    text: "The onboarding flow is excellent: product design and technical delivery are both strong.",
    rating: 5
  },
  {
    name: "Dana Miller",
    role: "Head of Ops, FluxPay",
    text: "We launched in two regions with zero incidents and measurable reduction in chargebacks.",
    rating: 5
  }
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NovaChain AI",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: testimonials.length.toString()
  },
  review: testimonials.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.name
    },
    reviewBody: review.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating.toString(),
      bestRating: "5"
    }
  }))
};

export default function Home() {
  return (
    <div className="noise-bg bg-hero-grid">
      <header className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-5 py-7 md:px-8">
        <a href="#top" className="font-[var(--font-sora)] text-sm tracking-[0.16em] text-white/95 md:text-[21px]">
          NOVACHAIN AI
        </a>

        <nav aria-label="Primary navigation" className="hidden gap-8 text-[13px] text-white/82 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 text-white/80 md:flex">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </header>

      <main id="top">
        <section id="platform" className="relative overflow-hidden px-5 pb-24 pt-16 md:px-8 md:pb-28 md:pt-28">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
            <h1 className="mt-5 bg-gradient-to-r from-neonPink via-white to-neonBlue bg-clip-text font-[var(--font-sora)] text-4xl uppercase leading-tight text-transparent sm:text-5xl md:text-[76px]">
              NovaChain AI Infrastructure
            </h1>
            <p className="mt-1 text-4xl font-medium leading-tight text-white sm:text-5xl md:text-[66px]">Scalable. Secure. Fast.</p>
            <p className="mt-5 max-w-2xl text-sm text-white/72 md:text-lg">
              Build fintech products on blockchain speed with AI-powered security controls and enterprise-grade uptime.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contacts"
                className="rounded-full border border-neonPink/80 px-8 py-3 text-sm font-medium text-white transition hover:border-neonPink"
              >
                Get started
              </a>
              <a
                href="#features"
                className="rounded-full border border-white/55 px-8 py-3 text-sm font-medium text-white transition hover:border-white"
              >
                Read more
              </a>
            </div>
          </div>

          <div className="mx-auto mt-12 w-full max-w-[1500px]">
            <div className="relative mx-auto aspect-[2017/917] w-full">
              <Image
                src="/hero.png"
                alt="NovaChain AI network robots and blockchain loop"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 1500px"
              />
            </div>
          </div>
        </section>

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

        <section id="testimonials" className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="font-[var(--font-sora)] text-3xl text-white md:text-4xl">Client testimonials</h2>
            <p className="max-w-lg text-sm text-white/70 md:text-base">
              Teams already running NovaChain AI in production.
            </p>
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

        <section id="contacts" className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-card/70 p-6">
              <h2 className="font-[var(--font-sora)] text-3xl text-white md:text-4xl">Contact NovaChain AI</h2>
              <p className="mt-4 text-sm text-white/70 md:text-base">
                Share your use case and we will return architecture proposal within 24 hours.
              </p>
              <div className="mt-6 space-y-3 text-sm text-white/80">
                <p>
                  Email: <a href="mailto:hello@novachain.ai" className="text-neonBlue">hello@novachain.ai</a>
                </p>
                <p>
                  Telegram: <a href="https://t.me/novachain_support" className="text-neonBlue">@novachain_support</a>
                </p>
                <p>HQ: Dubai, UAE</p>
              </div>
            </div>

            <form
              action="mailto:hello@novachain.ai"
              method="post"
              encType="text/plain"
              className="rounded-2xl border border-line bg-card/70 p-6"
            >
              <label className="mb-2 block text-sm text-white/80" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mb-4 w-full rounded-xl border border-line bg-bg/70 px-4 py-3 text-sm text-white outline-none transition focus:border-neonBlue"
              />

              <label className="mb-2 block text-sm text-white/80" htmlFor="email">
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mb-4 w-full rounded-xl border border-line bg-bg/70 px-4 py-3 text-sm text-white outline-none transition focus:border-neonBlue"
              />

              <label className="mb-2 block text-sm text-white/80" htmlFor="message">
                Project goals
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mb-5 w-full rounded-xl border border-line bg-bg/70 px-4 py-3 text-sm text-white outline-none transition focus:border-neonBlue"
              />

              <button
                type="submit"
                className="rounded-full border border-neonPink/80 px-8 py-3 text-sm font-medium text-white transition hover:border-neonPink"
              >
                Send request
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-5 py-10 text-sm text-white/65 md:flex-row md:items-center md:px-8">
          <p>(c) {new Date().getFullYear()} NovaChain AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#platform" className="transition hover:text-white">
              Back to top
            </a>
            <a href="mailto:hello@novachain.ai" className="transition hover:text-white">
              hello@novachain.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
