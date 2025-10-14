import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactIcons from "@/components/ContactIcons";

const Index = () => {
  return (
    <div className="min-h-screen no-bounce">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ContactIcons />
    </div>
  );
};

export default Index;
