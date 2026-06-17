import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "IPI DIGITAL — Platform Trading & Investasi Terdepan Indonesia",
    template: "%s | IPI DIGITAL",
  },
  description:
    "IPI DIGITAL adalah platform teknologi finansial terdepan di Indonesia. Dapatkan sinyal trading akurat berbasis AI, edukasi trading komprehensif, dan bot trading otomatis 24/7.",
  keywords: [
    "trading signals indonesia",
    "belajar trading",
    "kursus trading",
    "bot trading otomatis",
    "sinyal forex",
    "sinyal kripto",
    "IPI Digital",
  ],
  authors: [{ name: "IPI DIGITAL" }],
  creator: "IPI DIGITAL",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ipidigital.id",
    siteName: "IPI DIGITAL",
    title: "IPI DIGITAL — Platform Trading & Investasi Terdepan Indonesia",
    description:
      "Sinyal trading akurat AI, edukasi terlengkap, dan bot otomatis. Bergabunglah dengan 5.000+ trader sukses Indonesia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPI DIGITAL — Platform Trading Terdepan",
    description: "Sinyal trading akurat AI, edukasi terlengkap, bot otomatis 24/7.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#06060f] text-slate-200 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
