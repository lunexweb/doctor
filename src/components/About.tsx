import { Award, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/doqsolr8d/image/upload/v1760349028/pexels-cottonbro-6502033_fzdozz.jpg"
          alt="Medical Excellence"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-muted/70" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              About Professor M Bouckaert
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated to excellence in maxillofacial and oral surgery
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Video */}
            <div className="animate-slide-in">
              <div className="relative">
                <div className="aspect-video max-w-sm sm:max-w-md md:max-w-lg mx-auto rounded-2xl shadow-xl overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="https://res.cloudinary.com/doqsolr8d/video/upload/v1760553911/4014-176369901_small_sgkvfr.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-800 leading-relaxed">
                  Mike Bouckaert received his BChD from the University of Stellenbosch in 1976 and a MDent (MFOS) from Medunsa. 
                  After working as a dental practitioner in Bloemfontein for 10 years, he went to the UK to sit for the primary 
                  examinations at the Royal College of Surgeons and successfully completed an FDSI at Dublin, Edinburgh and London.
                </p>
                
                <p className="text-gray-800 leading-relaxed">
                  In 1990 he was appointed Principal Dentist in the Department of Maxillo-facial and Oral Surgery at Medunsa. 
                  In 1995 he was appointed Senior Specialist at the same institution. In 1997 he spent a sabbatical at the 
                  Maxillo-facial Oncology Clinic at the Bundeswehrkrankenhaus, University of Ulm, Germany.
                </p>
                
                <p className="text-gray-800 leading-relaxed font-semibold">
                  His special interests are Implantology, Maxillo-facial Oncology, Traumatology and Orthognatic Surgery.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-secondary pl-6 py-4 bg-gray-100 rounded-r-lg">
                <p className="text-xl font-semibold text-gray-900 italic">
                  "Precision, skill, and empathy — the foundation of surgical excellence."
                </p>
              </blockquote>

              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg shadow-sm">
                  <Heart className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Patient-Centered</h4>
                    <p className="text-sm text-gray-700">Compassionate care tailored to you</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg shadow-sm">
                  <Users className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Bilingual Practice</h4>
                    <p className="text-sm text-gray-700">English & Afrikaans fluency</p>
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
