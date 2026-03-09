import type { NavLink } from "../../lib/home-data";

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

type HeaderProps = {
  navLinks: NavLink[];
};

export function Header({ navLinks }: HeaderProps) {
  return (
    <header className="mx-auto w-full max-w-[1320px] px-5 py-7 md:px-8">
      <div className="flex items-center justify-between gap-4">
        <a href="#top" className="font-[var(--font-sora)] text-sm tracking-[0.16em] text-white/95 md:text-[21px]">
          NOVACHAIN AI
        </a>

        <div className="relative md:hidden">
          <details className="group">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-line bg-card/80 text-white/90 transition hover:border-white/80 [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Toggle navigation menu</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </summary>

            <nav
              aria-label="Primary navigation mobile"
              className="absolute right-0 z-20 mt-3 w-56 rounded-2xl border border-line bg-card/95 p-2 shadow-neon backdrop-blur"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-xl px-3 py-2 text-sm text-white/82 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
        </div>

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
      </div>
    </header>
  );
}
