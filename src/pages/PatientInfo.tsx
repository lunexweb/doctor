import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactIcons from "@/components/ContactIcons";
import { FileText, HelpCircle, Clock, Shield, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PatientInfo = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What should I bring to my first consultation?",
      answer: "Please bring your ID, medical aid card (if applicable), any relevant medical records, recent X-rays or scans, a list of current medications, and any referral letters from your dentist or physician.",
    },
    {
      question: "Do you accept medical aid?",
      answer: "Yes, we work with most major medical aid schemes. Please contact our office with your medical aid details so we can verify your benefits and provide information about coverage for your specific procedure.",
    },
    {
      question: "How long is the recovery period for jaw surgery?",
      answer: "Recovery time varies depending on the complexity of the surgery. Generally, initial healing takes 6-8 weeks, with full recovery taking 3-6 months. We provide detailed post-operative instructions and follow-up care to ensure optimal healing.",
    },
    {
      question: "Are dental implants painful?",
      answer: "The procedure is performed under anesthesia, so you won't feel pain during surgery. Post-operative discomfort is typically mild and well-controlled with prescribed medication. Most patients return to normal activities within a few days.",
    },
    {
      question: "How long do dental implants last?",
      answer: "With proper care and maintenance, dental implants can last a lifetime. Success rates are over 95% when placed by an experienced surgeon and cared for properly with good oral hygiene.",
    },
    {
      question: "What are the risks of maxillofacial surgery?",
      answer: "All surgical procedures carry some risk. Common risks include swelling, bruising, infection, and temporary numbness. Serious complications are rare. Professor Bouckaert will discuss all potential risks and benefits specific to your procedure during your consultation.",
    },
    {
      question: "Will I need to stay in hospital?",
      answer: "This depends on the complexity of your procedure. Some surgeries can be performed as day procedures, while others may require a hospital stay of 1-3 days. This will be discussed during your consultation.",
    },
    {
      question: "How do I prepare for surgery?",
      answer: "You'll receive detailed pre-operative instructions, which typically include fasting requirements, medication guidelines, and arrangements for post-operative care. It's important to arrange for someone to drive you home after surgery.",
    },
    {
      question: "When can I return to work after surgery?",
      answer: "This varies by procedure and individual healing. Minor procedures may require only 2-3 days off work, while major surgeries like orthognathic surgery may require 2-4 weeks. We'll provide specific guidance based on your procedure.",
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we understand that surgical procedures can be a significant investment. We work with various financing options and can discuss payment plans during your consultation. Please contact our office for more information.",
    },
  ];

  const preOpInstructions = [
    "Arrange transportation to and from the practice/hospital",
    "Fast as instructed (usually 6-8 hours before surgery)",
    "Take only approved medications on the day of surgery",
    "Wear comfortable, loose-fitting clothing",
    "Remove all jewelry, contact lenses, and makeup",
    "Inform us of any changes in your health status",
  ];

  const postOpCare = [
    "Follow all medication instructions carefully",
    "Apply ice packs as directed to reduce swelling",
    "Maintain a soft or liquid diet as recommended",
    "Keep the surgical site clean following provided instructions",
    "Avoid strenuous activities for the specified period",
    "Attend all follow-up appointments",
    "Contact us immediately if you experience excessive bleeding, severe pain, or fever",
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
            src="https://res.cloudinary.com/doqsolr8d/image/upload/v1760362256/pexels-pavel-danilyuk-6812508_chfb7q.jpg"
            alt="Medical Excellence"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-primary/80" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <FileText className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black">
              Patient Information
            </h1>
            <p className="text-xl opacity-90 text-black">
              Everything you need to know about your care and treatment
            </p>
          </div>
        </div>
      </section>

      {/* Pre-Operative Care */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <Card className="border-2 hover:border-secondary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-lg bg-primary/5">
                      <CheckCircle className="w-8 h-8 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl text-primary">
                      Pre-Operative Instructions
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Proper preparation helps ensure a successful procedure and smooth recovery:
                  </p>
                  <ul className="space-y-3">
                    {preOpInstructions.map((instruction, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span className="text-foreground">{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-secondary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-lg bg-primary/5">
                      <Shield className="w-8 h-8 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl text-primary">
                      Post-Operative Care
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Following these guidelines promotes healing and prevents complications:
                  </p>
                  <ul className="space-y-3">
                    {postOpCare.map((care, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span className="text-foreground">{care}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* What to Expect */}
            <Card className="mb-20 border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-lg bg-primary/5">
                    <Clock className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">
                    What to Expect During Your Visit
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2 text-lg">Initial Consultation</h4>
                  <p className="text-muted-foreground">
                    Your first visit includes a comprehensive examination, review of medical history, 
                    discussion of your concerns and goals, diagnostic imaging if needed, and a detailed 
                    treatment plan with cost estimates. Consultations typically last 30-45 minutes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2 text-lg">Surgery Day</h4>
                  <p className="text-muted-foreground">
                    Arrive at the scheduled time after following pre-operative instructions. You'll 
                    meet with our team, complete necessary paperwork, and have any last questions 
                    answered. The procedure duration varies by complexity, typically ranging from 
                    1-4 hours.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2 text-lg">Follow-Up Care</h4>
                  <p className="text-muted-foreground">
                    Post-operative appointments are scheduled to monitor your healing and address 
                    any concerns. The number and frequency of follow-ups depend on your specific 
                    procedure. Most patients have check-ups at 1 week, 6 weeks, and 3 months post-surgery.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* FAQs */}
            <div className="text-center mb-12">
              <HelpCircle className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h2 className="text-4xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about procedures and care
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border-2 rounded-lg px-6 hover:border-secondary/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-primary">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Emergency Contact */}
            <Card className="mt-16 border-2 border-destructive/30 bg-destructive/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      Emergency Contact
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      If you experience a medical emergency after hours, please go to your nearest 
                      emergency room or call emergency services. For urgent post-operative concerns 
                      during office hours, contact us immediately at:
                    </p>
                    <a
                      href="tel:0119703320"
                      className="text-xl font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      (011) 970-3320
                    </a>
                  </div>
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

export default PatientInfo;
