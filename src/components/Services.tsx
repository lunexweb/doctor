import { Bone, Smile, Wrench, Microscope, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Bone,
    title: "Jaw and Facial Surgery",
    description: "Advanced surgical procedures for jaw alignment, facial reconstruction, and structural corrections.",
  },
  {
    icon: Smile,
    title: "Dental Implants",
    description: "State-of-the-art dental implant placement for permanent tooth replacement solutions.",
  },
  {
    icon: Wrench,
    title: "Orthognathic Surgery",
    description: "Corrective jaw surgery to treat skeletal and dental irregularities for improved function and aesthetics.",
  },
  {
    icon: Microscope,
    title: "Oral Pathology",
    description: "Diagnosis and treatment of diseases affecting the oral and maxillofacial region.",
  },
  {
    icon: Activity,
    title: "Facial Trauma Management",
    description: "Expert treatment of facial injuries, fractures, and soft tissue trauma with precision care.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Specialized Services
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive maxillofacial and oral surgery services delivered with expertise and care
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50 bg-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/5 group-hover:bg-gradient-accent transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-medical-blue-light transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Note */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Each treatment is personalized to meet your unique needs. 
              <span className="block mt-2 text-primary font-semibold">
                Contact us to discuss your specific requirements.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
