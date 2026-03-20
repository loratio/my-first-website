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
  title: "Website Launchpad | Start Your Website Build | TIO International",
  description: "Shape your website in minutes, not meetings. Work through our interactive, guided process and we'll turn your ideas into a clear, build-ready plan.",
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
