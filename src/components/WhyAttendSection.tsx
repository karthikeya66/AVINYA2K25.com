import { Brain, Rocket, Network, UserCircle2, Eye, Award } from "lucide-react";

const WhyAttendSection = () => {
  const cards = [
    {
      icon: Brain,
      title: "AI & Innovation",
      emoji: "🤖",
      description: "Build futuristic solutions with cutting-edge AI and emerging technologies.",
      gradient: "bg-gradient-to-br from-[#3bb6ff] to-[#6f86ff]"
    },
    {
      icon: Rocket,
      title: "Career Opportunities",
      emoji: "🚀",
      description: "Unlock pathways to internships, jobs, and industry recognition.",
      gradient: "bg-gradient-to-br from-[#ff512f] to-[#dd2476]"
    },
    {
      icon: Network,
      title: "Networking",
      emoji: "🌐",
      description: "Connect with like-minded peers, industry experts, and future collaborators.",
      gradient: "bg-gradient-to-br from-[#ff6f91] to-[#ff9671]"
    },
    {
      icon: UserCircle2,
      title: "Mentorship",
      emoji: "💡",
      description: "Learn directly from experienced mentors who will guide your journey.",
      gradient: "bg-gradient-to-br from-[#2af598] to-[#009efd]"
    },
    {
      icon: Eye,
      title: "Exposure",
      emoji: "📢",
      description: "Showcase your talent to judges, recruiters, and top organizations.",
      gradient: "bg-gradient-to-br from-[#f7971e] to-[#ffd200]"
    },
    {
      icon: Award,
      title: "Prizes & Recognition",
      emoji: "🏆",
      description: "Win exciting prizes and boost your portfolio with achievements.",
      gradient: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]"
    }
  ];

  return (
    <section id="why-attend" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-[#3bb6ff] to-[#a259ff] bg-clip-text text-transparent">
              Why Attend?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3bb6ff] to-[#a259ff] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div 
                key={card.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,182,255,0.3)] hover:-translate-y-1.5 hover:border-white/20"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${card.gradient} w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1 flex items-center">
                      {card.title} <span className="ml-2">{card.emoji}</span>
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;
