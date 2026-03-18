import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "tio | Website Lookbook",
  description: "Discover your website's visual identity through an interactive design brief experience. Select styles, colors, and define your brand personality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} antialiased font-[family-name:var(--font-outfit)]`}>
        <Header />
        <main className="min-h-screen bg-background pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
