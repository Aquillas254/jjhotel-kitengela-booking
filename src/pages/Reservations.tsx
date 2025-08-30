import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { Calendar, Clock, Users, Phone, Mail, MessageSquare, CheckCircle } from "lucide-react";

const Reservations = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      guests: "",
      date: "",
      time: "",
      message: "",
    },
  });

  const onSubmit = async (data: any) => {
    setLoading(true);

    try {
      const { error } = await supabase
        .from('reservations')
        .insert([
          {
            name: data.name,
            email: data.email,
            phone: data.phone,
            guests: parseInt(data.guests),
            date: data.date,
            time: data.time,
            message: data.message || null,
          },
        ]);

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: "Reservation Submitted!",
        description: "Thank you for your reservation. We will contact you soon to confirm.",
      });

      form.reset();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to submit reservation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const timeSlots = [
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
    "9:00 PM", "9:30 PM", "10:00 PM"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Make a Reservation
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Book your table at J & J Hotel's restaurant and experience exceptional dining in Kitengela
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                {submitted ? (
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center space-y-4">
                        <div className="flex justify-center">
                          <CheckCircle className="h-16 w-16 text-green-500" />
                        </div>
                        <h3 className="text-xl font-semibold">Reservation Submitted!</h3>
                        <p className="text-muted-foreground">
                          Thank you for your reservation. We will contact you soon to confirm your booking.
                        </p>
                        <Button onClick={() => setSubmitted(false)} variant="outline">
                          Make Another Reservation
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Restaurant Reservation</CardTitle>
                      <CardDescription>
                        Fill out the form below to reserve your table. All fields are required.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <Users className="w-4 h-4" />
                                  Full Name
                                </FormLabel>
                                <FormControl>
                                  <Input placeholder="Your full name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <Mail className="w-4 h-4" />
                                  Email Address
                                </FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="your.email@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <Phone className="w-4 h-4" />
                                  Phone Number
                                </FormLabel>
                                <FormControl>
                                  <Input placeholder="+254 700 000 000" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="guests"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <Users className="w-4 h-4" />
                                  Number of Guests
                                </FormLabel>
                                <FormControl>
                                  <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select number of guests" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                                        <SelectItem key={num} value={num.toString()}>
                                          {num} {num === 1 ? 'Guest' : 'Guests'}
                                        </SelectItem>
                                      ))}
                                      <SelectItem value="10+">10+ Guests (Contact us)</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  Reservation Date
                                </FormLabel>
                                <FormControl>
                                  <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="time"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <Clock className="w-4 h-4" />
                                  Preferred Time
                                </FormLabel>
                                <FormControl>
                                  <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select time" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {timeSlots.map((time) => (
                                        <SelectItem key={time} value={time}>
                                          {time}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2">
                                <MessageSquare className="w-4 h-4" />
                                Special Requests or Dietary Requirements
                              </FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Any special requests, dietary restrictions, or occasions we should know about..."
                                  className="min-h-[100px]"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" className="w-full" size="lg" disabled={loading}>
                          {loading ? 'Submitting...' : 'Submit Reservation Request'}
                        </Button>

                        <p className="text-sm text-muted-foreground text-center">
                          We'll confirm your reservation within 2 hours via email or phone.
                          For immediate assistance, call us at +254 700 000 000
                        </p>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
                )}
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Restaurant Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Thursday</span>
                      <span className="text-muted-foreground">12:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Friday - Saturday</span>
                      <span className="text-muted-foreground">12:00 PM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span className="text-muted-foreground">12:00 PM - 9:00 PM</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">+254 700 000 000</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">reservations@jjhotel.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Reservation Policy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>• Reservations are held for 15 minutes past the reserved time</p>
                    <p>• Cancellations must be made 4 hours in advance</p>
                    <p>• Large parties (8+) may require a deposit</p>
                    <p>• We accommodate dietary restrictions with advance notice</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reservations;