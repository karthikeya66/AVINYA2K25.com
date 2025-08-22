import { Trophy, Gift } from "lucide-react";

const PrizesSection = () => {
  const perks = [
    "Premium swags and merchandise",
    "Industry recognition and certificates",
    "Networking with AI professionals",
    "Learning from expert mentors",
  ];

  return (
    <section id="prizes" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gold text-neon mb-6">
            Prizes & Perks
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Compete for amazing rewards and exclusive opportunities
          </p>
        </div>

        {/* Prize Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Prize Pool Card */}
          <div className="glass rounded-2xl p-8 border-2 border-gold/30 hover-scale group relative overflow-hidden">
            {/* Gold glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-gold to-gold-glow flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-gold-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gold text-glow">
                    ₹1 Lakh Prize Pool
                  </h3>
                  <p className="text-text-secondary">Cash Prizes</p>
                </div>
              </div>
              
              <p className="text-text-secondary leading-relaxed">
                Substantial cash prizes for winning teams across all tracks, 
                distributed fairly among top performers.
              </p>
            </div>
          </div>

          {/* Exclusive Perks Card */}
          <div className="glass rounded-2xl p-8 border-2 border-primary/30 hover-scale group relative overflow-hidden">
            {/* Purple glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
                  <Gift className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary text-glow">
                    Exclusive Perks
                  </h3>
                  <p className="text-text-secondary">Beyond Cash Prizes</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {perks.map((perk, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary-glow mt-2 flex-shrink-0" />
                    <span className="text-text-secondary">{perk}</span>
                  </div>
                ))}
              </div>

              {/* Additional Benefits */}
              <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent-cyan/10 border border-primary/20">
                <h4 className="text-primary font-semibold mb-2">Special Opportunities</h4>
                <p className="text-text-secondary text-sm">
                  Top performing teams get direct interview opportunities with our partner companies
                  and potential internship/job offers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="glass rounded-xl p-6 border border-success/30 inline-block">
            <p className="text-success font-semibold mb-2">🎯 Pro Tip</p>
            <p className="text-text-secondary">
              All participants receive certificates of participation and access to our exclusive AI community!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;