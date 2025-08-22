import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Tracks", href: "#tracks" },
    { label: "Prizes", href: "#prizes" },
    { label: "Schedule", href: "#schedule" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-card-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary text-glow">
            AVINYA 2K25
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Register Button */}
          <div className="hidden md:block">
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-6 py-2 rounded-lg hover-glow"
              onClick={() => window.open('https://forms.gle/YsjWa5qstQYPeFgD7', '_blank')}
            >
              ⚡ Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-card-border/20">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="default" 
                className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold w-full mt-4"
                onClick={() => window.open('https://forms.gle/YsjWa5qstQYPeFgD7', '_blank')}
              >
                ⚡ Register Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;