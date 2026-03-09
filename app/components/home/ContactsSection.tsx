export function ContactsSection() {
  return (
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
  );
}
