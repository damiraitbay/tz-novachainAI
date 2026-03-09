import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import { siteConfig } from "./config/site";
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
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.ogDescription,
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1500,
        height: 682,
        alt: siteConfig.ogImageAlt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.ogDescription,
    images: [siteConfig.ogImage]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${sora.variable} bg-bg font-[var(--font-space-grotesk)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
