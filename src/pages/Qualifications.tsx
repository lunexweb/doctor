import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactIcons from "@/components/ContactIcons";
import { Award, GraduationCap, BookOpen, Users, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Qualifications = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const education = [
    {
      degree: "Bachelor of Dental Surgery (B.ChD)",
      institution: "University of Pretoria",
      description: "Comprehensive dental education covering all aspects of oral healthcare and basic surgical principles.",
    },
    {
      degree: "Master of Dentistry in Maxillofacial and Oral Surgery (M.Dent MFOS)",
      institution: "University of Pretoria",
      description: "Advanced specialized training in complex maxillofacial and oral surgical procedures.",
    },
    {
      degree: "Fellowship of the College of Maxillofacial and Oral Surgeons of South Africa (FCMFOS(SA))",
      institution: "Colleges of Medicine of South Africa",
      description: "Recognition of advanced expertise and commitment to excellence in the field.",
    },
    {
      degree: "Fellowship of the Faculty of Dentistry, Royal College of Surgeons (FFD.RCS Ireland)",
      institution: "Royal College of Surgeons in Ireland",
      description: "International recognition of surgical expertise and professional standards.",
    },
  ];

  const expertise = [
    {
      icon: Award,
      title: "Complex Jaw Surgery",
      description: "Extensive experience in orthognathic and corrective jaw procedures",
    },
    {
      icon: Users,
      title: "Patient-Centered Care",
      description: "Over 20 years of compassionate patient management",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Regular attendance at international conferences and workshops",
    },
    {
      icon: Globe,
      title: "International Training",
      description: "Training and fellowships from renowned international institutions",
    },
  ];


  return (
    <div className="min-h-screen bg-background no-bounce">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 text-primary-foreground overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/doqsolr8d/image/upload/v1760362366/pexels-pavel-danilyuk-6812453_lfayw4.jpg"
            alt="Medical Excellence"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-primary/80" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black">
              Qualifications & Experience
            </h1>
            <p className="text-xl opacity-90 text-black">
              Decades of specialized training and expertise in maxillofacial and oral surgery
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Academic Credentials
              </h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive training from leading institutions
              </p>
            </div>

            <div className="space-y-6 animate-slide-up">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-start gap-3">
                      <Award className="w-6 h-6 mt-1 text-secondary flex-shrink-0" />
                      <div>
                        <div className="font-bold mb-2">{edu.degree}</div>
                        <div className="text-lg font-normal text-medical-blue-light">
                          {edu.institution}
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Areas of Expertise
              </h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {expertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="border-2 hover:border-secondary/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/5">
                          <Icon className="w-8 h-8 text-secondary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      <Footer />
      <ContactIcons />
    </div>
  );
};

export default Qualifications;
