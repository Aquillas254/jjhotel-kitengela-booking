import { Button } from "@/components/ui/button";
import { Star, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import hotelRoomActual from "@/assets/hotel-room-actual.jpg";
import hotelSuiteActual from "@/assets/hotel-suite-actual.jpeg";
import conferenceRoomActual from "@/assets/conference-room-actual.jpeg";
import barActual from "@/assets/bar-actual.jpg";

const HeroSection = () => {
  const images = [hotelRoomActual, hotelSuiteActual, conferenceRoomActual, barActual];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-hero">
      {/* Background Images with Rotation */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-60' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt={`Hotel view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary-variant/80"></div>


      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Welcome to J & J Hotel
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-4 text-luxury-gold-light">
            Experience Luxury in the Heart of Kitengela
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Where elegance meets comfort in every detail
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-luxury" asChild>
              <Link to="/reservations">Book Your Stay</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground" asChild>
              <Link to="/rooms">Explore Rooms</Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-luxury-gold-light fill-current" />
              <span>5-Star Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-luxury-gold-light" />
              <span>Award Winning</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-luxury-gold-light" />
              <span>50+ Rooms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;