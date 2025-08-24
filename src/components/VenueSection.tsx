import { MapPin, Calendar, Clock, Map, ExternalLink } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import styles from "./VenueSection.module.css";

// Animated background particles component
const AnimatedBackground = () => {
  const particles = Array(20).fill(0);
  
  return (
    <div className={styles.animatedBg}>
      {particles.map((_, i) => {
        const size = Math.random() * 8 + 4;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 10 + Math.random() * 20;
        
        return (
          <div 
            key={i}
            className={styles.particle}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        );
      })}
    </div>
  );
};

// Intersection Observer hook for scroll animations
const useIntersectionObserver = (ref: React.RefObject<HTMLElement>, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isVisible;
};

const VenueSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  return (
    <section ref={sectionRef} id="venue" className="py-20 px-4 sm:px-6 relative text-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-md rounded-3xl p-12 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5">
          {/* Header */}
          <div className="mb-6">
            <div className="relative group mb-10">
              <h2 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-[1.1] pb-2">
                Anurag University
              </h2>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-400 mt-1">Hyderabad, Telangana 500088</p>
          </div>

          {/* Highlights */}
          <ul className="space-y-5 mb-10 text-xl">
            <li className="flex items-start gap-3 group">
              <span className="text-pink-400 text-3xl group-hover:scale-110 transition-transform">📍</span>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                Venkatapur, Ghatkesar, Hyderabad
              </p>
            </li>
            
            <li className="flex items-center gap-3 group">
              <span className="text-red-400 text-3xl group-hover:scale-110 transition-transform">🚗</span>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                Easy access from Hyderabad city center
              </p>
            </li>
            
            <li className="flex items-center gap-3 group">
              <span className="text-blue-400 text-3xl group-hover:scale-110 transition-transform">🏢</span>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                State-of-the-art facilities and infrastructure
              </p>
            </li>
            
            <li className="flex items-center gap-3 group">
              <span className="text-green-400 text-3xl group-hover:scale-110 transition-transform">📶</span>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                High-speed internet and modern labs
              </p>
            </li>
          </ul>

          {/* Mini Map */}
          <div className="mt-10 rounded-2xl overflow-hidden border-2 border-gray-700 hover:border-cyan-400/70 transition-all duration-300">
            <div className="relative" style={{ height: '400px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.392524194909!2d78.656041!3d17.4200774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb76730bf4dccf%3A0x2ca84b53416f0abd!2sAnurag%20University%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1692441600000!5m2!1sen!2sin"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Anurag University Location"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
            </div>
            <div className="p-4 bg-gradient-to-r from-gray-900/80 to-gray-900/50 backdrop-blur-sm">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=17.4200774,78.6560408"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                <MapPin size={14} />
                View on Google Maps
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400 mb-4">Questions about the venue?</p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all"
            >
              Contact Organizers
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down">
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
