import { Code, GraduationCap, Users, UserCircle2 } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: "24-Hour Sprint",
      description: "Intense coding marathon where groundbreaking solutions come to life",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: GraduationCap,
      title: "Bootcamp Experience",
      description: "Hands-on learning sessions with industry experts and mentors",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Users,
      title: "Top Innovators",
      description: "Collaborate with the best minds from across the nation",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: UserCircle2,
      title: "Expert Mentors",
      description: "Learn from industry leaders and technology pioneers",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-[#6C63FF] to-[#A855F7] bg-clip-text text-transparent">AVINYA 2K25</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            The premier national-level hackathon and bootcamp experience that brings together the brightest minds in technology for an intense 24-hour coding sprint where innovation meets creativity.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;