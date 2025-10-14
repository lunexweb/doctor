import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/doqsolr8d/image/upload/v1760349184/pexels-karolina-grabowska-6627374_imxf8f.jpg"
          alt="Medical Excellence"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/40" />
      </div>

      {/* Doctor's Image - Floating on the right */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-brand-yellow/30 via-brand-red/20 to-brand-yellow/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          
          {/* Main image container */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-white/20">
            <img
              src="https://res.cloudinary.com/doqsolr8d/image/upload/v1760381689/ai-generated-9019520_1280_qquzlq.png"
              alt="Professor M.M.R Bouckaert"
              className="w-80 h-96 object-cover rounded-2xl shadow-xl"
            />
            
            {/* Subtle overlay for better blending */}
            <div className="absolute inset-4 bg-gradient-to-t from-brand-black/30 via-transparent to-transparent rounded-2xl" />
            
            {/* Professional badge overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/50">
              <p className="text-sm font-semibold text-brand-black text-center">
                Prof. M.M.R Bouckaert
              </p>
              <p className="text-xs text-brand-red text-center mt-1">
                Specialist Maxillofacial & Oral Surgeon
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
        <div className="max-w-4xl mx-auto lg:max-w-3xl lg:mr-96 text-center lg:text-left animate-fade-in">
          {/* Credentials Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-brand-yellow bg-brand-yellow mb-8">
            <div className="w-2 h-2 rounded-full bg-brand-black animate-pulse" />
            <span className="text-sm font-medium text-brand-black">
              B.ChD, M.Dent (MFOS), FCMFOS(SA), FFD.RCS (Ireland)
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-black mb-6 leading-tight">
            Professor M.M.R Bouckaert
          </h1>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl font-semibold text-brand-red mb-4">
            Specialist Maxillofacial and Oral Surgeon
          </p>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Advanced facial, jaw, and oral surgical care with precision and compassion. 
            Delivering excellence in maxillofacial surgery for over two decades.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-brand-black text-brand-white hover:bg-brand-gray transition-all duration-300 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection("contact")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-brand-white transition-all duration-300 px-8 py-6 text-lg font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Contact Practice
            </Button>
          </div>

          {/* Practice Number */}
          <p className="text-sm text-muted-foreground">
            Practice Number: <span className="font-semibold text-brand-black">6201296</span>
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
