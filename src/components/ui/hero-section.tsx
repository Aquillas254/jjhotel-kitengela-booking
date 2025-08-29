import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroLobby from "@/assets/hero-hotel-lobby.jpg";
import luxurySuite from "@/assets/luxury-suite.jpg";
import restaurantDining from "@/assets/restaurant-dining.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroLobby,
      title: "Welcome to J & J Hotel",
      subtitle: "Experience Luxury in the Heart of Kitengela",
      description: "Where elegance meets comfort in every detail"
    },
    {
      image: luxurySuite,
      title: "Luxury Suites & Rooms",
      subtitle: "Unparalleled Comfort & Style",
      description: "Spacious accommodations designed for your perfect stay"
    },
    {
      image: restaurantDining,
      title: "Fine Dining Experience",
      subtitle: "Culinary Excellence Awaits",
      description: "Savor exquisite cuisine in our elegant restaurant"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Image Slider */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors z-10"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-4 text-luxury-gold-light">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {slides[currentSlide].description}
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