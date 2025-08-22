import { Target, Lightbulb, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Mission",
      description: "Build cutting-edge AI solutions that address real-world challenges in just 24 hours of intensive development.",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Lightbulb,
      title: "Why Attend",
      description: "Experience innovation, receive expert mentorship, collaborate with brilliant minds, and compete for amazing prizes.",
      gradient: "from-success to-success-glow",
    },
    {
      icon: Users,
      title: "Hosted By",
      description: "Department of Artificial Intelligence, Anurag University - Leading the future of AI education and research.",
      gradient: "from-accent-blue to-accent-cyan",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-4xl md:text-6xl font-bold text-neon bg-gradient-to-r from-primary via-primary-glow to-accent-cyan bg-clip-text text-transparent mb-6">
            About AVINYA 2K25
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Join us for an intensive 24-hour journey where innovation meets artificial intelligence. 
            AVINYA 2K25 combines the thrill of competitive hackathon with comprehensive bootcamp learning.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="glass rounded-xl p-8 border border-card-border/20 hover-scale group transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:animate-float`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 glass rounded-2xl p-8 border border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "24", label: "Hours of Coding", suffix: "" },
              { number: "₹1", label: "Lakh Prize Pool", suffix: "" },
              { number: "500+", label: "Participants", suffix: "" },
              { number: "20+", label: "Mentors & Judges", suffix: "" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-glow bg-gradient-to-r from-primary to-accent-cyan bg-clip-text text-transparent">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-text-muted font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;