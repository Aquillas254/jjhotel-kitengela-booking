import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-brown text-luxury-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">J&J</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">J & J Hotel</h3>
                <p className="text-sm text-luxury-gold-light">Kitengela</p>
              </div>
            </div>
            <p className="text-sm text-luxury-white/80 leading-relaxed">
              Experience luxury and comfort in the heart of Kitengela. Our commitment to excellence ensures your stay is nothing short of exceptional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-luxury-gold-light">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/rooms", label: "Rooms & Suites" },
                { href: "/dining", label: "Dining" },
                { href: "/events", label: "Events" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-luxury-white/80 hover:text-luxury-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-luxury-gold-light">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold-light mt-0.5 flex-shrink-0" />
                <div className="text-sm text-luxury-white/80">
                  <p>Kitengela Town Center</p>
                  <p>Kajiado County, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold-light flex-shrink-0" />
                <span className="text-sm text-luxury-white/80">+254 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold-light flex-shrink-0" />
                <span className="text-sm text-luxury-white/80">info@jjhotel.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-luxury-gold-light">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="p-2 bg-luxury-white/10 rounded-lg hover:bg-luxury-gold-light/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-luxury-white/10 rounded-lg hover:bg-luxury-gold-light/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-luxury-white/10 rounded-lg hover:bg-luxury-gold-light/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm text-luxury-white/80">
              <p className="mb-2">Stay updated with our latest news and offers.</p>
              <Link 
                to="/reservations" 
                className="inline-block bg-luxury-gold hover:bg-luxury-gold-light text-luxury-brown px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-luxury-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-luxury-white/60">
            © 2024 J & J Hotel Kitengela. All rights reserved. | 
            <span className="text-luxury-gold-light"> Built with excellence for your comfort.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;