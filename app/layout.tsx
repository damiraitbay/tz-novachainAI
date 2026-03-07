import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora"
});

export const metadata: Metadata = {
  title: "NovaChain AI - Scalable Infrastructure",
  description:
    "NovaChain AI combines blockchain speed with AI-driven security for modern fintech platforms.",
  openGraph: {
    title: "NovaChain AI - Scalable Infrastructure",
    description:
      "Landing page inspired by Serendale style: high-performance blockchain and AI security.",
    type: "website",
    url: "https://example.com",
    siteName: "NovaChain AI"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${spaceGrotesk.variable} ${sora.variable} bg-bg font-[var(--font-space-grotesk)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
