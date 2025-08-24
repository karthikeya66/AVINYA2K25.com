import { Brain, Shield, Zap, Globe, Heart, Factory, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// 3D Tilt Effect Component
const TiltCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / 20) * (isHovered ? 1 : 0);
    const rotateX = ((centerY - y) / 20) * (isHovered ? 1 : 0);
    
    setRotation({ x: rotateX, y: rotateY });
  };

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-500 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
    >
      {children}
    </div>
  );
};

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
    <section id="tracks" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>
      <div className="container mx-auto max-w-7xl relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Choose Your Challenge
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-neon bg-gradient-to-r from-primary via-accent-cyan to-success bg-clip-text text-transparent mb-6">
            Hackathon Tracks
          </h2>
          <p className="text-lg text-text-secondary/90 max-w-3xl mx-auto leading-relaxed">
            Choose your battlefield! Multiple tracks to showcase your skills and tackle challenges across different domains.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            const gradientId = `track-gradient-${index}`;
            
            return (
              <TiltCard key={track.title} className="h-full">
                <div 
                  className="h-full glass rounded-2xl p-6 border border-card-border/20 group transition-all duration-500 relative overflow-hidden"
                  style={{ 
                    '--tw-shadow-color': 'hsla(0,0%,100%,.03)',
                    '--tw-shadow': '0 4px 30px -5px var(--tw-shadow-color)',
                    '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                    '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
                    boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)',
                    animationDelay: `${index * 0.1}s`,
                    transform: 'translateZ(0)',
                    willChange: 'transform, box-shadow',
                  } as React.CSSProperties}
                >
                  {/* Gradient Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${track.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-700`}></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon with floating animation */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${track.gradient} flex items-center justify-center mb-6 transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent-cyan transition-all duration-500">
                        {track.title}
                      </h3>
                      
                      <p className="text-text-secondary/90 text-base leading-relaxed mb-6 group-hover:text-text-primary/90 transition-colors duration-300">
                        {track.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {track.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1.5 text-xs font-medium bg-card/60 backdrop-blur-sm border border-card-border/30 rounded-full text-text-muted group-hover:bg-card/80 group-hover:border-card-border/50 group-hover:text-text-primary/90 transition-all duration-300 flex items-center"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* View Details Button */}
                      <div className="flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform duration-300 mt-4">
                        <span>Learn more</span>
                        <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Track Selection Info */}
        <div className="mt-16 text-center relative">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent-cyan/20 to-success/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative glass rounded-xl p-8 border border-primary/20 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm max-w-3xl mx-auto">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent-cyan text-white text-xs font-bold px-4 py-1 rounded-full">
                🎯 Track Selection
              </div>
              <p className="text-text-primary/90 leading-relaxed mb-4">
                Teams can choose any track that aligns with their project idea. <span className="font-semibold text-primary">Cross-track innovations are encouraged!</span>
              </p>
              <p className="text-text-secondary text-sm">
                Each track has dedicated mentors and judges from relevant industries to guide you through your hackathon journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TracksSection;