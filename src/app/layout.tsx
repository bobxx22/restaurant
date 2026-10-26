import type { Metadata, Viewport } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
});

const heading = Unbounded({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.type}`,
  description: `${site.tagline}. Меню з цінами, адреса та графік роботи.`,
  openGraph: {
    title: `${site.name} — ${site.type}`,
    description: site.tagline,
    images: [site.hero.posterDesktop],
    locale: "uk_UA",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f1ea",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className={`${body.variable} ${heading.variable} antialiased`}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
