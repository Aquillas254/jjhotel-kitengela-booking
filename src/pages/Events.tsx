import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { Calendar, Users, MapPin, Clock, Camera, Music, Utensils } from "lucide-react";

const Events = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      date: "",
      guests: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Event inquiry:", data);
    toast({
      title: "Thank you for your interest!",
      description: "Please contact us directly at jjhotel@gmail.com or +254726705016 for event planning assistance.",
    });
    form.reset();
  };

  const eventPackages = [
    {
      title: "Wedding Celebrations",
      description: "Make your special day unforgettable with our elegant wedding packages",
      features: ["Bridal Suite", "Ceremony Setup", "Reception Hall", "Wedding Coordinator", "Catering Services"],
      image: "/placeholder.svg",
      price: "Contact for Quote",
    },
    {
      title: "Corporate Meetings",
      description: "Professional meeting spaces with modern technology and catering",
      features: ["AV Equipment", "High-Speed WiFi", "Coffee Breaks", "Lunch Options", "Parking Available"],
      image: "/placeholder.svg",
      price: "Contact for Quote",
    },
    {
      title: "Private Parties",
      description: "Celebrate birthdays, anniversaries, and special occasions in style",
      features: ["Private Dining", "Custom Decorations", "Sound System", "Bar Service", "Photography"],
      image: "/placeholder.svg",
      price: "Contact for Quote",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Unforgettable Events
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Create lasting memories at J & J Hotel with our exceptional event spaces and personalized service
            </p>
          </div>
        </div>
      </section>

      {/* Event Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Event Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully crafted event packages designed to make every occasion special
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventPackages.map((pkg, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-primary">
                      {pkg.price}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.title}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Event Facilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Capacity</h3>
              <p className="text-muted-foreground">Accommodate from 10 to 300 guests with our versatile spaces</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Setup</h3>
              <p className="text-muted-foreground">Complete AV equipment and professional lighting available</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Catering Excellence</h3>
              <p className="text-muted-foreground">Customized menus and professional catering services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Event Planning */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Plan Your Event
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our events team directly to discuss your requirements and get a customized proposal
            </p>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground">Email Us</h3>
                      <p className="text-muted-foreground">jjhotel@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground">Call Us</h3>
                      <p className="text-muted-foreground">+254726705016</p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      Our events team is available 24/7 to help you plan the perfect event
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Button asChild>
                        <a href="mailto:jjhotel@gmail.com?subject=Event Planning Inquiry">
                          Send Email
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="tel:+254726705016">
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;