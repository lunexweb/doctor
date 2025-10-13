import { Award, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              About Professor Bouckaert
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated to excellence in maxillofacial and oral surgery
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="animate-slide-in">
              <div className="relative">
                <div className="aspect-[3/4] bg-gradient-primary rounded-2xl shadow-xl" />
                <div className="absolute inset-0 bg-primary/5 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center p-8">
                    <Award className="w-20 h-20 text-secondary mx-auto mb-4" />
                    <p className="text-primary font-semibold text-lg">
                      Over 20 Years of Surgical Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  Professor M.M.R Bouckaert is a highly respected Specialist Maxillofacial and Oral Surgeon 
                  with extensive training and qualifications from prestigious institutions. With a B.ChD, 
                  M.Dent (MFOS), FCMFOS(SA), and FFD.RCS (Ireland), Professor Bouckaert brings unparalleled 
                  expertise to complex facial and jaw surgical procedures.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  Fluent in both English and Afrikaans, Professor Bouckaert is committed to providing 
                  compassionate, patient-centered care. Each treatment plan is meticulously tailored to 
                  meet individual needs, ensuring optimal outcomes and patient satisfaction.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-secondary pl-6 py-4 bg-primary/5 rounded-r-lg">
                <p className="text-xl font-semibold text-primary italic">
                  "Precision, skill, and empathy — the foundation of surgical excellence."
                </p>
              </blockquote>

              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3 p-4 bg-background rounded-lg shadow-sm">
                  <Heart className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Patient-Centered</h4>
                    <p className="text-sm text-muted-foreground">Compassionate care tailored to you</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-background rounded-lg shadow-sm">
                  <Users className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Bilingual Practice</h4>
                    <p className="text-sm text-muted-foreground">English & Afrikaans fluency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
