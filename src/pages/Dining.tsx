import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Wine, Utensils, ChefHat, Star, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

const Dining = () => {
  const diningOptions = [
    {
      name: "The Golden Terrace Restaurant",
      type: "Fine Dining",
      cuisine: "International & Local",
      hours: "6:00 AM - 11:00 PM",
      capacity: "120 Guests",
      description: "Our signature restaurant offering an exquisite blend of international cuisine and authentic Kenyan flavors in an elegant setting.",
      specialties: ["Grilled Nyama Choma", "Continental Breakfast", "Seafood Specialties", "Vegetarian Options"],
      priceRange: "KSh 1,500 - 4,500",
      featured: true
    },
    {
      name: "Sunset Lounge & Bar",
      type: "Casual Dining",
      cuisine: "Light Bites & Cocktails",
      hours: "4:00 PM - 2:00 AM",
      capacity: "60 Guests",
      description: "Relax and unwind in our sophisticated lounge, featuring premium wines, crafted cocktails, and light appetizers.",
      specialties: ["Signature Cocktails", "Wine Selection", "Artisan Cheese Board", "Gourmet Snacks"],
      priceRange: "KSh 800 - 2,500",
      featured: false
    },
    {
      name: "Coffee Corner",
      type: "Café",
      cuisine: "Coffee & Pastries",
      hours: "5:30 AM - 10:00 PM",
      capacity: "30 Guests",
      description: "Start your day with freshly brewed coffee, artisan pastries, and light breakfast options in our cozy café setting.",
      specialties: ["Kenyan Coffee", "Fresh Pastries", "Breakfast Wraps", "Healthy Smoothies"],
      priceRange: "KSh 200 - 1,200",
      featured: false
    }
  ];

  const menuCategories = [
    {
      category: "Breakfast",
      time: "6:00 AM - 11:00 AM",
      items: [
        { name: "Continental Breakfast", price: "KSh 1,800", desc: "Fresh fruits, pastries, cereals, and beverages" },
        { name: "English Breakfast", price: "KSh 2,200", desc: "Eggs, bacon, sausages, beans, toast, and coffee" },
        { name: "Kenyan Breakfast", price: "KSh 1,500", desc: "Mandazi, chai, seasonal fruits, and local delicacies" }
      ]
    },
    {
      category: "Main Courses",
      time: "12:00 PM - 10:00 PM",
      items: [
        { name: "Nyama Choma Platter", price: "KSh 3,200", desc: "Grilled meat served with ugali and sukuma wiki" },
        { name: "Seafood Paella", price: "KSh 4,500", desc: "Spanish-style rice with fresh seafood and spices" },
        { name: "Grilled Tilapia", price: "KSh 2,800", desc: "Fresh tilapia with steamed vegetables and rice" }
      ]
    },
    {
      category: "Beverages",
      time: "All Day",
      items: [
        { name: "Kenyan Coffee", price: "KSh 400", desc: "Locally sourced premium coffee beans" },
        { name: "Fresh Juice", price: "KSh 350", desc: "Seasonal fruit juices made to order" },
        { name: "Signature Cocktail", price: "KSh 1,200", desc: "House specialty crafted cocktails" }
      ]
    }
  ];

  const diningPackages = [
    {
      name: "Romantic Dinner Package",
      price: "KSh 8,500",
      duration: "2 people",
      includes: ["3-course dinner", "Bottle of wine", "Private table setup", "Complimentary dessert"],
      perfect: "Couples & Special Occasions"
    },
    {
      name: "Business Lunch",
      price: "KSh 2,500",
      duration: "per person",
      includes: ["2-course meal", "Coffee/Tea", "Wi-Fi access", "Meeting room for 2 hours"],
      perfect: "Corporate Meetings"
    },
    {
      name: "Family Feast",
      price: "KSh 12,000",
      duration: "up to 6 people",
      includes: ["Buffet dinner", "Kids menu", "Family games", "Complimentary soft drinks"],
      perfect: "Family Gatherings"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
            Dining <span className="text-luxury-gold">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Embark on a culinary journey that celebrates both international flavors and authentic 
            Kenyan cuisine, crafted with passion and served with excellence.
          </p>
        </div>
      </section>

      {/* Dining Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">Our Dining Venues</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From fine dining to casual encounters, discover the perfect setting for every occasion.
            </p>
          </div>

          <div className="space-y-8">
            {diningOptions.map((venue, index) => (
              <Card key={index} className="gradient-card shadow-card border-0 hover:shadow-luxury transition-all duration-300 relative overflow-hidden">
                {venue.featured && (
                  <Badge className="absolute top-6 right-6 bg-luxury-gold text-luxury-brown z-10">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Signature Restaurant
                  </Badge>
                )}
                
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge variant="outline" className="border-luxury-gold text-luxury-gold">
                          {venue.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{venue.cuisine}</span>
                      </div>
                      
                      <h3 className="text-3xl font-serif font-bold mb-4 text-foreground">{venue.name}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{venue.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 text-luxury-gold" />
                          <span>{venue.hours}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4 text-luxury-gold" />
                          <span>{venue.capacity}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Utensils className="w-4 h-4 text-luxury-gold" />
                          <span>{venue.priceRange}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Signature Dishes</h4>
                        <div className="flex flex-wrap gap-2">
                          {venue.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="text-center lg:text-right">
                      <div className="mb-6">
                        {venue.type === "Fine Dining" && <ChefHat className="w-16 h-16 text-luxury-gold mx-auto lg:ml-auto lg:mr-0" />}
                        {venue.type === "Casual Dining" && <Wine className="w-16 h-16 text-luxury-gold mx-auto lg:ml-auto lg:mr-0" />}
                        {venue.type === "Café" && <Coffee className="w-16 h-16 text-luxury-gold mx-auto lg:ml-auto lg:mr-0" />}
                      </div>
                      <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                        <Link to="/reservations">Make Reservation</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Menu */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">Sample Menu</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A taste of our culinary offerings - our full menu features many more delicious options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {menuCategories.map((category, index) => (
              <Card key={index} className="gradient-card shadow-card border-0">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">{category.category}</h3>
                    <p className="text-sm text-luxury-gold">{category.time}</p>
                  </div>
                  <div className="space-y-6">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="border-b border-border/50 pb-4 last:border-b-0 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-foreground">{item.name}</h4>
                          <span className="text-luxury-gold font-bold">{item.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">Dining Packages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Special curated experiences for memorable occasions and convenient dining solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diningPackages.map((pkg, index) => (
              <Card key={index} className="gradient-card shadow-card border-0 hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">{pkg.name}</h3>
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-luxury-gold">{pkg.price}</div>
                    <div className="text-sm text-muted-foreground">{pkg.duration}</div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Includes:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center justify-center">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full mr-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <Badge variant="outline" className="border-luxury-gold text-luxury-gold">
                      Perfect for {pkg.perfect}
                    </Badge>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <Link to="/reservations">Book Package</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary-foreground">
            Reserve Your Table Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Experience exceptional dining at J & J Hotel. Make a reservation and taste the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/reservations">Make Reservation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Call Restaurant</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dining;