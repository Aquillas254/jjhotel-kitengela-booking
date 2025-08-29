import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Car, Coffee, Tv, Bath, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Rooms = () => {
  const roomTypes = [
    {
      id: 1,
      name: "Standard Room",
      price: "KSh 8,500",
      period: "per night",
      capacity: "2 Guests",
      size: "25 sqm",
      amenities: ["Free Wi-Fi", "Air Conditioning", "Flat Screen TV", "Mini Fridge", "Private Bathroom"],
      features: ["City View", "Work Desk", "Daily Housekeeping"],
      description: "Comfortable and elegantly designed rooms perfect for business travelers and couples.",
      popular: false
    },
    {
      id: 2,
      name: "Deluxe Suite",
      price: "KSh 15,000",
      period: "per night",
      capacity: "3 Guests",
      size: "40 sqm",
      amenities: ["Free Wi-Fi", "Air Conditioning", "Smart TV", "Mini Bar", "Luxury Bathroom", "Balcony"],
      features: ["Garden View", "Separate Living Area", "24/7 Room Service", "Premium Toiletries"],
      description: "Spacious suites with separate living areas, perfect for extended stays and small families.",
      popular: true
    },
    {
      id: 3,
      name: "Executive Suite",
      price: "KSh 25,000",
      period: "per night",
      capacity: "4 Guests",
      size: "60 sqm",
      amenities: ["Free Wi-Fi", "Air Conditioning", "Premium TV", "Full Mini Bar", "Jacuzzi", "Private Balcony"],
      features: ["Panoramic Views", "Executive Lounge Access", "Butler Service", "Premium Amenities"],
      description: "Our flagship accommodation offering the ultimate in luxury and comfort.",
      popular: false
    },
    {
      id: 4,
      name: "Family Room",
      price: "KSh 18,000",
      period: "per night",
      capacity: "5 Guests",
      size: "50 sqm",
      amenities: ["Free Wi-Fi", "Air Conditioning", "Multiple TVs", "Kitchenette", "Family Bathroom"],
      features: ["Connecting Rooms", "Child-Friendly", "Extra Space", "Family Activities"],
      description: "Specially designed for families with children, offering comfort and convenience for all ages.",
      popular: false
    }
  ];

  const globalAmenities = [
    { icon: Wifi, name: "Free Wi-Fi" },
    { icon: Car, name: "Free Parking" },
    { icon: Coffee, name: "24/7 Room Service" },
    { icon: Tv, name: "Entertainment" },
    { icon: Bath, name: "Luxury Bathrooms" },
    { icon: Users, name: "Concierge Service" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
            Rooms & <span className="text-luxury-gold">Suites</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our collection of elegantly appointed accommodations, each designed to provide 
            the perfect blend of comfort, luxury, and modern amenities.
          </p>
        </div>
      </section>

      {/* Global Amenities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Included with Every Stay</h2>
            <p className="text-muted-foreground">Premium amenities that come standard in all our rooms</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {globalAmenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-3">
                  <amenity.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground">{amenity.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">Choose Your Perfect Stay</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From comfortable standard rooms to luxurious executive suites, we have the perfect 
              accommodation for every type of traveler.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {roomTypes.map((room) => (
              <Card key={room.id} className="gradient-card shadow-card border-0 hover:shadow-luxury transition-all duration-300 relative overflow-hidden">
                {room.popular && (
                  <Badge className="absolute top-4 right-4 bg-luxury-gold text-luxury-brown z-10">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Most Popular
                  </Badge>
                )}
                
                <CardContent className="p-8">
                  {/* Room Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">{room.name}</h3>
                    <p className="text-muted-foreground mb-4">{room.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{room.capacity}</span>
                      <span>•</span>
                      <span>{room.size}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Amenities</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {room.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full mr-2 flex-shrink-0"></div>
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Special Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3 text-foreground">Special Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Price and Booking */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-luxury-gold">{room.price}</div>
                      <div className="text-sm text-muted-foreground">{room.period}</div>
                    </div>
                    <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                      <Link to="/reservations">Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary-foreground">
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Experience luxury and comfort at J & J Hotel. Book now and enjoy our exclusive amenities and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/reservations">Make Reservation</Link>
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

export default Rooms;