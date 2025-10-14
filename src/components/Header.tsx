import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Qualifications", path: "/qualifications" },
    { name: "Procedures", path: "/procedures" },
    { name: "Patient Info", path: "/patient-info" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    // Force scroll to top immediately when clicking navigation
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md shadow-lg border-b border-gray-800 transition-all duration-300"
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-brand-black flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <span className="text-2xl font-bold text-brand-white">MB</span>
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-bold text-white leading-tight">
                  Prof. M.M.R Bouckaert
                </div>
                <div className="text-xs text-gray-300">
                  Maxillofacial & Oral Surgeon
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => handleNavClick()}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-brand-yellow ${
                    location.pathname === link.path
                      ? "text-brand-yellow"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <a href="tel:0119703320" className="hidden sm:block">
                <Button
                  size="default"
                  className="bg-brand-yellow text-brand-black hover:bg-brand-red hover:text-brand-white transition-all duration-300"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </a>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 animate-fade-in">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => handleNavClick()}
                    className={`text-base font-medium py-2 px-4 rounded-lg transition-colors duration-200 ${
                      location.pathname === link.path
                        ? "bg-brand-yellow text-brand-black"
                        : "text-white hover:bg-brand-yellow hover:text-brand-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a href="tel:0119703320" className="mt-2">
                  <Button size="lg" className="w-full bg-brand-red text-brand-white hover:bg-brand-black">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20" />
    </>
  );
};

export default Header;
