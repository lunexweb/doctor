import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      title: "Emergency Wisdom Tooth Extraction",
      overview: "Expert surgical extraction of impacted, problematic, or infected third molars with immediate relief.",
      details: [
        "Impacted wisdom tooth surgery (horizontal, vertical, mesial, distal impaction)",
        "Emergency extraction for severe pain and infection",
        "Management of pericoronitis and gum inflammation",
        "Prevention of damage to adjacent molars (2nd molar protection)",
        "Complex surgical extraction techniques",
        "Sedation and anesthesia options for comfort",
        "Treatment of cysts and tumors around wisdom teeth",
        "Bone removal when necessary for complete extraction",
      ],
      process: "Comprehensive evaluation with 3D imaging to assess impaction type and proximity to vital structures, followed by gentle surgical extraction with emphasis on preserving adjacent teeth and ensuring rapid recovery.",
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

      {/* Hero Section */}
      <section className="relative py-20 text-primary-foreground overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/doqsolr8d/image/upload/v1760593288/oral-and-maxillofacial-scaled-2048x1024_iezvzu.jpg"
            alt="Oral and Maxillofacial Surgery"
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

            {/* Wisdom Teeth Educational Section */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <Heart className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h2 className="text-4xl font-bold text-primary mb-4">
                  Understanding Wisdom Teeth
                </h2>
                <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6" />
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive information about third molars, impaction types, and when extraction becomes necessary
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* Anatomy Section */}
                <Card className="border-2 border-blue-200 bg-blue-50/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-lg bg-blue-100">
                        <Bone className="w-8 h-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-2xl text-blue-700">
                        Wisdom Teeth Anatomy
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Tooth Development</h4>
                      <p className="text-blue-700 text-sm">
                        Wisdom teeth (third molars) typically develop between ages 17-25. Most people have 4 wisdom teeth, 
                        one in each quadrant of the mouth.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Normal Position</h4>
                      <p className="text-blue-700 text-sm">
                        When properly positioned, wisdom teeth are the last molars in each jaw, behind the 1st and 2nd molars.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Function</h4>
                      <p className="text-blue-700 text-sm">
                        Originally designed for grinding tough foods, modern diets have made wisdom teeth less necessary.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Impaction Types */}
                <Card className="border-2 border-red-200 bg-red-50/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-lg bg-red-100">
                        <Activity className="w-8 h-8 text-red-600" />
                      </div>
                      <CardTitle className="text-2xl text-red-700">
                        Types of Impaction
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">Horizontal Impaction</h4>
                      <p className="text-red-700 text-sm">
                        Tooth grows sideways, pushing against the 2nd molar. This is the most problematic type requiring surgical removal.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">Vertical Impaction</h4>
                      <p className="text-red-700 text-sm">
                        Tooth is positioned correctly but cannot fully erupt due to lack of space or gum tissue obstruction.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">Mesial & Distal Impaction</h4>
                      <p className="text-red-700 text-sm">
                        Tooth is angled toward the front (mesial) or back (distal) of the mouth, causing pressure on adjacent teeth.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* When to Seek Treatment */}
              <Card className="border-2 border-orange-300 bg-orange-50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-orange-200">
                      <Stethoscope className="w-8 h-8 text-orange-700" />
                    </div>
                    <CardTitle className="text-2xl text-orange-800">
                      When Emergency Extraction is Needed
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-6 bg-white rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-4 text-lg">Immediate Treatment Required:</h4>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                          <span className="text-orange-700 text-sm">
                            <strong>Severe Pain:</strong> Intense, throbbing pain that doesn't respond to over-the-counter medication
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                          <span className="text-orange-700 text-sm">
                            <strong>Infection:</strong> Swelling, redness, pus, or fever indicating pericoronitis
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                          <span className="text-orange-700 text-sm">
                            <strong>Difficulty Eating:</strong> Pain when chewing or opening mouth
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                          <span className="text-orange-700 text-sm">
                            <strong>Damage to Adjacent Teeth:</strong> Pressure causing damage to 2nd molars
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                          <span className="text-orange-700 text-sm">
                            <strong>Cyst Formation:</strong> Development of cysts around impacted teeth
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                          <span className="text-orange-700 text-sm">
                            <strong>Limited Mouth Opening:</strong> Trismus or difficulty opening mouth fully
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-orange-100 rounded-lg border border-orange-300">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-orange-200">
                        <Heart className="w-5 h-5 text-orange-700" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-orange-800 mb-2">Why Choose Professor Bouckaert?</h5>
                        <p className="text-orange-700 text-sm">
                          With extensive experience in complex wisdom tooth extractions, Professor Bouckaert uses advanced 
                          techniques to minimize discomfort and ensure optimal outcomes. Emergency appointments are available 
                          for urgent cases requiring immediate attention.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

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
