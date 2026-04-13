import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap gap-y-10">
        {/* Company - Fixed width on large screens */}
        <div className="w-full lg:w-1/3 pr-8">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-6 w-6" />
            <span className="font-bold">Sipayi Security & Bhagavan Consultancy</span>
          </div>
          <p className="text-sm opacity-80 leading-relaxed mb-6">
            Providing trusted security, manpower, and consultancy services across the region since 2015.
          </p>
          {/* Social Media Links */}
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity" aria-label="WhatsApp">
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Links Container - Distributed to cover the gap */}
        <div className="w-full lg:w-2/3 flex flex-wrap justify-between gap-y-10 gap-x-8">
          {/* Quick Links */}
          <div className="min-w-[140px]">
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {["/", "/services", "/about", "/contact", "/faq"].map((to) => (
                <li key={to}>
                  <Link to={to} className="hover:opacity-100 transition-opacity">
                    {to === "/" ? "Home" : to.slice(1).charAt(0).toUpperCase() + to.slice(2)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-[180px]">
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/services#security" className="hover:opacity-100 transition-opacity">Security Services</Link></li>
              <li><Link to="/services#manpower" className="hover:opacity-100 transition-opacity">Manpower Supply</Link></li>
              <li><Link to="/services#consultancy" className="hover:opacity-100 transition-opacity">Consultancy Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-[260px] max-w-sm">
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 shrink-0 mt-0.5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 shrink-0 mt-0.5" />
                <span>info@sipayisecurity.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>#8/2,1 8/2, Ist FLOOR, ABOVE NARAYANA KITCHEN, NEAR DOMLAR FLY OVER RING ROAD DOMLUR LAYOUT, BENGALURU 560071</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Sipayi Security & Manpower Services & Bhagavan Consultancy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
