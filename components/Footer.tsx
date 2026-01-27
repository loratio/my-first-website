import Link from "next/link";
import { Smile, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a4d3e] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Smile className="h-9 w-9 text-[#c9707d]" />
              <span className="text-2xl font-semibold font-[family-name:var(--font-cormorant)]">Lora Ortho</span>
            </Link>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              Creating beautiful smiles and confident patients since 2009.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-5 font-[family-name:var(--font-cormorant)] text-lg">Treatments</h4>
            <ul className="space-y-3 text-white/60 text-sm font-light">
              <li>
                <Link href="/treatments/clear-aligners/invisalign" className="hover:text-[#c9707d] transition-colors">
                  Invisalign
                </Link>
              </li>
              <li>
                <Link href="/treatments/clear-aligners/angel-aligner" className="hover:text-[#c9707d] transition-colors">
                  Angel Aligner
                </Link>
              </li>
              <li>
                <Link href="/treatments/braces/metal-braces" className="hover:text-[#c9707d] transition-colors">
                  Metal Braces
                </Link>
              </li>
              <li>
                <Link href="/treatments/braces/clear-braces" className="hover:text-[#c9707d] transition-colors">
                  Clear Braces
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-5 font-[family-name:var(--font-cormorant)] text-lg">Quick Links</h4>
            <ul className="space-y-3 text-white/60 text-sm font-light">
              <li>
                <Link href="/about-us" className="hover:text-[#c9707d] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-[#c9707d] transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/costs" className="hover:text-[#c9707d] transition-colors">
                  Costs
                </Link>
              </li>
              <li>
                <Link href="/for-patients/blog" className="hover:text-[#c9707d] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-5 font-[family-name:var(--font-cormorant)] text-lg">Contact</h4>
            <ul className="space-y-3 text-white/60 text-sm font-light">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Oxford & Leigh-on-Sea</span>
              </li>
              <li>
                <a href="tel:01865248816" className="flex items-center gap-2 hover:text-[#c9707d] transition-colors">
                  <Phone className="h-4 w-4" />
                  01865 248816
                </a>
              </li>
              <li>
                <a href="mailto:hello@loraortho.com" className="flex items-center gap-2 hover:text-[#c9707d] transition-colors">
                  <Mail className="h-4 w-4" />
                  hello@loraortho.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm font-light gap-4">
          <p>&copy; {new Date().getFullYear()} Lora Ortho. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-[#c9707d] transition-colors">Contact</Link>
            <Link href="/for-patients/patient-resources/refer-a-friend" className="hover:text-[#c9707d] transition-colors">Referrals</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
