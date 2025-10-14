import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been received. We will contact you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/doqsolr8d/image/upload/v1760349271/pexels-klaus-nielsen-6303569_raqo47.jpg"
          alt="Medical Excellence"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-muted/85" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Schedule a consultation or reach out with any questions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 animate-slide-in">
              <Card className="border-2 hover:border-secondary/50 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/5">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        Arwyp Medical Suites, 5th Floor / 5de Vloer<br />
                        22 Pine Avenue / 22 Pine Laan<br />
                        Kempton Park, 1620
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/5">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Phone & Fax</h4>
                      <p className="text-muted-foreground">
                        Tel: <a href="tel:0119703320" className="hover:text-primary transition-colors">(011) 970-3320</a><br />
                        Fax: (011) 970-3321
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/5">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Languages</h4>
                      <p className="text-muted-foreground">
                        English & Afrikaans
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="overflow-hidden border-2">
                <div className="aspect-video bg-muted relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.1234567890123!2d28.2345678!3d-26.0987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA1JzU1LjYiUyAyOMKwMTQnMDQuNCJF!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Practice Location"
                  />
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up">
              <Card className="border-2 hover:border-secondary/50 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-2 focus:border-secondary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-2 focus:border-secondary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="border-2 focus:border-secondary transition-colors min-h-[150px]"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-brand-yellow text-brand-black hover:bg-brand-yellow/90 hover:shadow-lg transition-all duration-300 font-semibold"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
