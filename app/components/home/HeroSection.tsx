import Image from "next/image";

export function HeroSection() {
  return (
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
            src="/hero.webp"
            alt="NovaChain AI network robots and blockchain loop"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 1500px"
          />
        </div>
      </div>
    </section>
  );
}
