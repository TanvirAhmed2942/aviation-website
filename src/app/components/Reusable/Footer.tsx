import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#22476B] via-[#377D9F] to-[#4DB6D7] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white/5"></div>
        <div className="absolute bottom-10 right-40 w-64 h-64 rounded-full bg-white/3"></div>
      </div>

      <div className="relative z-10 container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">✈</span>
              </div>
              <span className="text-2xl font-bold">NEXFLIGHT</span>
            </div>

            <p className="text-blue-100 text-sm leading-relaxed">
              Luxury aircraft charter at your fingertips. Experience premium aviation services with a focus on excellence, safety, and personalized travel solutions.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Safety Certifications */}
            <div className="flex space-x-4 mt-6">
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-yellow-400 font-bold text-xs">WYVERN</div>
                <div className="text-xs text-blue-100">CERTIFIED</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-xs text-blue-100">AIR CHARTER</div>
                <div className="font-bold text-xs">SAFETY</div>
                <div className="text-yellow-400 text-xs">FOUNDATION</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">QUICK LINKS</h3>
            <ul className="space-y-3 text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors text-sm">Search Flights</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">FAQs</a></li>
            </ul>
          </div>

          {/* Partners */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">PARTNERS</h3>
            <ul className="space-y-3 text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors text-sm">Aviation Parts Executive</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">NBAA</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">NATA</a></li>
            </ul>
          </div>

          {/* Popular Routes */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">POPULAR ROUTES</h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-blue-200 text-xs font-medium uppercase tracking-wide mb-2">DOMESTIC</h4>
                <ul className="space-y-2 text-blue-100">
                  <li><a href="#" className="hover:text-white transition-colors text-sm">Los Angeles → Miami</a></li>
                  <li><a href="#" className="hover:text-white transition-colors text-sm">New York → Las Vegas</a></li>
                  <li><a href="#" className="hover:text-white transition-colors text-sm">San Francisco → Chicago</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-blue-200 text-xs font-medium uppercase tracking-wide mb-2">INTERNATIONAL</h4>
                <ul className="space-y-2 text-blue-100">
                  <li><a href="#" className="hover:text-white transition-colors text-sm">Miami → Sao Paulo</a></li>
                  <li><a href="#" className="hover:text-white transition-colors text-sm">New York → Dubai</a></li>
                  <li><a href="#" className="hover:text-white transition-colors text-sm">Los Angeles → London</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">CONTACT US</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-blue-100">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">+1 (800) 555-1234</span>
                </div>
                <div className="flex items-center space-x-3 text-blue-100">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">info@nexflight.com</span>
                </div>
                <div className="flex items-start space-x-3 text-blue-100">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
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
              <h3 className="text-lg font-semibold text-white mb-2">STAY UPDATED</h3>
              <p className="text-blue-100 text-sm mb-4">Subscribe for discount alerts and future flights</p>

              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white focus:ring-white/20"
                />
                <Button size="icon" className="bg-white/20 hover:bg-white/30 border-0 flex-shrink-0">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-blue-200 text-sm">© 2025 NexFlight. All rights reserved.</p>
          <div className="flex space-x-6 text-blue-200 text-sm">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;