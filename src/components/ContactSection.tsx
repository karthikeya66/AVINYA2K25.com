import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Star } from "lucide-react";

const ContactSection = () => {
  const coordinators = [
    {
      name: "P. Sai Sankar",
      phone: "+91 9492838482"
    },
    {
      name: "A. Rahul Sai", 
      phone: "+91 9347613587"
    },
    {
      name: "Karthik Deshmukh",
      phone: "+91 7569236628"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-accent-blue text-neon mb-6">
            Community & Contact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Join Community */}
          <div className="glass rounded-2xl p-8 border border-primary/30 hover-scale">
            <h3 className="text-2xl font-bold text-primary text-glow mb-6">
              Join Our Community
            </h3>
            
            <div className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground justify-start gap-3 py-6 text-base font-medium"
                disabled
              >
                <MessageCircle className="h-5 w-5" />
                Join Discord (Coming Soon)
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-success/50 text-success hover:bg-success hover:text-success-foreground justify-start gap-3 py-6 text-base font-medium"
                disabled
              >
                <MessageCircle className="h-5 w-5" />
                Join WhatsApp (Coming Soon)
              </Button>
            </div>
          </div>

          {/* Student Coordinators */}
          <div className="glass rounded-2xl p-8 border border-success/30 hover-scale">
            <h3 className="text-2xl font-bold text-success text-glow mb-6">
              Student Coordinators
            </h3>
            
            <div className="space-y-4">
              {coordinators.map((coordinator, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-card/30 border border-card-border/20">
                  <span className="text-text-primary font-medium">
                    {coordinator.name}
                  </span>
                  <a 
                    href={`tel:${coordinator.phone}`}
                    className="flex items-center gap-2 text-success hover:text-success-glow transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">{coordinator.phone}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gold text-neon mb-12">
            Sponsors & Partners
          </h2>
          
          <div className="glass rounded-2xl p-12 border border-gold/30 hover-scale">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-gold to-gold-glow flex items-center justify-center">
                <Star className="h-10 w-10 text-gold-foreground" />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gold text-glow mb-6">
              Coming Soon
            </h3>
            
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              We're partnering with leading tech companies and organizations. 
              Sponsor details will be announced soon!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-card-border/20 pt-12">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Event Info */}
            <div>
              <h4 className="text-xl font-bold text-primary mb-4">AVINYA 2K25</h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                24-Hour National Level Hackathon + Bootcamp hosted by Department of AI, Anurag University.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-success mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                {["About", "Tracks", "Prizes", "FAQ", "Register", "Contact"].map((link) => (
                  <div key={link}>
                    <button 
                      onClick={() => {
                        const element = document.querySelector(`#${link.toLowerCase()}`);
                        if (element) element.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-text-secondary hover:text-success transition-colors"
                    >
                      {link}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold text-accent-blue mb-4">Social Media</h4>
              <p className="text-text-secondary text-sm">
                Follow us for updates (Coming Soon)
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-card-border/10 text-center">
            <p className="text-text-muted text-sm">
              © 2025 AVINYA Hackathon | Anurag University. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;