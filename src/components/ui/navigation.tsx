import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/rooms", label: "Rooms & Suites" },
    { href: "/dining", label: "Dining" },
    { href: "/events", label: "Events" },
    { href: "/reservations", label: "Reservations" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center shadow-luxury">
              <span className="text-primary-foreground font-bold text-lg">J&J</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-serif font-bold text-foreground">J & J Hotel</h1>
              <p className="text-xs text-luxury-gold">Kitengela</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive(item.href) 
                    ? "text-primary border-b-2 border-primary pb-1" 
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+254 123 456 789</span>
            </div>
            <Button variant="default" size="sm" asChild>
              <Link to="/reservations">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary px-2 py-1",
                    isActive(item.href) 
                      ? "text-primary bg-primary/10 rounded" 
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border flex flex-col space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground px-2">
                  <Phone className="w-4 h-4" />
                  <span>+254 123 456 789</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground px-2">
                  <Mail className="w-4 h-4" />
                  <span>info@jjhotel.com</span>
                </div>
                <Button variant="default" size="sm" className="mx-2" asChild>
                  <Link to="/reservations" onClick={() => setIsOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;