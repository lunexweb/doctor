import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactIcons from "@/components/ContactIcons";
import { FileText, HelpCircle, Clock, Shield, CheckCircle, AlertCircle, Heart, X, Droplets, Coffee, Cigarette, Utensils, Calendar, Phone } from "lucide-react";
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
    "Fast as instructed (up to 6 hours before surgery)",
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
    "Refrain from smoking to promote proper healing",
    "Do not drive after surgery - arrange transportation",
    "Attend all follow-up appointments",
    "Contact us immediately if you experience excessive bleeding, severe pain, or fever",
  ];

  return (
    <div className="min-h-screen bg-background no-bounce">
      <Header />

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

      {/* On the Day of Surgery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-white shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-lg bg-primary/5">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">
                    On the Day of Surgery
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-800 leading-relaxed">
                    On the day of surgery, you may be asked to arrive at a specific time. This is several hours 
                    before your procedure is scheduled to begin. This allows the staff to complete any tests 
                    that cannot be performed before surgery; therefore, we can't give you an exact time of 
                    the surgery, if there is an emergency from casualty or any complication 
                    the theatre times will be delayed.
                  </p>
                </div>
              </CardContent>
            </Card>
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

            {/* Tooth Extraction Care Instructions */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <Heart className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h2 className="text-4xl font-bold text-primary mb-4">
                  Taking Care of Your Mouth
                </h2>
                <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6" />
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive post-operative care instructions for tooth extraction recovery
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* Control Bleeding */}
                <Card className="border-2 border-red-200 bg-red-50/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-lg bg-red-100">
                        <Droplets className="w-8 h-8 text-red-600" />
                      </div>
                      <CardTitle className="text-2xl text-red-700">
                        Control Bleeding
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-800 leading-relaxed">
                      To help control bleeding, bite firmly on the gauze placed by your dentist. 
                      The pressure helps to form a blood clot in the tooth socket. If you have a 
                      lot of bleeding, bite on a regular tea bag. The tannic acid in the tea aids 
                      in forming a blood clot. Bite on the gauze or the tea bag until blood clot.
                    </p>
                  </CardContent>
                </Card>

                {/* Minimise Pain */}
                <Card className="border-2 border-blue-200 bg-blue-50/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-lg bg-blue-100">
                        <Shield className="w-8 h-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-2xl text-blue-700">
                        Minimise Pain
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-800 leading-relaxed">
                      To lessen any pain, take prescribed medication as directed. Don't drive 
                      while taking any pain medication as you may feel drowsy. Ask your dentist 
                      if you may take over-the-counter medication, if needed.
                    </p>
                  </CardContent>
                </Card>

                {/* Reduce Swelling */}
                <Card className="border-2 border-green-200 bg-green-50/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-lg bg-green-100">
                        <Clock className="w-8 h-8 text-green-600" />
                      </div>
                      <CardTitle className="text-2xl text-green-700">
                        Reduce Swelling
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-800 leading-relaxed">
                      To reduce swelling put an ice pack on your cheek near the extraction site. 
                      You can make an ice pack by putting ice in a plastic bag and wrapping it 
                      in a thin towel. Apply the ice pack to your cheek for 10 minutes. Then 
                      remove it for 5 minutes. Repeat as needed. You may see some bruising on 
                      your face. This is normal and will go away on its own.
                    </p>
                  </CardContent>
                </Card>

                {/* Get Enough Rest */}
                <Card className="border-2 border-purple-200 bg-purple-50/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-lg bg-purple-100">
                        <Heart className="w-8 h-8 text-purple-600" />
                      </div>
                      <CardTitle className="text-2xl text-purple-700">
                        Get Enough Rest
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-800 leading-relaxed">
                      Limit activities for the first 24 hours after an extraction. Rest during 
                      the day and go to bed early. When lying down, elevate your head slightly.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Do's and Don'ts Section */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* Do's */}
                <Card className="border-2 border-green-300 bg-green-50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-green-200">
                        <CheckCircle className="w-8 h-8 text-green-700" />
                      </div>
                      <CardTitle className="text-2xl text-green-700">
                        Do's
                      </CardTitle>
                    </div>
                    <p className="text-green-700 text-sm">
                      Below are some things you can do to help your mouth heal:
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Diet</h4>
                      <p className="text-green-700 text-sm">
                        Do eat a diet of soft, healthy foods and snacks. It may be easier for you 
                        to eat soft foods soon after your extraction. Drink plenty of liquids 
                        while you're healing.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Oral Hygiene</h4>
                      <p className="text-green-700 text-sm">
                        Do brush your teeth gently. Avoid brushing around the extraction. And don't 
                        use any toothpaste. Rinsing toothpaste from your mouth may dislodge the blood clot.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Extraction Site Care</h4>
                      <p className="text-green-700 text-sm">
                        Do keep the extraction site clean. After 12 hours you may be able to gently 
                        rinse your mouth. Rinse 4 times a day with 1 teaspoon of salt in a glass 
                        of water. Check with your dentist first.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Don'ts */}
                <Card className="border-2 border-red-300 bg-red-50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-red-200">
                        <X className="w-8 h-8 text-red-700" />
                      </div>
                      <CardTitle className="text-2xl text-red-700">
                        Don'ts
                      </CardTitle>
                    </div>
                    <p className="text-red-700 text-sm">
                      Below are some things to avoid while you're healing:
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border border-red-200">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <X className="w-4 h-4 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-800 mb-1">Don't drink with a straw</h4>
                          <p className="text-red-700 text-sm">
                            Don't drink with a straw. Sucking on a straw may dislodge the blood clot.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border border-red-200">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <Coffee className="w-4 h-4 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-800 mb-1">Don't drink hot liquids / Limit alcohol</h4>
                          <p className="text-red-700 text-sm">
                            Don't drink hot liquids. Hot liquids may increase swelling. Limit your 
                            alcohol use. Excessive use of alcohol may slow healing.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border border-red-200">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <Cigarette className="w-4 h-4 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-800 mb-1">Don't smoke</h4>
                          <p className="text-red-700 text-sm">
                            Don't smoke. Smoking may break down the blood clot, causing a painful tooth socket.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Caution Box */}
              <Card className="mb-8 border-2 border-orange-300 bg-orange-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-orange-800 mb-2">
                        CAUTION
                      </h3>
                      <p className="text-orange-700">
                        Rinse your mouth very gently. Otherwise the blood clot may dislodge.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* When to Call Your Maxillofacial Surgeon */}
              <Card className="border-2 border-red-300 bg-red-50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-lg bg-red-200">
                      <AlertCircle className="w-8 h-8 text-red-700" />
                    </div>
                    <CardTitle className="text-2xl text-red-700">
                      Call your Maxillofacial surgeon if:
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                      <span className="text-red-800">
                        Pain becomes more severe during the days after your extraction
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                      <span className="text-red-800">
                        Bleeding becomes hard to control (slight oozing of blood on the first day is normal)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                      <span className="text-red-800">
                        Swelling around the extraction site worsens
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                      <span className="text-red-800">
                        Itching or rashes occur after you take medication (may be an allergic reaction)
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Dietary Instructions */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <Utensils className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h2 className="text-4xl font-bold text-primary mb-4">
                  Eating While You Heal
                </h2>
                <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6" />
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Proper nutrition helps you heal faster after tooth extraction. Eat regular meals as soon as you can after surgery.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                {/* Start with Soft Foods */}
                <Card className="border-2 border-blue-200 bg-blue-50/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-lg bg-blue-100">
                        <Utensils className="w-8 h-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl text-blue-700">
                        Start with Soft Foods and Liquids
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Soft Foods</h4>
                      <p className="text-blue-700 text-sm">
                        At first eat soft foods such as oatmeal, mashed potatoes, bananas, and soups.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Nutritious Liquids</h4>
                      <p className="text-blue-700 text-sm">
                        Also drink liquids high in nutrients such as vegetable and fruit juices or high-protein drinks.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Move on to Solid Foods */}
                <Card className="border-2 border-green-200 bg-green-50/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-lg bg-green-100">
                        <Shield className="w-8 h-8 text-green-600" />
                      </div>
                      <CardTitle className="text-xl text-green-700">
                        Move on to Solid Foods
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Small Pieces</h4>
                      <p className="text-green-700 text-sm">
                        Cut foods into small pieces to ease chewing.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Use a Blender</h4>
                      <p className="text-green-700 text-sm">
                        Use a blender for hard-to-chew foods, such as apples and carrots.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Be Careful When You Chew */}
                <Card className="border-2 border-orange-200 bg-orange-50/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-lg bg-orange-100">
                        <AlertCircle className="w-8 h-8 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl text-orange-700">
                        Be Careful When You Chew
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-orange-800 mb-2">Avoid Problem Foods</h4>
                      <p className="text-orange-700 text-sm">
                        Limit chewing. Avoid crunchy or sticky foods, such as popcorn, taffy, and nuts.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-orange-800 mb-2">Chewing Technique</h4>
                      <p className="text-orange-700 text-sm">
                        Chew on the side of your mouth that's opposite the extraction.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Follow-up Visits Section */}
              <Card className="border-2 border-purple-200 bg-purple-50/50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-purple-100">
                      <Calendar className="w-8 h-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl text-purple-700">
                      Follow-up Visits
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-6 bg-white rounded-lg border border-purple-200">
                    <p className="text-purple-800 leading-relaxed mb-4">
                      You need a follow-up appointment with your Maxillofacial Surgeon, to make sure 
                      you are healing right. With proper care, your mouth should heal in several weeks. 
                      Please make a follow-up appointment within 7-10 days.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Phone className="w-5 h-5 text-purple-600" />
                          <h4 className="font-semibold text-purple-800">Dr's Phone Number:</h4>
                        </div>
                        <a
                          href="tel:0119703320"
                          className="text-lg font-semibold text-purple-700 hover:text-purple-900 transition-colors"
                        >
                          (011) 970-3320
                        </a>
                      </div>
                      
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertCircle className="w-5 h-5 text-purple-600" />
                          <h4 className="font-semibold text-purple-800">Special Instructions:</h4>
                        </div>
                        <p className="text-purple-700 text-sm">
                          Follow all post-operative care instructions provided. Contact us immediately 
                          if you experience any complications or have concerns about your healing progress.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

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
