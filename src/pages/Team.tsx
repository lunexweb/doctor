import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactIcons from "@/components/ContactIcons";
import { Users, Award, Heart, Stethoscope } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Team = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Professor M.M.R Bouckaert",
      role: "Specialist Maxillofacial & Oral Surgeon",
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760349271/pexels-klaus-nielsen-6303569_raqo47.jpg",
      qualifications: ["B.ChD", "M.Dent (MFOS)", "FCMFOS(SA)", "FFD.RCS (Ireland)"],
      description: "Leading specialist with over 20 years of experience in complex maxillofacial and oral surgical procedures.",
    },
    {
      name: "Dr. Sarah Mitchell",
      role: "Senior Dental Assistant",
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760362818/pexels-karolina-grabowska-7195438_yaldh9.jpg",
      qualifications: ["Diploma in Dental Assisting", "CPR Certified", "Infection Control Specialist"],
      description: "Experienced dental assistant providing exceptional patient care and surgical support.",
    },
    {
      name: "Dr. Michael Chen",
      role: "Anesthesiologist",
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760362781/pexels-karolina-grabowska-7195310_hyddra.jpg",
      qualifications: ["MBChB", "DA (SA)", "Specialist Anesthesiologist"],
      description: "Board-certified anesthesiologist ensuring patient comfort and safety during surgical procedures.",
    },
  ];

  return (
    <div className="min-h-screen bg-background no-bounce">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative py-20 text-primary-foreground overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/doqsolr8d/image/upload/v1760349271/pexels-klaus-nielsen-6303569_raqo47.jpg"
            alt="Medical Team"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-primary/80" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Users className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Our Medical Team
            </h1>
            <p className="text-xl opacity-90">
              Meet the experienced professionals dedicated to your care and surgical excellence
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/doqsolr8d/image/upload/v1760349271/pexels-klaus-nielsen-6303569_raqo47.jpg"
            alt="Medical Team"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
                Meet Our Team
              </h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our dedicated team of medical professionals brings decades of combined experience to provide you with the highest quality care.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-slide-up mb-16">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50 bg-card overflow-hidden"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                      <h3 className="text-lg sm:text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-xs sm:text-sm opacity-90">{member.role}</p>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-primary">
                      {member.role}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {member.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-2 text-sm flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Qualifications
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {member.qualifications.map((qual, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                          >
                            {qual}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Team Values */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-secondary/50 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 p-4 rounded-full bg-primary/5">
                    <Heart className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Compassionate Care</h3>
                  <p className="text-muted-foreground text-sm">
                    Every team member is committed to providing empathetic and personalized patient care.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-secondary/50 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 p-4 rounded-full bg-primary/5">
                    <Award className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Professional Excellence</h3>
                  <p className="text-muted-foreground text-sm">
                    Continuous education and training ensure the highest standards of medical practice.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-secondary/50 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 p-4 rounded-full bg-primary/5">
                    <Stethoscope className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Advanced Expertise</h3>
                  <p className="text-muted-foreground text-sm">
                    Specialized training and extensive experience in complex surgical procedures.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ContactIcons />
    </div>
  );
};

export default Team;
