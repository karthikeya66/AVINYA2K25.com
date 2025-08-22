import { Brain, Shield, Zap, Globe, Heart, Factory } from "lucide-react";

const TracksSection = () => {
  const tracks = [
    {
      icon: Brain,
      title: "AI Agents",
      description: "Design intelligent agents powered by ML, NLP, and computer vision to automate complex tasks and solve real-world challenges.",
      gradient: "from-primary to-primary-glow",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face"]
    },
    {
      icon: Shield,
      title: "Ethical AI",
      description: "Create responsible AI systems that ensure fairness, transparency, and ethical decision-making.",
      gradient: "from-accent-blue to-accent-cyan",
      technologies: ["AI Ethics", "Fairness", "Transparency", "Responsible AI"]
    },
    {
      icon: Heart,
      title: "AI in Healthcare",
      description: "Build AI-driven solutions for healthcare — from diagnosis and treatment to patient care and management.",
      gradient: "from-success to-success-glow",
      technologies: ["Medical APIs", "IoT", "Computer Vision", "Data Analytics"]
    },
    {
      icon: Zap,
      title: "Generative AI",
      description: "Innovate with Generative AI to create transformative solutions that make a real impact.",
      gradient: "from-accent-pink to-primary",
      technologies: ["LLMs", "Generative Models", "Creative AI", "Emerging Tech"]
    }
  ];

  return (
    <section id="tracks" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-neon bg-gradient-to-r from-primary via-accent-cyan to-success bg-clip-text text-transparent mb-6">
            Hackathon Tracks
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Choose your battlefield! Multiple tracks to showcase your skills and tackle challenges across different domains.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <div 
                key={track.title}
                className="glass rounded-xl p-6 border border-card-border/20 hover-scale group transition-all duration-500 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${track.gradient} flex items-center justify-center mb-4 group-hover:animate-float`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                    {track.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {track.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {track.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-card/50 border border-card-border/30 rounded-md text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Track Selection Info */}
        <div className="mt-12 text-center">
          <div className="glass rounded-xl p-6 border border-primary/30 inline-block max-w-2xl">
            <h4 className="text-primary font-semibold mb-2">🎯 Track Selection</h4>
            <p className="text-text-secondary text-sm leading-relaxed">
              Teams can choose any track that aligns with their project idea. Cross-track innovations are encouraged! 
              Each track has dedicated mentors and judges from relevant industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TracksSection;