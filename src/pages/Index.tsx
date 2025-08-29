import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Wifi, Car, Coffee, Utensils, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Welcome Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
              Welcome to <span className="text-luxury-gold">J & J Hotel</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nestled in the heart of Kitengela, J & J Hotel offers an exceptional blend of luxury, 
              comfort, and warm hospitality. Experience the perfect getaway where every detail is 
              crafted for your ultimate satisfaction.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Star, title: "5-Star Service", desc: "Exceptional hospitality at every touchpoint" },
              { icon: Wifi, title: "Free Wi-Fi", desc: "High-speed internet throughout the property" },
              { icon: Car, title: "Free Parking", desc: "Secure parking for all our guests" },
              { icon: Coffee, title: "24/7 Room Service", desc: "Delicious meals delivered anytime" },
            ].map((feature, index) => (
              <Card key={index} className="gradient-card shadow-card border-0 hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Highlights Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="gradient-card shadow-card border-0 hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <Utensils className="w-12 h-12 text-luxury-gold mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Fine Dining</h3>
                <p className="text-muted-foreground mb-6">
                  Savor exquisite cuisine crafted by our talented chefs. From local delicacies 
                  to international favorites, every meal is a culinary adventure.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/dining">Explore Menu</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card border-0 hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-luxury-gold mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Luxury Rooms</h3>
                <p className="text-muted-foreground mb-6">
                  Elegantly appointed suites and rooms designed for your comfort. Experience 
                  the perfect blend of modern amenities and timeless elegance.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/rooms">View Rooms</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card border-0 hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-luxury-gold mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Events & Meetings</h3>
                <p className="text-muted-foreground mb-6">
                  Host your special occasions in our versatile event spaces. From intimate 
                  gatherings to grand celebrations, we make every moment memorable.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/events">Plan Event</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary-foreground">
            Ready for an Unforgettable Stay?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Book your luxury experience today and discover why J & J Hotel is Kitengela's 
            premier destination for discerning travelers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/reservations">Book Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
