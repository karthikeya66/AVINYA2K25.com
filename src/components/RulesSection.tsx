import { Users, Code, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const RulesSection = () => {
  const rules = [
    {
      icon: Users,
      title: "Team Guidelines",
      details: [
        "Team Size: 2-4 members per team",
        "Early Bird: ₹700 per team (₹650 for all-girls teams)",
        "Deadline: August 31, 2025",
        "Regular Fee: ₹750 per team",
        "Final Deadline: September 13, 2025"
      ]
    },
    {
      icon: Code,
      title: "Ready to Hack?",
      description: "Secure your spot in this epic 24-hour AI hackathon journey. Limited seats available!",
      isRegistration: true
    }
  ];

  return (
    <section id="rules" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-primary text-neon mb-6">
            Rules & Registration
          </h2>
        </div>

        {/* Rules Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {rules.map((rule, index) => {
            const Icon = rule.icon;
            
            if (rule.isRegistration) {
              return (
                <div key={index} className="glass rounded-2xl p-8 border border-success/30 hover-scale group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-success/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-success to-success-glow flex items-center justify-center">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-success text-glow mb-4">
                      {rule.title}
                    </h3>
                    
                    <p className="text-text-secondary mb-8 leading-relaxed">
                      {rule.description}
                    </p>
                    
                    <Button 
                      className="bg-success hover:bg-success-glow text-success-foreground font-semibold px-8 py-3 text-lg rounded-lg w-full hover-glow"
                      onClick={() => window.open('https://forms.gle/YsjWa5qstQYPeFgD7', '_blank')}
                    >
                      🔗 Register on Google Form
                    </Button>
                  </div>
                </div>
              );
            }
            
            return (
              <div key={index} className="glass rounded-2xl p-8 border border-primary/30 hover-scale group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary text-glow">
                      {rule.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {rule.details?.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary-glow mt-2 flex-shrink-0" />
                        <span className="text-text-secondary">
                          <strong className="text-primary">{detail.split(':')[0]}:</strong>
                          {detail.includes(':') ? detail.split(':')[1] : detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Notice */}
        <div className="mt-12 text-center">
          <div className="glass rounded-xl p-6 border border-gold/30 inline-block max-w-md mx-auto">
            <p className="text-gold font-semibold mb-2">⚡ Early Bird Special</p>
            <p className="text-text-secondary">
              Save ₹50 by registering before August 31st! All-girls teams get additional ₹50 discount.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;