import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maxim Vinduespolering – Vinduespudser i Midt- og Østjylland",
    template: "%s | Maxim Vinduespolering",
  },
  description:
    "Professionel vinduespudser i Midt- og Østjylland. Få et gratis tilbud inden for 24 timer. Priser fra 90 kr. inkl. moms. Stabil service – vi kommer når vi siger det.",
  metadataBase: new URL("https://maxim-vinduespolering.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="da" className={inter.variable}>
      <body className="min-h-screen bg-white text-ink antialiased">
        <Header />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
