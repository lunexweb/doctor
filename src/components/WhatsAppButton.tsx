import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "27119703320"; // Format: country code + number without + or spaces
  const message = encodeURIComponent(
    "Hello, I would like to inquire about scheduling a consultation with Professor Bouckaert."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group animate-fade-in"
      aria-label="Contact us on WhatsApp"
    >
      <Button
        size="lg"
        className="h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-110 p-0"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </Button>
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary"></span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
