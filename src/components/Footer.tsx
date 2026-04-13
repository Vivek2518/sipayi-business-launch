import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-6 w-6" />
            <span className="font-bold">Sipayi Security & Bhagavan Consultancy</span>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            Providing trusted security, manpower, and consultancy services across the region since 2015.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
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

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@sipayisecurity.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Bangalore, Karnataka, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Sipayi Security & Manpower Services & Bhagavan Consultancy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
