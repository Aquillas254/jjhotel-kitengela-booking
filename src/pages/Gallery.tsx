import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import hotelRoom1 from "@/assets/hotel-room-1.jpg";
import hotelRoom2 from "@/assets/hotel-room-2.jpg";
import conferenceRoom1 from "@/assets/hotel-conference-room-1.jpg";
import conferenceRoom2 from "@/assets/hotel-conference-room-2.jpg";
import hotelDrink1 from "@/assets/hotel-drink-1.jpg";
import hotelDrink2 from "@/assets/hotel-drink-2.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: hotelRoom1,
      title: "Guest Room",
      category: "Accommodations",
      description: "Comfortable and well-appointed guest room with modern amenities."
    },
    {
      id: 2,
      image: hotelRoom2,
      title: "Standard Room",
      category: "Accommodations",
      description: "Spacious room featuring all essential amenities for a comfortable stay."
    },
    {
      id: 3,
      image: conferenceRoom1,
      title: "Conference Room",
      category: "Business Facilities",
      description: "Professional meeting space equipped for corporate events and conferences."
    },
    {
      id: 4,
      image: conferenceRoom2,
      title: "Meeting Hall",
      category: "Business Facilities",
      description: "Spacious venue perfect for seminars, workshops, and business meetings."
    },
    {
      id: 5,
      image: hotelDrink1,
      title: "Bar & Beverages",
      category: "Dining & Bar",
      description: "Premium drinks and refreshing beverages served 24/7."
    },
    {
      id: 6,
      image: hotelDrink2,
      title: "Restaurant Service",
      category: "Dining & Bar",
      description: "24/7 dining service with quality meals and beverages."
    }
  ];

  const categories = ["All", "Accommodations", "Business Facilities", "Dining & Bar"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
            Hotel <span className="text-luxury-gold">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the elegant spaces and premium facilities that make J & J Hotel 
            your perfect choice for comfort, business, and relaxation.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant="outline" 
                className="cursor-pointer border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-brown px-6 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <Card key={item.id} className="gradient-card shadow-card border-0 hover:shadow-luxury transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-luxury-gold text-luxury-brown">
                    {item.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
            Experience Luxury at J & J Hotel
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            From comfortable accommodations to professional business facilities and 24/7 dining service, 
            our hotel offers everything you need for a perfect stay. Each space is designed with your 
            comfort and convenience in mind.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-luxury-gold">24/7</h3>
              <p className="text-muted-foreground">Restaurant & Bar Service</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-luxury-gold">Premium</h3>
              <p className="text-muted-foreground">Room Amenities</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-luxury-gold">Professional</h3>
              <p className="text-muted-foreground">Event Facilities</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;