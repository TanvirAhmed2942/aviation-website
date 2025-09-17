import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#22476B] via-[#377D9F] to-[#4DB6D7] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-white/5"></div>
        <div className="absolute bottom-5 right-10 sm:bottom-10 sm:right-20 md:bottom-10 md:right-40 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-white/3"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="xs:col-span-2 md:col-span-1 lg:col-span-1 space-y-4 sm:space-y-5 md:space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded flex items-center justify-center">
                <span className="text-blue-600 font-bold text-base sm:text-lg">✈</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold">NEXFLIGHT</span>
            </div>

            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-xs">
              Luxury aircraft charter at your fingertips. Experience premium
              aviation services with a focus on excellence, safety, and
              personalized travel solutions.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>

            {/* Safety Certifications */}
            <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-5 md:mt-6">
              <div className="bg-white/10 rounded-lg p-2 sm:p-3 text-center text-xs">
                <div className="text-yellow-400 font-bold">WYVERN</div>
                <div className="text-blue-100">CERTIFIED</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2 sm:p-3 text-center text-xs">
                <div className="text-blue-100">AIR CHARTER</div>
                <div className="font-bold">SAFETY</div>
                <div className="text-yellow-400">FOUNDATION</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white">QUICK LINKS</h3>
            <ul className="space-y-2 sm:space-y-3 text-blue-100">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Search Flights
                </a>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-white transition-colors text-xs sm:text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="contact"
                  className="hover:text-white transition-colors text-xs sm:text-sm"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white">PARTNERS</h3>
            <ul className="space-y-2 sm:space-y-3 text-blue-100">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Aviation Parts Executive
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-xs sm:text-sm"
                >
                  NBAA
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-xs sm:text-sm"
                >
                  NATA
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Routes */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white">POPULAR ROUTES</h3>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <h4 className="text-blue-200 text-xs font-medium uppercase tracking-wide mb-1 sm:mb-2">
                  DOMESTIC
                </h4>
                <ul className="space-y-1 sm:space-y-2 text-blue-100">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors text-xs sm:text-sm"
                    >
                      Los Angeles → Miami
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors text-xs sm:text-sm"
                    >
                      New York → Las Vegas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors text-xs sm:text-sm"
                    >
                      San Francisco → Chicago
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-blue-200 text-xs font-medium uppercase tracking-wide mb-1 sm:mb-2">
                  INTERNATIONAL
                </h4>
                <ul className="space-y-1 sm:space-y-2 text-blue-100">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors text-xs sm:text-sm"
                    >
                      Miami → Sao Paulo
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors text-xs sm:text-sm"
                    >
                      New York → Dubai
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors text-xs sm:text-sm"
                    >
                      Los Angeles → London
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="xs:col-span-2 md:col-span-3 lg:col-span-1 space-y-4 sm:space-y-5 md:space-y-6">
            {/* Contact Info */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                CONTACT US
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-2 sm:space-x-3 text-blue-100">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">+1 (800) 555-1234</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 text-blue-100">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">info@nexflight.com</span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3 text-blue-100">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <div>1170 NW 51st</div>
                    <div>Street Fort</div>
                    <div>Lauderdale, Florida</div>
                    <div>33309</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                STAY UPDATED
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm mb-3 sm:mb-4">
                Subscribe for discount alerts and future flights
              </p>

              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white focus:ring-white/20 text-xs sm:text-sm h-9 sm:h-10"
                />
                <Button
                  size="icon"
                  className="bg-white/20 hover:bg-white/30 border-0 flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10"
                >
                  <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-7 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
          <p className="text-blue-200 text-xs sm:text-sm text-center md:text-left">
            © 2025 NexFlight. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6 text-blue-200 text-xs sm:text-sm">
            <a
              href="/terms-condition"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;