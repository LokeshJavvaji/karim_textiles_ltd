
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karim Textiles Ltd - Expert Textile Manufacturers",
  description: "Karim Textiles Ltd specializes in manufacturing high-quality textiles, including weaving and finishing of textiles, and production of women's outerwear. Based in the UK with expertise in delivering premium textile products.",
  keywords: "textile manufacturers, weaving of textiles, finishing of textiles, women's outerwear, UK textile companies, garment production",
  authors: [
    {
      name: "Karim Textiles Ltd",
      url: "https://www.karimtextiles.com", // Add company website URL if available
    },
  ],
  robots: "index, follow",
};


export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
