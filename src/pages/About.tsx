import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Award, Star, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
            About <span className="text-luxury-gold">J & J Hotel</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A legacy of excellence, comfort, and warm hospitality in the heart of Kitengela
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Located in the vibrant town of Kitengela, J & J Hotel stands as a beacon of 
                luxury and comfort in Kajiado County. Our establishment represents a perfect 
                blend of modern hospitality and traditional Kenyan warmth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As a newly established hotel, we bring fresh energy and modern standards 
                to the hospitality industry in Kitengela. Our commitment is to provide an 
                unparalleled experience for every guest. Whether you're visiting for business, 
                leisure, or special events, J & J Hotel offers a sanctuary where luxury meets 
                authentic African hospitality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our strategic location in Kitengela provides easy access to Nairobi while 
                offering a serene escape from the bustling city life. Every corner of our 
                hotel tells a story of excellence, comfort, and dedication to our guests' 
                satisfaction.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-hero rounded-2xl shadow-luxury flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <Award className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-serif font-bold">Excellence in Hospitality</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <Card className="gradient-card shadow-card border-0">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-luxury-gold mb-6" />
                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional hospitality experiences that exceed our guests' 
                  expectations through personalized service, luxurious accommodations, 
                  and genuine care for every individual who walks through our doors.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card border-0">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-luxury-gold mb-6" />
                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as Kitengela's premier luxury hotel destination, 
                  setting the standard for excellence in hospitality while contributing 
                  to the growth and development of our local community.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: Star,
                title: "Excellence",
                description: "We strive for perfection in every service we provide"
              },
              {
                icon: Heart,
                title: "Care",
                description: "Every guest is treated with genuine warmth and attention"
              },
              {
                icon: Users,
                title: "Community",
                description: "We believe in building lasting relationships and connections"
              },
              {
                icon: Clock,
                title: "Reliability",
                description: "Consistent quality and dependable service you can trust"
              }
            ].map((value, index) => (
              <Card key={index} className="gradient-card shadow-card border-0 text-center hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-6">
                  <value.icon className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Location */}
          <div className="text-center">
            <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">Our Location</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Perfectly situated in Kitengela, Kajiado County, we offer the ideal base for 
              exploring the region while enjoying world-class amenities and service.
            </p>
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Why Choose Kitengela?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Strategic Location</h4>
                  <p className="text-sm text-muted-foreground">
                    Close to Nairobi with easy access to major highways and transportation
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Natural Beauty</h4>
                  <p className="text-sm text-muted-foreground">
                    Surrounded by stunning landscapes and wildlife conservation areas
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Growing Community</h4>
                  <p className="text-sm text-muted-foreground">
                    Part of a vibrant and rapidly developing urban center
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;