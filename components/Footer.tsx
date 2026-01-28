import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo variant="light" size="md" />

          <p className="text-secondary text-sm text-center">
            Discover your website&apos;s visual identity through an interactive design experience.
          </p>

          <div className="flex items-center gap-6 text-sm text-white/70">
            <Link href="/" className="hover:text-secondary transition-colors">
              Home
            </Link>
            <Link href="/brief" className="hover:text-secondary transition-colors">
              Start Brief
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} tio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
