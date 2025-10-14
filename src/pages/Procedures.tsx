import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactIcons from "@/components/ContactIcons";
import { Bone, Smile, Wrench, Microscope, Activity, Stethoscope, Heart, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Procedures = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const procedures = [
    {
      icon: Bone,
      title: "Orthognathic (Jaw) Surgery",
      overview: "Corrective jaw surgery to improve function, aesthetics, and overall oral health.",
      details: [
        "Treatment of jaw misalignment and bite problems",
        "Correction of facial asymmetry",
        "Sleep apnea treatment through jaw repositioning",
        "Improvement of chewing, speaking, and breathing",
        "Enhanced facial balance and appearance",
      ],
      process: "Comprehensive planning using 3D imaging and computer simulation to ensure precise outcomes.",
    },
    {
      icon: Smile,
      title: "Dental Implant Surgery",
      overview: "Advanced implant placement for permanent tooth replacement and restoration.",
      details: [
        "Single tooth implants",
        "Multiple implant placement",
        "Full arch rehabilitation",
        "Bone grafting when necessary",
        "Sinus lift procedures",
        "Immediate loading protocols",
      ],
      process: "State-of-the-art digital planning and guided surgery for optimal implant positioning and long-term success.",
    },
    {
      icon: Activity,
      title: "Facial Trauma Surgery",
      overview: "Expert treatment of facial injuries and fractures with focus on functional and aesthetic restoration.",
      details: [
        "Jaw fracture repair",
        "Cheekbone (zygomatic) fracture treatment",
        "Orbital (eye socket) fracture repair",
        "Nasal fracture management",
        "Soft tissue laceration repair",
        "Dental trauma management",
      ],
      process: "Emergency and elective reconstruction using advanced fixation techniques and materials.",
    },
    {
      icon: Microscope,
      title: "Oral Pathology & Lesion Removal",
      overview: "Diagnosis and treatment of diseases and abnormalities of the oral and maxillofacial region.",
      details: [
        "Biopsy and diagnosis of oral lesions",
        "Cyst removal (jaw and soft tissue)",
        "Benign tumor excision",
        "Pre-cancerous lesion management",
        "Salivary gland surgery",
        "TMJ (jaw joint) disorder treatment",
      ],
      process: "Comprehensive evaluation with histopathological analysis and appropriate surgical intervention.",
    },
    {
      icon: Wrench,
      title: "Reconstructive Surgery",
      overview: "Complex reconstruction following trauma, disease, or congenital conditions.",
      details: [
        "Bone grafting procedures",
        "Soft tissue reconstruction",
        "Cleft lip and palate repair",
        "Facial deformity correction",
        "Post-cancer reconstruction",
        "Distraction osteogenesis",
      ],
      process: "Multidisciplinary approach using advanced reconstructive techniques for optimal functional and aesthetic outcomes.",
    },
    {
      icon: Stethoscope,
      title: "Pre-Prosthetic Surgery",
      overview: "Surgical preparation of the mouth for optimal denture or prosthetic fitting.",
      details: [
        "Alveolar ridge augmentation",
        "Removal of excess bone or tissue",
        "Vestibuloplasty (deepening of oral vestibule)",
        "Tori removal",
        "Soft tissue grafting",
        "Frenectomy procedures",
      ],
      process: "Careful surgical preparation to ensure comfortable and stable prosthetic outcomes.",
    },
    {
      icon: Heart,
      title: "Wisdom Teeth Removal",
      overview: "Safe extraction of impacted or problematic third molars.",
      details: [
        "Impacted wisdom tooth surgery",
        "Prevention of future dental problems",
        "Management of infection and pain",
        "Complex extraction techniques",
        "Sedation options available",
      ],
      process: "Gentle surgical technique with emphasis on patient comfort and rapid recovery.",
    },
    {
      icon: Zap,
      title: "TMJ Surgery & Treatment",
      overview: "Comprehensive management of temporomandibular joint disorders.",
      details: [
        "TMJ arthroscopy",
        "Joint replacement surgery",
        "Arthrocentesis procedures",
        "Conservative management options",
        "Pain management strategies",
        "Jaw dysfunction correction",
      ],
      process: "Conservative to surgical approaches based on individual diagnosis and severity.",
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
            src="https://res.cloudinary.com/doqsolr8d/image/upload/v1760381811/dentist-1864921_1280_jzgurb.jpg"
            alt="Medical Excellence"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-primary/80" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Stethoscope className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black">
              Surgical Procedures
            </h1>
            <p className="text-xl opacity-90 text-black">
              Comprehensive maxillofacial and oral surgical treatments with precision and care
            </p>
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Our Specialized Procedures
              </h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each procedure is tailored to your unique needs with a focus on optimal outcomes
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {procedures.map((procedure, index) => {
                const Icon = procedure.icon;
                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-2 rounded-lg px-6 hover:border-secondary/50 transition-all duration-300"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-4 text-left">
                        <div className="p-3 rounded-lg bg-primary/5 group-hover:bg-gradient-accent transition-all duration-300">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-primary">
                            {procedure.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {procedure.overview}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="space-y-6 pl-20">
                        <div>
                          <h4 className="font-semibold text-primary mb-3 text-lg">
                            What We Treat:
                          </h4>
                          <ul className="space-y-2">
                            {procedure.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-semibold text-primary mb-2">
                            Our Approach:
                          </h4>
                          <p className="text-muted-foreground">{procedure.process}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>

            <Card className="mt-16 border-2 border-secondary/30 bg-primary/5">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Ready to Schedule Your Consultation?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Each treatment plan is personalized to your specific needs. Contact us today to discuss
                  how we can help you achieve optimal oral and facial health.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:0119703320" className="inline-block">
                    <button className="px-8 py-3 bg-gradient-primary text-black rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg">
                      Call (011) 970-3320
                    </button>
                  </a>
                  <a
                    href={`https://wa.me/27119703320?text=${encodeURIComponent(
                      "Hello, I would like to schedule a consultation."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <button className="px-8 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20BA5A] transition-all duration-300 shadow-lg">
                      WhatsApp Us
                    </button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <ContactIcons />
    </div>
  );
};

export default Procedures;
