import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Practice Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">
              Professor M Bouckaert
            </h3>
            <p className="text-sm opacity-90 mb-2">
              Specialist Maxillofacial and Oral Surgeon
            </p>
            <p className="text-xs opacity-75">
              B.ChD, M.Dent (MFOS), FCMFOS(SA), FFD.RCS (Ireland)
            </p>
            <p className="text-xs opacity-75 mt-2">
              Practice Number: 6201296
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-secondary transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-secondary transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-secondary transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-secondary" />
                <span className="opacity-90">
                  Arwyp Medical Suites, 5th Floor<br />
                  22 Pine Avenue, Kempton Park, 1620
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-secondary" />
                <a href="tel:0119703320" className="hover:text-secondary transition-colors opacity-90">
                  (011) 970-3320
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-75">
            <p>
              © {currentYear} Professor M Bouckaert. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-xs">
                Languages: English & Afrikaans
              </p>
              <p className="text-xs">
                Designed & Coded by{" "}
                <a
                  href="https://www.lunexweb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-colors duration-300"
                >
                  Lunexweb
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
