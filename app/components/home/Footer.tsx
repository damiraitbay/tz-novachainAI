import type { NavLink } from "../../lib/home-data";

type FooterProps = {
  navLinks: NavLink[];
};

export function Footer({ navLinks }: FooterProps) {
  return (
    <footer className="border-t border-line/80">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-10 text-sm text-white/65 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-[var(--font-sora)] text-base text-white/92">NovaChain AI</p>
          <p className="mt-3 max-w-xs text-white/65">
            Infrastructure for payments, compliance automation and AI-driven fraud prevention.
          </p>
          <p className="mt-4 text-xs text-white/55">(c) {new Date().getFullYear()} NovaChain AI. All rights reserved.</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">Navigation</p>
          <nav className="mt-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <address className="not-italic">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">Contacts</p>
          <div className="mt-3 flex flex-col gap-2">
            <a href="mailto:hello@novachain.ai" className="transition hover:text-white">
              hello@novachain.ai
            </a>
            <a href="tel:+97145550000" className="transition hover:text-white">
              +971 4 555 0000
            </a>
            <p>Dubai International Financial Centre, UAE</p>
            <a href="#platform" className="transition hover:text-white">
              Back to top
            </a>
          </div>
        </address>
      </div>
    </footer>
  );
}
