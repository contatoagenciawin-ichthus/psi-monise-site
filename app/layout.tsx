import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloating } from "@/components/whatsapp-floating";

import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Empório Liasch | Vinhos e Experiências",
  description: "Mais que vinhos, momentos. Experiências que ficam para sempre.",
  generator: "v0.app",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${openSans.variable} font-sans bg-cream text-wood antialiased`}
      >
        <Navbar />

        {children}

        <Footer />
        <WhatsAppFloating />

        <Analytics />
      </body>
    </html>
  );
}
