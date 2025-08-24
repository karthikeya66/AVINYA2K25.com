"use client";

import { useEffect, useRef, useState } from "react";
import { Trophy } from "lucide-react";

const useCountUp = (end: number, duration: number) => {
  const [count, setCount] = useState(0);
  const animationRef = useRef<number>();
  
  const startAnimation = () => {
    setCount(0); // Reset to 0 before starting
    const startTime = performance.now();
    const endTime = startTime + duration;
    
    const animate = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (timeElapsed < duration) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  };
  
  return { count, startAnimation };
};

const PrizePoolSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { count, startAnimation } = useCountUp(100000, 2000);
  const isObserving = useRef(false);

  useEffect(() => {
    if (!sectionRef.current || isObserving.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startAnimation();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -20% 0px'
      }
    );

    observer.observe(sectionRef.current);
    isObserving.current = true;

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [startAnimation]);
  
  return (
    <section ref={sectionRef} id="prizes" className="py-16 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-6 mb-6 md:mb-0">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                <Trophy className="h-8 w-8 text-yellow-100" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-100">Total Prize Pool</h3>
                <p className="text-yellow-50/80 text-sm">Cash prizes for top teams</p>
              </div>
            </div>
            <div className="text-5xl md:text-6xl font-bold text-yellow-400 text-glow-yellow">
              <span className="font-mono">₹{count.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GlowEffect = () => (
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl pointer-events-none" />
);

export default PrizePoolSection;
