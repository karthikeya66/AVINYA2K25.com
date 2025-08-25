import { useEffect, useRef, useState } from "react";

const AnimationStyles = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 8s ease infinite;
      }
      
      .animate-fadeInUp {
        animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
    `,
    }}
  />
);

const NameItem = ({
  children,
  delay,
  isVisible,
}: {
  children: React.ReactNode;
  delay: number;
  isVisible: boolean;
}) => (
  <p
    className={`flex items-center text-lg md:text-xl text-gray-300 opacity-0 transition-all duration-300 hover:text-yellow-400 hover:translate-x-2 cursor-default ${
      isVisible ? "animate-fadeInUp" : ""
    }`}
    style={{ animationDelay: `${delay}s` }}
  >
    <span className="w-1.5 h-1.5 bg-yellow-400/80 rounded-full mr-3"></span>
    {children}
  </p>
);

const OrganizingCommittee = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionElement);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="committee"
      className="py-16 md:py-24 relative overflow-hidden bg-transparent"
    >
      <AnimationStyles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative z-10">
          <div className="text-center mb-16">
            <div className="relative group">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient leading-loose tracking-wide drop-shadow-lg pb-3">
                Organizing Committee
              </h2>
              <div className="relative mb-12">
                <div className="w-48 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
                <div className="absolute inset-0 w-48 h-1.5 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Convenors Column */}
            <div className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Convenors
              </h3>
              <div className="space-y-6">
                <NameItem delay={0.1} isVisible={isVisible}>
                  Dr. Manoranjan Dash
                </NameItem>
                <NameItem delay={0.2} isVisible={isVisible}>
                  Dr. Ramakrishna Reddy
                </NameItem>
                <NameItem delay={0.3} isVisible={isVisible}>
                  Mrs. M. Swarnalatha
                </NameItem>
                <NameItem delay={0.4} isVisible={isVisible}>
                  Mrs. M. Madhavi
                </NameItem>
                <NameItem delay={0.5} isVisible={isVisible}>
                  Mrs. CH. Padmini
                </NameItem>
              </div>
            </div>

            {/* Co-Convenors Column */}
            <div className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
                Co-Convenors
              </h3>
              <div className="space-y-6">
                <NameItem delay={0.6} isVisible={isVisible}>
                  Mr. Victor Daniel
                </NameItem>
                <NameItem delay={0.7} isVisible={isVisible}>
                  Mr. G. Sridhar Reddy
                </NameItem>
                <NameItem delay={0.8} isVisible={isVisible}>
                  Mr. N. Raghu
                </NameItem>
                <NameItem delay={0.9} isVisible={isVisible}>
                  Mrs. P. Archana
                </NameItem>
                <NameItem delay={1.0} isVisible={isVisible}>
                  Mrs. P. Srilatha
                </NameItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizingCommittee;
